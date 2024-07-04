# Sistem Perpustakaan Sederhana

## Bagaimana cara menjalankan project ini ?

### Prerequisites / Prasyarat :

Pastikan Anda telah menginstal software berikut di mesin Anda:

- [Node.js](https://nodejs.org/) (v14 atau lebih baru)
- [Git](https://git-scm.com/)

### Instalasi :

### 1. Download atau clone repository ini

```sh
git clone https://github.com/danimisme/Perpustakaan-web.git
```

### 2. Instal dependensi:

```sh
npm install
```

### 3. Jalankan Project

```sh
npm run dev
```

- Project akan berjalan di local server dan Anda dapat melihat projek dengan membuka http://localhost:5173 di browser Anda.

## Library yang digunakan

- react: Library utama untuk membangun UI. React memungkinkan Anda membuat komponen UI yang dapat digunakan kembali atau reusable component.

- react-redux dan @reduxjs/toolkit : Digumakan untuk mengelola state / state management. state yang dikelola yaitu books dan modals. mengatur bagaimana cara menambahkan, mengedit dan menghapus buku, juga mengatur modal state untuk menampilkan atau menyembunyikan modal.

- react-icon : Digunakan sebagai sumber icon pada project ini.

- react-toastify: Library untuk menampilkan notifikasi toast di aplikasi React. Notifikasi ini bisa digunakan untuk menampilkan pesan pengguna pada saat berhasil menambahkan, mengedit atau menghapus buku.

- uniqid: Digunakan untuk auto generate Id buku pada saat melakukan penambahan buku.

Anda tidak perlu menginstal satu pesatu libary yang digunakan papa project ini, cukup jalankan `npm install` maka project akan menginstal semua dependensi yang diperlukan pada project ini.
