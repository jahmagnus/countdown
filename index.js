const express = require('express')
const app = express()


//create instance of the server
const port = process.env.PORT || 3000

app.listen(port, ()=>{
    console.log(`listning on port ${port}`)
})


//host pages from the public folder

app.use(express.static("public"))



//serve up the countdown page as the default loading page

app.get("/", (req, res) =>{
    res.redirect('index.html')
})