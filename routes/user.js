const { Router }= require('express');
const { check} = require('express-validator');
const {validarCampos} =require('../MIDDLEWARES/validar-campos');
const { esRoleValido, existeEmail,existeUsuarioPorId } = require('../helpers/db-validaitors');


const { usuariosGet, 
    usuariosPost, 
    usuariosPut, 
    usuariosPatch, 
    usuariosDelete } = require('../controllers/user');

const router = Router();

router.get('/', usuariosGet ) 
router.post('/',[
    check('nombre','El nombre es obligatorio')
    .exists()
    .not()
    .isEmpty(),
    check('password','El password debe tener mas de 6 letras')
    .isLength({min:6}),
    check('correo','El correo no es valido')
    .isEmail()
    .exists(),
    check('rol').custom(esRoleValido),
    check('correo').custom(existeEmail),
    validarCampos
],usuariosPost) 
router.put('/:id',[
    check('id','No es un ID válido')
    .isMongoId(),
    check('id').custom(existeUsuarioPorId),
    check('rol').custom(esRoleValido),
    validarCampos
],usuariosPut)
router.delete('/:id',[
    check('id','No es un ID válido')
    .isMongoId(),
    check('id').custom(existeUsuarioPorId),
    validarCampos    
],usuariosDelete)    
router.patch('/', usuariosPatch)
  

module.exports = router;