const mongoose = require('mongoose');
const {mongoUrl} = require('../config');

mongoose
.connect(mongoUrl)
.then(res => console.log("Koneksi berhasil"))
.catch(error => console.log("Koneksi gagal : ", error.message));