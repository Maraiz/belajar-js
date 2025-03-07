class kopi {
    constructor(banyakair) {
        this.banyakair = banyakair;
        this._suhu = 90;
    }   
    set suhu(suhu) {
        console.log('Kamu Tidak bisa menggubah suhu ini');
    }
    get suhu() {
        return this._suhu;
    }
}

const kopii = new kopi(10);
console.log("Sebelum diubah", kopii.suhu, "dan airnya", kopii.banyakair);
kopii.suhu = 100;
console.log("setelah diubah", kopii.suhu);

