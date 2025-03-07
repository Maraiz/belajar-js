class coffeMachine {
    constructor(waterAmount) {
        this.waterAmount = waterAmount;
        this.suhu = 90;
    }
    buatkopi() {
        console.log(`Membuat kopi dengan suhu ${this.suhu}`);
        console.log(`Dengan ukuran gelas ${this.waterAmount}`);
        
    }
}

const coffe = new coffeMachine(100);
  coffe.suhu = 60; 

coffe.buatkopi();