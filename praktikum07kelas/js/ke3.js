function ubahTampilan() {
    const judul =  document.getElementById("judul");
    judul.textContent = "Belajar DOM Asik Ciiin";
    judul.style.color = "blue";
    judul.style.fontSize = "24px";
}

document.getElementById("ubahTampilanBtn").addEventListener("click", ubahTampilan);