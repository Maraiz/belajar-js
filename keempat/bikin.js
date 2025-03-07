class bikin {
    constructor(makanan, mimuman) {
        this.makanan = "mie ayam";
        this.mimuman = 'es jeruk';
    }
    lapar(){
        console.log(`Hari ini aku berbuka puasa dengan ${this.makanan} dan minum ${this.mimuman}`);
    }
    eat() {
        console.log(`Hari ini aku berbuka puasa dengan ${this.makanan} dan minum ${this.mimuman}`);
    }
}

const enak = new bikin ('Nasi Goreng', 'Es bauh') 
    enak.makanan = 'kolon';
    enak.mimuman = 'es kolon'
enak.lapar()