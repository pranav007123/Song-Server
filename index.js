const jsonServer = require('json-server')
const SONGServer = jsonServer.create()
const middleware = jsonServer.defaults()
const router = jsonServer.router('db.json')
const PORT = 3000 || process.env.PORT

SONGServer.use(middleware)
SONGServer.use(router)

SONGServer.listen(PORT,()=>{
    console.log(`Song Player Server started at port ${PORT}`);
})