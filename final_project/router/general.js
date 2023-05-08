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
    //create an Object that goes through each book map and match the author
    //res.send(JSON object of matches)
    //const keys = Object.keys(books);
    // const filtered_books = {};
    //const result = keys.filter(checkAuthor);
    // keys.forEach(book => {
    //     if (book.author === author) {
    //         filtered_books.add(book)
    //     }
        
    // });

    // function checkAuthor(name) {
    //     return name === author;
    //   }
    // res.send(JSON.stringify(result,null,4));
    const author = req.params.author;  
    //res.send(books);
    const authorBooks = [];  
    
    // for (const [key, value] of Object.entries(object1)) {
    //     console.log(`${key}: ${value}`);
    //   }
    for (const [key, value] in Object.entries(books)) {  
      if (Object === author) {  
        authorBooks.push(key, value);
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
