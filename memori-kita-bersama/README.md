# Memori Kita Bersama

Album foto digital yang hangat dan lembut untuk kenangan bersama teman-teman.

## Cara Menggunakan

### 1. Masukkan Foto
Masukkan foto-foto kamu ke dalam folder `images/` sesuai kategori:

- `images/momen-awal/`
- `images/petualangan/`
- `images/tawa/`
- `images/mengharukan/`
- `images/semua/`

Nama file foto di contoh: `01.jpg`, `02.jpg`, dst.  
Kamu boleh ganti nama file, tapi sesuaikan juga di file HTML-nya.

### 2. Masukkan Lagu
Taruh file lagu (format MP3) di folder `music/` dengan nama:
```
music/lagu.mp3
```

Kalau mau ganti nama file, ubah juga di `index.html` dan semua file di folder `pages/`.

### 3. Ganti Teks (Opsional)
- Judul, quote, dan caption bisa diubah di file HTML.
- Warna dan gaya ada di `style.css`.

### 4. Jalankan di GitHub Pages
1. Buat repository baru di GitHub
2. Upload semua isi folder ini
3. Pergi ke **Settings → Pages**
4. Pilih branch `main` dan folder `/ (root)`
5. Tunggu beberapa menit, lalu buka link yang muncul

## Struktur Folder

```
memori-kita-bersama/
├── index.html              ← Halaman utama
├── style.css               ← Desain
├── script.js               ← Pemutar musik
├── music/
│   └── lagu.mp3            ← Lagu kamu
├── images/
│   ├── momen-awal/
│   ├── petualangan/
│   ├── tawa/
│   ├── mengharukan/
│   └── semua/
└── pages/
    ├── momen-awal.html
    ├── petualangan.html
    ├── tawa.html
    ├── mengharukan.html
    └── semua.html
```

## Catatan
- Desain dibuat dengan kesan hangat, lembut, dan tidak kaku.
- Musik tidak autoplay (karena diblokir browser). Pengunjung harus klik tombol play.
- Volume default diatur rendah agar nyaman.

Dibuat dengan penuh kasih.
