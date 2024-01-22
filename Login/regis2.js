function validateForm(event) {
    event.preventDefault();
    
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirm_password = document.getElementById("confirm_password").value;
    
    // Validasi username
    if (username.trim() === "") {
        alert("Username tidak boleh kosong");
        return;
    }
    
    // Validasi email
    var emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Format email tidak valid");
        return;
    }
    
    // Validasi password
    if (password.length < 6) {
        alert("Password harus memiliki setidaknya 6 karakter");
        return;
    }
    
    // Validasi konfirmasi password
    if (password !== confirm_password) {
        alert("Password dan konfirmasi password tidak cocok");
        return;
    }
    
    // Jika semua validasi berhasil, formulir dapat dikirim atau tindakan lain dapat diambil
    alert("Registrasi berhasil!\\nUsername: " + username + "\\nEmail: " + email);
    // Tambahkan di sini kode untuk mengirim formulir ke server atau tindakan lainnya.
    
    }