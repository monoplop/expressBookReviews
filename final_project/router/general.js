const express = require('express');
let books = require("./booksdb.js");
let isValid = require("./auth_users.js").isValid;
let users = require("./auth_users.js").users;
const public_users = express.Router();


public_users.post("/register", (req,res) => {
  //Write your code here
  return res.status(300).json({message: "Yet to be implemented"});
});

// Get the book list available in the shop
public_users.get('/',function (req, res) {
  res.send(JSON.stringify(books,null,4));
});

// Get book details based on ISBN
public_users.get('/isbn/:isbn',function (req, res) {
    const isbn = req.params.isbn;
    res.send(books[isbn])
 });
  
// Get book details based on author
public_users.get('/author/:author',function (req, res) {
    //const author = req.params.author;

    // res.send(JSON.stringify(result,null,4));
    let author = req.query.author;  
    // res.send(typeof(author));

    const authorBooks = [];  
    // res.send(author);
    // const foundBook = Object.entries(books).find(
    //     ([_, value]) => value.author === author
    //   );
    
    //   if (!foundBook) {
    //     return res.status(404).json({ message: "Book not found" });
    //   }
    
    //   return res.status(200).json(foundBook);
    

    // Object.entries(obj).forEach(([key, value]) => {
    //     console.log(`${key} ${value}`); // "a 5", "b 7", "c 9"
    //   })

    
    for (const [key, value] in Object.entries(books)) {  
      if (([_, value]) => value.author === author) {  
        authorBooks.push(`${key} ${typeof(value)}` + " " + books[key]);
      }
    }
    
    if (authorBooks.length > 0) {  
      res.send(authorBooks);  
    } 
    else {
      res.status(404).send('No books found for author');  
    }

});

// Get all books based on title
public_users.get('/title/:title',function (req, res) {
  //Write your code here
  return res.status(300).json({message: "Yet to be implemented"});
});

//  Get book review
public_users.get('/review/:isbn',function (req, res) {
  //Write your code here
  return res.status(300).json({message: "Yet to be implemented"});
});

module.exports.general = public_users;
