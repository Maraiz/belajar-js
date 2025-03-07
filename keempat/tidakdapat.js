class kopi {
    #suhu = 90;

    constructor(water) {
        this.water = water;
        this.#suhu =  this.#defaultSuhu();
    }
    set suhu(suhu) {
        console.log('tidak dapat diubah');
    }

    get suhu() {
        return this.#suhu
    }
    #defaultSuhu() {
        return 90;
    }
}