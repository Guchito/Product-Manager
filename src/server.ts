import express from 'express'

const server = express()

//Routing

server.get('/', (req,res) => {
    res.send('hola mundo en express')
})

export default server