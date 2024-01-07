package com.example.demo;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Record;

//Permite acceso a los archivos de esa url
//@CrossOrigin(origins = "http://127.0.0.1:5500")

//Permite acceso a todo el mundo
@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/records")
public class RecordController {
    private final List<Record> records = new ArrayList<>();
    private long nextRecordId = 1;

    // Obtener todos los records (GET)
    @GetMapping
    public List<Record> getAllRecords() {
        return records;
    }

    // Obtener un record por ID (GET)
    @GetMapping("/{id}")
    public ResponseEntity<Record> getRecordById(@PathVariable Long id) {
        Optional<Record> foundRecord = records.stream().filter(record -> record.getId().equals(id)).findFirst();
        return foundRecord.map(record -> ResponseEntity.ok().body(record)).orElse(ResponseEntity.notFound().build());
    }

    //Obtener recordsOrdenados por tiempo 
    @GetMapping("/sortedByTime")
    public List<Record> getAllRecordsSorted() {
        List<Record> sortedRecords = new ArrayList<>(records);
        Collections.sort(sortedRecords, Comparator.comparingInt(Record::getTimeInSeconds).reversed());
        return sortedRecords;
    }

    // Obtener 
    @GetMapping("/maxTime/{levelId}")
    public ResponseEntity<Record> getRecordWithMaxTimeInSeconds(@PathVariable int levelId) {
        List<Record> recordsForLevel = getRecordsByLevel(levelId);

        Optional<Record> maxTimeRecord = recordsForLevel.stream()
                .max(Comparator.comparingInt(Record::getTimeInSeconds));

        return maxTimeRecord.map(record -> ResponseEntity.ok().body(record))
                .orElse(ResponseEntity.notFound().build());
    }
    // Método auxiliar para obtener todos los registros para un nivel específico
    private List<Record> getRecordsByLevel(int levelId) {
        return records.stream()
                .filter(record -> record.getLevelID() == levelId)
                .toList();
    }

    // Obtener los cinco registros con mejores puntuaciones
    @GetMapping("/top5ByPunctuation")
    public ResponseEntity<List<Record>> getTop5RecordsByPunctuation() {
        List<Record> top5Records = getTop5RecordsByPunctuationLogic();

        if (top5Records.isEmpty()) {
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.ok().body(top5Records);
        }
    }

    // Lógica para obtener los cinco registros con mejores puntuaciones
    private List<Record> getTop5RecordsByPunctuationLogic() {
        List<Record> sortedRecords = new ArrayList<>(records);
        sortedRecords.sort(Comparator.comparingInt(Record::getPuntuation).reversed());

        return sortedRecords.stream()
                .limit(4)
                .collect(Collectors.toList());
    }
    
    @GetMapping("/maxPuntuation/{levelId}")
    public ResponseEntity<Record> getRecordWithMaxPuntuationForLevel(@PathVariable int levelId) {
        List<Record> recordsForLevel = getRecordsByLevel(levelId);

        if (recordsForLevel.isEmpty()) {
            return ResponseEntity.notFound().build();
        }

        Optional<Record> maxPuntuationRecord = recordsForLevel.stream()
                .max(Comparator.comparingInt(Record::getPuntuation));

        return maxPuntuationRecord.map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }



    // Crear un nuevo record (POST)
    @PostMapping
    public Record createRecord(@RequestBody Record record) {
        record.setId(nextRecordId++);
        if(record.getVictoria()){
            record.calculatePuntuation();
        }
        else{
            record.calculatePuntuationDefeat();
        }
        
        records.add(record);
        return record;
    }

    // Actualizar un record existente (PUT)
    @PutMapping("/{id}")
    public ResponseEntity<Record> updateRecord(@PathVariable Long id, @RequestBody Record updatedRecord) {
        for (int i = 0; i < records.size(); i++) {
            Record existingRecord = records.get(i);
            if (existingRecord.getId().equals(id)) {
                updatedRecord.setId(existingRecord.getId());
                records.set(i, updatedRecord);
                return ResponseEntity.ok().body(updatedRecord);
            }
        }
        return ResponseEntity.notFound().build();
    }

    // Eliminar un record por ID (DELETE)
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteRecord(@PathVariable Long id) {
        records.removeIf(record -> record.getId().equals(id));
        return ResponseEntity.noContent().build();
    }


    
}