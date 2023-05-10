const mongoose = require("mongoose");

const matakuliahSchema = new mongoose.Schema({
    kode_matkul: {type: String, required: [true, "Kode matakuliah harus diisi"]},
    nama: { type: String, required: [true, "Nama matakuliah harus diisi"]},
    ruangan: { type: Number},
    jam: { type: String}
});

const matakuliah = mongoose.model("matakuliah", matakuliahSchema);

module.exports = matakuliah;