const name = "yanto";
let umur = 20;
let nilai = 100;
let aktif = true;

console.log("nama: " + name);
console.log("umur: " + umur);
console.log("nilai: " + nilai);
console.log("tipe nilai: " + typeof nilai);
console.log("aktif: " + aktif);

const tugas = 80;
const uts = 70;
const uas = 90;
const total = tugas * 0.3 + uts * 0.3 + uas * 0.4;
console.log("Nilai Total: " + total);
console.log("lulus: " + (total >= 60));

const nilai2 = 85;
let kategori;

if (nilai2 >= 85) {
  kategori = "A";
} else if (nilai2 >= 70) {
  kategori = "B";
} else if (nilai2 >= 60) {
  kategori = "C";
} else {
  kategori = "D";
}

console.log("Nilai: " + nilai2);
console.log("Grade: " + kategori);


function hitungDiskon(harga, persenDiskon) {
  return harga - (harga * persenDiskon / 100);
}

for (let i = 1; i <= 3; i++) {
  const hargaAwal = i * 100000;
  const bayar = hitungDiskon(hargaAwal, 10);
  console.log("Harga Awal: " + hargaAwal);
  console.log("Diskon: 10%");
  console.log("Harga Akhir: " + bayar);
  console.log("-------------------------");
}