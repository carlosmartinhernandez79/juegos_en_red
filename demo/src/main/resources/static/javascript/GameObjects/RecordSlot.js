class RecordSlot {
    constructor(scene, x, y, record) {
        this.scene = scene;
        this.x = x;
        this.y = y;
        this.record = record;

        this.displaySlot();
    }

    displaySlot() {
        // Crear un rectángulo de fondo rojo
        var rectanguloFondo = this.scene.add.rectangle(this.x, this.y, 1000, 100, 0x4F0043);
        rectanguloFondo.setOrigin(0, 0);

        // Ajusta el formato según tus necesidades
        this.scene.add.text(this.x, this.y, 'J1: ' + this.record.player1, { fontSize: 16, fill: 'white' });
        this.scene.add.text(this.x, this.y + 20, 'J2: ' + this.record.player2, { fontSize: 16, fill: 'white' });
        this.scene.add.text(this.x + 300, this.y, 'Nvl: ' + this.record.levelID, { fontSize: 16, fill: 'white' });
        this.scene.add.text(this.x + 300, this.y + 20, 'Punt: ' + this.record.puntuation, { fontSize: 16, fill: 'white' });
        this.scene.add.text(this.x + 600, this.y + 10, 'Resultado: ' + (this.record.victory ? 'Victoria' : 'Derrota'), { fontSize: 16, fill: 'white' });
    }
}