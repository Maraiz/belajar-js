class Smart {
    constructor(color, brand, model) {
        this.color = color;
        this.brand = brand;
        this.model = model;
    }
    charging() {
        console.log(`Charging ${this.model}`);
    }
}

class Android extends Smart {
    constructor(color, brand, model, device) {
        super(color, brand, model);
        this.device = device;
    }

    charging() {
        super.charging();
        console.log(`Charging ${this.model} with fast charging`);
    }

    splitscreen() {
        console.log('Android mempunyai spit screen');

    }
}

const android = new Android('white', 'B', 'Galaxy S21', 'smart TV');

android.charging();