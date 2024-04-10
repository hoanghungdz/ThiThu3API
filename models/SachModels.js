const mongoose = require('mongoose');
const Scheme = mongoose.Schema;

const SachModels = new Scheme(
    {
        ma_sach: { type: String, required: true},
        tieu_de: { type: String, required: true},
        tac_gia: { type: String, required: true, default: 0},
        nam_xuat_ban: { type: Number, required: false},
        so_trang: { type: Number, required: false},
        the_loai: { type: String, required: false},
    },
    {
        timestamps: true,
    
    }
)

module.exports = mongoose.model('sachs', SachModels)