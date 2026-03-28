document.addEventListener('DOMContentLoaded', () => {
    const feedbackForm = document.getElementById('feedbackForm');
    const commentDisplay = document.getElementById('commentDisplay');

    // 1. Fungsi Unik: Menampilkan komentar dari Local Storage saat halaman dibuka
    const loadComments = () => {
        const savedComments = JSON.parse(localStorage.getItem('userFeedback')) || [];
        commentDisplay.innerHTML = savedComments.map(item => `
            <div style="border: 1px solid #1abc9c; padding: 10px; border-radius: 10px; margin-bottom: 10px; background: #f9fbfb;">
                <strong style="color: #2c3e50;">${item.name}</strong> 
                <small style="color: #95a5a6; float: right;">${item.date}</small>
                <p style="margin-top: 5px;">${item.message}</p>
            </div>
        `).join('');
    };

    // Panggil fungsi tampilkan saat startup
    loadComments();

    // 2. Event Listener saat tombol Kirim diklik
    feedbackForm.addEventListener('submit', (e) => {
        e.preventDefault(); // Mencegah halaman refresh

        const name = document.getElementById('name').value;
        const message = document.getElementById('message').value;
        const date = new Date().toLocaleString('id-ID'); // Mencatat waktu unik

        // Ambil data lama, tambah data baru
        const savedComments = JSON.parse(localStorage.getItem('userFeedback')) || [];
        savedComments.push({ name, message, date });

        // Simpan kembali ke Local Storage
        localStorage.setItem('userFeedback', JSON.stringify(savedComments));

        // Reset form dan update tampilan
        feedbackForm.reset();
        loadComments();
        
        alert('Terima kasih Michael! Masukan berhasil disimpan di browser.');
    });
});
