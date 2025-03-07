class Smart {
    constructor(warna, brand, model) {
        this.warna = warna;
        this.brand = brand;
        this.model = model;
    }

    charging() {
        console.log(`HP ini bermerek ${this.brand} dan warna nya ${this.warna}`);
    }
}

class IOS extends Smart {
    airDrop() {
        console.log('IOS memiliki AirDrop');       
    }
}

class Android extends Smart {
    split() {
        console.log('Android Memiliki split');        
    }
}

const ios = new IOS ('hitam', 'apel', '12 pro');
const android = new Android ('biru', 'Oppo', 'X13');

ios.charging();
ios.airDrop();
console.log('\n');

android.charging();
android.split();


console.log(ios instanceof Smart);
console.log(android instanceof Smart);

