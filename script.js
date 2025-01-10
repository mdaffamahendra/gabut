// Javascript
function pertambahan(x, y) {
  return x + y;
}
function pengurangan(x, y) {
  return x - y;
}
function perkalian(x, y) {
  return x * y;
}
function pembagian(x, y) {
  return x / y;
}

const tambah = pertambahan(20, 10);
const kurang = pengurangan(20, 10);
const kali = perkalian(20, 10);
const bagi = pembagian(20, 10);

function tampilkanLog() {
  console.log(
    `Hasil Pertambahan : ${tambah}\nHasil Pengurangan : ${kurang}\nHasil Perkalian : ${kali}\nHasil Pembagian : ${bagi}`
  );
}
tampilkanLog();
