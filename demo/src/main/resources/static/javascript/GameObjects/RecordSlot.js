class RecordSlot {
    constructor(scene, record) {
        this.scene = scene;
        this.record = record;
    }

    displaySlot(x, y) {
        // Crear un rectángulo de fondo rojo
        
        var rectanguloBorde = this.scene.add.rectangle(x+600, y, 1110, 130, 0xFFC300);
        var rectanguloFondo = this.scene.add.rectangle(x+600, y, 1100, 120, 0x6F025E);
        //rectanguloFondo.setOrigin(0, 0);

        // Ajusta el formato según tus necesidades
        this.scene.add.text(x + 80, y -50, 'J1: ' + this.record.player1, { fontSize: 50, fill: '#FFC300' });
        this.scene.add.text(x + 80, y , 'J2: ' + this.record.player2, { fontSize: 50, fill: '#FFC300' });
        this.scene.add.text(x + 580, y -50, 'NvL: ' + this.record.levelID, { fontSize: 50, fill: '#FFC300' });
        this.scene.add.text(x + 580, y , 'Pts: ' + this.record.puntuation, { fontSize: 50, fill: '#FFC300' });
        if(this.record.victoria == true){
            this.scene.add.text(x + 910, y -25, 'Victoria', { fontSize: 50, fill: '#006810', fontWeigth: 'bold' });
        }
        else{
            this.scene.add.text(x + 920, y -25, 'Derrota', { fontSize: 50, fill: '#FF2525', fontWeigth: 'bold' });
        
        }
        //this.scene.add.text(x + 10, y + 90, 'Resultado: ' + (this.record.victory ? 'Victoria' : 'Derrota'), { fontSize: 16, fill: 'white' });
    }
}