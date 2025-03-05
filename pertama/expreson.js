const convertCelsiusToFahrenheit = function (temperature) {
    const result = (9 / 5) * temperature + 32;
    return result;
  };
  
  const temperatureInFahrenheit = convertCelsiusToFahrenheit(90);
  console.log('Hasil konversi:', temperatureInFahrenheit);
  
  /* Output:
  Hasil konversi: 194
  */

  function main (tambah) {
    let kurang = 10 - tambah;
    return kurang;
  }

  let saya = main(5);
  console.log("Hasil jumlah", saya);