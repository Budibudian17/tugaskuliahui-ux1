const inputNama = document.querySelector("#nama");
const pesan = document.querySelector("#pesan");

function tampilkanPesan() {
  const nama = inputNama.value.trim();
  pesan.textContent = nama === "" ? 'silakan isi nama' : "Selamat Anda Mendapatkan Sembako atas nama " + nama + "!";
}

inputNama.addEventListener("input", tampilkanPesan);