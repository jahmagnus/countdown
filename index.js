const express = require('express')
const app = express()


//create instance of the server
const port = process.env.PORT || 3000

app.listen(port, ()=>{
    console.log(`listning on port ${port}`)
})