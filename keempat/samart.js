class Smart{
    constructor(warna, jenis, merek) {
        this.warna = warna;
        this.jenis = jenis;
        this.merek = merek;
    }
    hp() {
        console.log(`merek ${this.merek}`);       
    }
}

class Android extends Smart {
    constructor(warna, jenis, merek, device) {
       super(warna, jenis, merek);
       this.device = device;    
    }

    splitscreen() {
        console.log('Android Mempunyai Splitscreen');
        
    }
}

const android = new Android ('Putih', 'HP', 'OPPO', 'GG');