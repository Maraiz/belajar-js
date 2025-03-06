// try {
//     const error = new Error('Terjadi error');
//     throw error;  // Melempar error
//   } catch (e) {
//     console.log('Error yang tertangkap:', e.message);
//   }

// let harga = 50000;
// let beli = 45000;

// if (harga>beli) {
//     throw new Error('pembayaran kurang')
// }

// try {
//     console.log('dijalankan');
//     throw new Error('Error: Program berhenti');
//     console.log('kode ini ga akan jilankan');
    
// }
// catch(err) {
//     console.log('eror dijalamkan');
    
// }

try {
    console.log('ini try block');
    throw new Error('Error: program berhebti');
    console.log('ga dijalankan karena eror');
    
} catch(err) {
    console.log('saat eror ini di jalankan');
} finally {
    console.log("eror apa ga akan dijalankan");
}