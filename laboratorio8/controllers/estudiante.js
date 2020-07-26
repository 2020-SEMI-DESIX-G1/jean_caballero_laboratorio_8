var Estudiante = require('../models/estudiante');

exports.estudiante_list = (req, res) => {
    res.render('estudiantes/index', { estuds: Estudiante.allEstuds });
}

exports.estudiante_create_get = (req, res) => {
    res.render('estudiantes/create');
}

exports.estudiante_create_post = (req, res) => {
    var estu = new Estudiante(req.body.id, req.body.nombre, req.body.edad);
    Estudiante.add(estu);

    res.redirect('/estudiantes');
}

exports.estudiante_update_get = (req, res) => {
    var estu = Estudiante.findById(req.params.id);

    res.render('estudiantes/update', { estu });
}

exports.estudiante_update_post = (req, res) => {
    var estu = Estudiante.findById(req.parms.id);

    estu.id = req.body.id;
    estu.nombre = req.body.nombre;
    estu.edad = req.body.edad;

    res.redirect('/estudiantes');
}

exports.estudiante_delete_post = (req, res) => {
    Estudiante.removeById(req.body.id);

    res.redirect('/estudiantes');
}