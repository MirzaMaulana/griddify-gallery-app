<div align="center" style="display: flex; justify-content: space-between; align-items: center;">
  <a href="https://laravel.com" target="_blank">
    <img src="https://raw.githubusercontent.com/laravel/art/master/logo-lockup/5%20SVG/2%20CMYK/1%20Full%20Color/laravel-logolockup-cmyk-red.svg" width="200" alt="Logo Laravel">
  </a>
  <a href="https://reactjs.org/" target="_blank">
    <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" height="100" alt="Logo React">
  </a>
</div>

# Griddify Gallery App

Griddify Gallery App adalah aplikasi web yang dibangun dengan menggunakan Laravel, Inertia.js, dan React.

## Instalasi

1. Clone repository ini:
   ```bash
   git clone https://github.com/MirzaMaulana/griddify-gallery-app.git
2. Masuk ke direktori proyek:
    ```terminal
    cd griddify-gallery-app
3. Install dependensi PHP
    ```php
    composer install
4. Install dependensi NPM
   ```npm
   npm install
5. Buat salinan dari file .env.example:
   ```terminal
   cp .env.example .env
6. Generate kunci aplikasi
   ```php
   php artisan key:generate
7. Migrate database
   ```php
   php artisan migrate
8. Mulai server pengembangan
   ```php
   php artisan serve
9. Buka http://localhost:8000 di browser Anda untuk melihat aplikasi.

## Struktur Direktori

- `app/`: Berisi logika aplikasi Laravel.
- `resources/`: Berisi sumber daya seperti file JavaScript dan file Sass.
- `routes/`: Berisi definisi rute aplikasi.
- `database/`: Berisi file migrasi dan konfigurasi database.
- `public/`: Berisi file-file publik seperti gambar dan JavaScript yang akan diakses langsung oleh pengguna.
- `tests/`: Berisi tes aplikasi.

## Penggunaan Inertia.js dengan React

Aplikasi ini menggunakan Inertia.js sebagai perantara antara Laravel dan React. File-file React dapat ditemukan di `resources/js/Pages/`.

## Kontribusi

Jika Anda ingin berkontribusi pada proyek ini, silakan ikuti langkah-langkah berikut:

1. Fork repository ini.
2. Buat branch fitur baru (`git checkout -b fitur-baru`).
3. Commit perubahan Anda (`git commit -am 'Menambahkan fitur baru'`).
4. Push ke branch Anda (`git push origin fitur-baru`).
5. Buat pull request.
