const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    code: Number,
    nombre: String,
    edad: Number
});

const Estudiantes = mongoose.model('Estudiantes', schema);

module.exports = Estudiantes;