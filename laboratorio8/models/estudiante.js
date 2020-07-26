var Estudiante = function(id, nombre, edad) {
    this.id = id;
    this.nombre = nombre;
    this.edad = edad;
}

Estudiante.prototype.toString = () => {
    return 'id: ' + this.id + " | nombre: " + this.nombre;
}

Estudiante.allEstuds = [];
Estudiante.add = (aEstu) => {
    Estudiante.allEstuds.push(aEstu);
}

Estudiante.findById = (aEstuId) => {
    var aEstu = Estudiante.allEstuds.find(x => x.id == aEstuId);
    if (aEstu)
        return aEstu;
    else
        throw new Error(`No existe estudiante con el id ${aEstuId}`);
}

Estudiante.removeById = (aEstuId) => {
    for (var i = 0; i < Estudiante.allEstuds.length; i++) {
        if (Estudiante.allEstuds[i].id == aEstuId) {
            Estudiante.allEstuds.splice(i, 1);
            break;
        }
    }
}

var a = new Estudiante(1, 'Jean Caballero', 29);
var b = new Estudiante(2, 'Carlos Sanchez', 30);

Estudiante.add(a);
Estudiante.add(b);

module.exports = Estudiante;