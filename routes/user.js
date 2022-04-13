const { Router }= require('express');
const { usuariosGet, 
    usuariosPost, 
    usuariosPut, 
    usuariosPatch, 
    usuariosDelete } 
    = require('../controllers/user');

const router = Router();

router.get('/', usuariosGet ) 
router.post('/', usuariosPost) 
router.put('/', usuariosPut)
router.delete('/', usuariosDelete)    
router.patch('/', usuariosPatch)


module.exports = router;