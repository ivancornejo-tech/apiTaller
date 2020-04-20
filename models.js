/**
 * Dependencias
 */
const {
    Schema,
    model
} = require('mongoose');

/**
 * Esquema con los valores y tipos de datos que pertenecen a Spic
 */
let spicSchema = new Schema({
    fechaCaptura: String,
    ejercicioFiscal: String,
    ramo: {
        clave: Number,
        valor: String
    },
    rfc: String,
    curp: String,
    nombres: String,
    primerApellido: String,
    segundoApellido: String,
    genero: {
        clave: String,
        valor: String
    },
    institucionDependencia: {
        nombre: String,
        clave: String,
        siglas: String
    },
    puesto: {
        nombre: String,
        nivel: String
    },
    tipoArea: {
        type: [],
        default: void 0
    },
    tipoProcedimiento: {
        type: [],
        default: void 0
    },
    nivelResponsabilidad: {
        type: [],
        default: void 0
    },
    superiorInmediato: {
        nombres: String,
        primerApellido: String,
        segundoApellido: String,
        curp: String,
        rfc: String,
        puesto: {
            nombre: String,
            nivel: String

        }
    }
});

/**
 * Modelado del esquema  con la colección que se encuentra en la base de datos
 */
let Spic = model('Spic', spicSchema, 'spic');

/**
 * Exports Permitirá que nuestro módulo se use en otros módulos
 */
module.exports = {
    spicSchema,
    Spic
};