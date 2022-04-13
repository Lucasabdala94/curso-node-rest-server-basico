const { response } = require('express');

const usuariosGet = (req, res = response )=> {
    
    res.json({
        msg:'get API-constrolador'
    })
}
const usuariosPost = (req, res=response)=> {
    const {nombre,edad} = req.body;
    res.json({
        msg:'post API-controllers',
        nombre,
        edad        
    })
}
const usuariosPut = (req, res)=> {
    res.status(201).json({
        msg:'Put API-controllers'
    })
}
const usuariosPatch = (req,res)=>{
    res.json({
        msg:'Patch api- controllers'
    })
}
const usuariosDelete=(req, res)=> {
    res.json({
        msg:'Delete API-controllers'
    })

}
module.exports= {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosPatch,
    usuariosDelete
}