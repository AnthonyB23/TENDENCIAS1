
let pingButton = document.querySelector('#pingButton')
let message = document.querySelector('#message')
let postButton = document.querySelector('#postButton') // Definir para el metodo POST


pingButton.addEventListener('click',getPingFromWebServices)
postButton.addEventListener('click', postPingToWebServices)

// -- METODO GET --

function getPingFromWebServices() {
    const url = 'http://localhost:3000/ping'
    // encadenar los datos de la url con la respuesta
    fetch(url)
        .then((response) => {
            return response.json() // solicitar respuesta en formato json
        })
        .then((data) => { // ← cambiado "response" por "data"
            console.log(data)
            message.innerHTML = data.message //asignar la data retornada al message
        })
        .catch(function(error) {
            console.log(error)
            message.innerHTML = `No se puede conectar con el servidor ${url}`
        })
}

// -- MÉTODO POST --

function postPingToWebServices() {
  const url = 'http://localhost:3000/postping'
  fetch(url, {
    method: 'POST', // tipo de petición
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ saludo: 'Hola como estan muchaches' }) // enviar datos
  })
    .then(response => response.json())
    .then(data => {
      console.log(data)
      message.innerHTML = data.message // mostrar respuesta del servidor
    })
    .catch(error => {
      console.log(error)
      message.innerHTML = `No se puede conectar con el servidor ${url}`
    })
}

