const bycrypt = require('bcrypt');
const Usuario = require('../model/usuario');

const register = async (req, res) => {
    const {nombre , correo, contrasena} = req.body;

    Usuario.findOne({correo})
    .then((usuario) => {
        if(usuario){
            return res.json({mensaje: 'Ya existe un usuario con ese correo'});
        }else if(!nombre || !correo || !contrasena){
            return res.json({mensaje: 'Falta correo / nombre / contrasena'});
        } else {
            bycrypt.hash(contrasena, 10, (error, contrasenaHasheada) =>{
                if(error) res.json({error})
                else {
                    const nuevoUsuario = new Usuario({
                        nombre,
                        correo,
                        contrasena : contrasenaHasheada
                    });
                nuevoUsuario
                .save()
                .then((usuario) => {
                    res.json({mensaje : 'Usuario creado correctamente', usuario});
                })
                .catch(error => console.error(error));
            }
            })
        }
    })
};

module.exports = register;