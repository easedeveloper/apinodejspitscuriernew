const {Router} = require("express")
const router = Router()

const { getPersonal } = require("../Controllers/personal.controller");

router.get("/Personal", getPersonal);

/* //RUTAS PARA USUARIOS
const {getUsuarios,getUsuarioByID,createUsuario,deleteUsuario,updateUsuario, loginUsuario
} = require("../Controllers/usuario.controller")
router.get("/Usuarios",getUsuarios)
router.get("/Usuarios/:id",getUsuarioByID)
router.post("/Usuarios",createUsuario)
router.delete('/Usuarios/:id', deleteUsuario)
router.put("/Usuarios/:id", updateUsuario)
router.get("/Usuario/:usuario-:clave",loginUsuario)
//RUTAS PARA ROLES */

module.exports=router