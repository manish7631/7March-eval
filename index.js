const express = require("express")

const app = express()


app.use(logger)

app.get("/book", (req, res) => {
    console.log("hello")

    const books = [
        {
            bookName:"The marketing gurus",
             
        }
    ]

    return res.send(JSON.stringify(books))


})

app.get("/libraries", (req, res) => {
    console.log("libraries")
    return res.send({ route:"/libraries", role: req.role})

})


app.get("/author", (req, res) =>{
    
    return res.send({ route:"/author", role: req.role})
})

function logger(req, res, next){
    console.log("router handler logger")
    next()
}


function CheckPermission(req, res, next){
    if(req.path === "/libraries"){
        req.role = "libraries"
    }else if(req.path === "/author"){
        req.role = "author"
    }

    next()
}





app.listen(5000, () => {
    console.log("listing on port 5000")
})