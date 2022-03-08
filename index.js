
const express = require("express");

const app = express();

app.get("/books", allBooks, (req,res) =>
{
    console.log("Fetching all books");
    return res.send("Fetching all books");
})

app.get("/book/:GameOfThrones", singleBook, (req,res) =>
{

    res.send({bookName : req.name});
})

app.get("/book/:HarryPotter", singleBook, (req,res) =>
{
    
    res.send({bookName : req.name});
})

function allBooks(req,res,next)
{
    
    next();
}
function singleBook(req,res,next)
{
    if(req.path == "/book/:GameOfThrones")
    {
        req.name = "GameOfThrones";
    }
    if(req.path == "/book/:HarryPotter")
    {
        req.name = "HarryPotter";
    }
    next();
}


app.listen(6500,() =>
{
    console.log("We are listening 6500 port");
})