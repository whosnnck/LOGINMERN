const bycrypt = require('bcrypt');
const Usuario = require('../model/usuario');

const login = async (req, res) => {
    const {correo, contrasena} = req.body;

    Usuario.findOne({correo})
    .then((usuario) => {
        if(!usuario){
            return res.json({mensaje : 'Usuario no encontrado'});
        }

        bycrypt.compare(contrasena, usuario.contrasena)
        .then((esCorrecto) => {
            if(esCorrecto){
                const {id, nombre} = usuario;

                res.json({mensaje : 'Usuario logeado correctamente', 
                usuario: {
                    id,
                    nombre
                }
            });
            } else {
                return res.json({mensaje : 'Credenciales incorrectas'})
            }
        })
    })
};

module.exports = login;