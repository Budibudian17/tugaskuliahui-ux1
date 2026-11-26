function luasPersegiPanjang(panjang, lebar) {
  return panjang * lebar;
}

const luas = luasPersegiPanjang(5, 10);
document.getElementById("hasil").textContent = "Luas Persegi Panjang: " + luas;
