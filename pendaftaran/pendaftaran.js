function submitForm() {
    // Validasi formulir dapat ditambahkan di sini
    
    // Mendapatkan nilai dari formulir
    var fullName = document.getElementById('fullName').value;
    var email = document.getElementById('email').value;
    var phoneNumber = document.getElementById('phoneNumber').value;
    var address = document.getElementById('address').value;
    var age = document.getElementById('age').value;
    var gender = document.getElementById('gender').value;
    var counselingType = document.getElementById('counselingType').value;
    var preferOnline = document.getElementById('preferOnline').value;
    var counselingDay = document.getElementById('counselingDay').value;
    var counselingTime = document.getElementById('counselingTime').value;
    var mentalHealthIssues = document.getElementById('mentalHealthIssues').value;
    var paymentMethod = document.getElementById('paymentMethod').value;
    
    // Menggunakan nilai formulir sesuai kebutuhan (misalnya, mengirim ke server, menyimpan di database, dll.)
    console.log('Nama Lengkap:', fullName);
    console.log('Email:', email);
    console.log('Nomor Telepon:', phoneNumber);
    console.log('Alamat:', address);
    console.log('Usia:', age);
    console.log('Jenis Kelamin:', gender);
    console.log('Jenis Konseling:', counselingType);
    console.log('Preferensi Konseling:', preferOnline);
    console.log('Preferensi Hari Konseling:', counselingDay);
    console.log('Preferensi Waktu Konseling:', counselingTime);
    console.log('Masalah Kesehatan Mental:', mentalHealthIssues);
    console.log('Metode Pembayaran:', paymentMethod);
    
    // Di sini, dapat menambahkan logika tambahan, seperti pengiriman formulir ke server atau menyimpan data.
    
    }