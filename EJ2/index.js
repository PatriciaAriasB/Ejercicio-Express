const express = require("express") 
const app = express() 
const PORT = 3000
const path = require("path")

  
app.get("/",(req,res)=>{
    res.send("Bienvenida")
})

app.get("/Productos",(req,res)=>{
    res.send("Listado de productos")
})

app.post("/Productos",(req,res)=>{
    res.send("Crear producto")
})

app.put("/Productos",(req,res)=>{
    res.send("Actualizar producto")
})

app.delete("/Productos",(req,res)=>{
    res.send("Borrar producto")
})

app.get("/Usuarios",(req,res)=>{
    res.send("Listado de usuarios")
})

app.post("/Usuarios",(req,res)=>{
    res.send("Crear usuario")
})

app.put("/Usuarios",(req,res)=>{
    res.send("Actualizar ususario")
})

app.delete("/Usuarios",(req,res)=>{
    res.send("Borrar usuario")
})


// Utilizar Postman para probar todos los llamados



