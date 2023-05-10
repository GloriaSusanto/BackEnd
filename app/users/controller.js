const matakuliah = require('./model');

const index = async (req, res, next) => {
    //res.render('index', { title: 'Express' });
   try {
    const db = await matakuliah.find();
    res.send({status: "success", message: "list users", data: db});
   }catch (error){
    res.send({status: "error", message: error.message});
   }
  };

  const getKode = async (req, res, next) => {
    try {
        const kode = req.params.kode
        const db = await matakuliah.find({kode_matkul: kode});
        if (lecture){
            res.send({status: "success", message: "kode ditemukan", data: db});
        } else {
            res.send({status: "warning", message: "kode tidak ditemukan"});
        }
    } catch (error) {
        res.send({ status: "error", message: error.message});
    }
  }

  const getName =  async (req, res, next) => {
    try {
      const query = req.query.nama ? { nama: { $regex: req.query.nama, $options: 'i' } } : {}
      const db = await matakuliah.find(query)
      res.json({ status: 'success', data: db})
    } catch (error) {
      res.json({ status: 'error', message: error.message })
    }
  };

  const postLecture = async (req, res, next) => {
  try {
    const kode = req.params.kode;
    const nama = req.body.nama;
    const ruangan = req.body.ruangan;
    const jam = req.body.jam;

    await matakuliah.updateOne({ kode_matkul: kode }, { nama, ruangan, jam });

    const result = await matakuliah.find({ kode_matkul: kode });
    res.json({ status: 'success', data: db })
  } catch (error) {
    res.json({ status: 'error', message: error.message })
  }
};

  const putLecture = async (req, res, next) => {
  try {
    const db = await matakuliah.findOneAndUpdate({ kode_matkul: req.params.kode }, req.body, { new: true })
    res.json({ status: 'success', data: db })
  } catch (error) {
    res.json({ status: 'error', message: error.message })
  }
};

  const deleteLecture = async (req, res, next) => {
  try {
    const db = await matakuliah.findOneAndDelete({ kode_matkul: req.params.kode })
    res.json({ status: 'success', data: db })
  } catch (error) {
    res.json({ status: 'error', message: error.message })
  }
}


  module.exports = {
    index,
    getKode,
    getName,
    postLecture,
    putLecture,
    deleteLecture  
  }