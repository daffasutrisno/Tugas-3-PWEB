// Menangani pengiriman form
document
  .getElementById("registrationForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Mencegah pengiriman form

    // Mengambil nilai dari form
    const name = document.getElementById("name").value;
    const nickname = document.getElementById("nickname").value;
    const phone = document.getElementById("phone").value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const hobbies = Array.from(
      document.querySelectorAll('input[name="hobby"]:checked')
    ).map((el) => el.value);
    const city = document.getElementById("city").value;
    const semester = document.getElementById("semester").value;
    const ipk = document.getElementById("ipk").value;
    const sks = document.getElementById("sks").value;
    const bio = document.getElementById("bio").value;

    // Menampilkan data di result container
    document.getElementById("resultName").innerText = name;
    document.getElementById("resultNickname").innerText = nickname;
    document.getElementById("resultPhone").innerText = phone;
    document.getElementById("resultGender").innerText = gender;
    document.getElementById("resultHobby").innerText = hobbies.join(", ");
    document.getElementById("resultCity").innerText = city;
    document.getElementById("resultSemester").innerText = semester;
    document.getElementById("resultIpk").innerText = ipk;
    document.getElementById("resultSks").innerText = sks;
    document.getElementById("resultBio").innerText = bio;

    // Menyembunyikan form dan menampilkan hasil
    document.getElementById("formContainer").style.display = "none";
    document.getElementById("resultContainer").style.display = "block";
  });

// Fungsi untuk kembali ke form
function goBack() {
  document.getElementById("formContainer").style.display = "block";
  document.getElementById("resultContainer").style.display = "none";
  document.getElementById("registrationForm").reset(); // Mereset form
}

// Tampilkan form saat halaman dimuat
document.getElementById("formContainer").style.display = "block";
