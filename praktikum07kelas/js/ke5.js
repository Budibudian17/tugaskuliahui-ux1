const input = document.getElementById("nama");
const daftar = document.getElementById("daftarClub");

function tambahClub() {
  const namaClub = input.value.trim();
  if (namaClub === "") {
    alert("Silakan isi nama club!");
    return
  }
  const item = document.createElement("li");
  item.appendChild(document.createTextNode(namaClub + " "));

  const tombolHapus = document.createElement("button");
  tombolHapus.textContent = "Hapus";
    tombolHapus.addEventListener("click", () => item.remove());

  item.appendChild(tombolHapus);
  daftar.appendChild(item);
  input.value = "";
  input.focus();
}

