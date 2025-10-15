import express from 'express'
import cors from 'cors'
// console.log('Hola chicas')

// Configurar CORS para permitir solicitudes desde el frontend

const app = express()
app.use(cors()) // Habilitar CORS para toda slas rutas o solicitudes

// Definir rutas

app.get('/', (req, res) => {
  res.send('Hellow Fer')
})

app.get('/ping', (req, res) => {
  res.json ({ message: 'ponggg'})
})

app.listen(3000)