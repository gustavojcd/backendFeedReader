import server from './services/server'

const PORT = process.env.PORT || 8080

server.listen(PORT,()=>{
    console.log('SERVER OK')
})