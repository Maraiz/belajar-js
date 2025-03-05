// let nilai = 80

// if (nilai >=  75) {
//     console.log('Selamat Anda Lulus');
// } else {
//     console.log('Selamat Anda Tidak Lulus');
// }


// let nilai = 80;

// if (nilai > 90) {
//     console.log('Selamat Nilai Anda A');
// } else if (nilai >= 80) {
//     console.log("Selamat Nilai Anda B");
// } else if (nilai >= 70) {
//     console.log('Selamat Nilai Anda C');
// } else {
//     console.log('Mohon Maaf Anda Remidi');
// }

// let nilai = 80;
// let grade = (nilai >= 80) ? "Selamat Anda Mendapatkan Nilai Sempurna" : (nilai >= 70) ? "Nilai B" : "Nilai C";

// console.log(grade);

// let menu = "nasi goren";

// switch (menu) {
//     case "nasi goreng":
//         console.log("Anda memesan Nasi Goreng.");
//         break;
//     case "mie ayam":
//         console.log("Anda memesan Mie Ayam.");
//         break;
//     default:
//         console.log("Menu tidak tersedia.");
// }

// let umur = 15;
// let status = (umur >= 17) ? "Dewasa" : "Anak-anak";

// console.log(status);

const price = 100000;       // Harga awal adalah 100000
const isMember = false;      // Status keanggotaan (true berarti pengguna adalah member)
const discount = isMember ? 0.1 : 0; // Jika member, diskon 10% (0.1), jika bukan, diskon 0%

console.log(`Anda mendapatkan discount sebesar ${discount * price}`);