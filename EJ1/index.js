const express = require("express") 
const app = express() 
const PORT = 3000


//`Servidor levantado en el puerto ${puerto}`

// app.listen(3000, () => {
//   console.log("Server started on port 3000");
// });
  
// app.listen(PORT,()=>console.log("Servidor levantado en el puerto "+ PORT))

app.listen(3000,()=>{
    console.log('Servidor levantado');
});