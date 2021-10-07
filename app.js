let express = require("express");
let bodyParser = require("body-parser");
let app = express();
let cors = require("cors");
let fs = require("fs");

//console.log(data.toString())
app.use(bodyParser.json());
app.use(cors());
app.get("/books", (req, res) => {
  if (!fs.existsSync("db.json")) {
    res.send("No Data AVilable");
  } else {
    var data = fs.readFileSync("db.json");
    res.json(data.toString());
  }
});
app.post("/newbook", (req, res) => {
  tempbook = req.body;
  //console.log(tempbook)
  let data = fs.readFileSync("db.json");
  let dataString = data.toString();
  books = JSON.parse(dataString);
  books.push(tempbook);
  fs.writeFileSync("db.json", JSON.stringify(books));
  res.send("done");
});
app.put("/updateBook", (req, res) => {
  tempbook = req.body;
  console.log(tempbook.category);
  let data = fs.readFileSync("db.json");
  let dataString = data.toString();
  books = JSON.parse(dataString);
  console.log(books);
  let bookindex = books.findIndex((b) => b.bookName === tempbook.bookName);
  console.log(bookindex);
  if (bookindex != -1) {
    books[bookindex].category = tempbook.category;
    fs.writeFileSync("db.json", JSON.stringify(books));
  }
  res.send("done");
});
app.delete("/deleteBook/:book", (req, res) => {
  bname = req.params.book;
  console.log(bname);
  let data = fs.readFileSync("db.json");
  let dataString = data.toString();
  books = JSON.parse(dataString);
  // console.log(books)
  let bookindex = books.findIndex((b) => b.bookName === bname);
  console.log(bookindex);
  if (bookindex != -1) {
    books.splice(bookindex, 1);
    console.log(books);
    fs.writeFileSync("db.json", JSON.stringify(books));
  }
  res.send("done");
});
app.listen(9090, () => console.log("Server running on port number 9090"));
