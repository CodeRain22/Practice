//get all the movies and dispaly in the consol formate in browser
function getData() {
  fetch("http://localhost:9090/books").then((res) => {
    if (res.ok) {
      console.log("Suceess Got The book data");
      res.json().then((data) => console.log(data));
    } else {
      console.log("Fail");
    }
  });
}
function postBook() {
  const tempBook = {
    bookName: "Rider",
    author: "John",
    dataPublished: "11-12-2020",
    desc: "Story of Rider",
    category: "Suspense",
  };
  fetch("http://localhost:9090/newbook", {
    method: "POSt",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(tempBook),
  })
    .then((res) => {
      if (res.ok) {
        console.log("Book Added Sucessfully");
      }
      return res.text();
    })
    .catch((err) => console.log(err));
}
function putBook() {
  const tempBook = {
    bookName: "Rider",
    category: "Thriller",
  };
  fetch("http://localhost:9090/updateBook", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(tempBook),
  })
    .then((res) => {
      if (res.ok) {
        console.log("Book Updated Sucessfully");
      }
      return res.text();
    })
    .catch((err) => console.log(err));
}
function deleteBook() {
  let bookName = "Rider";

  fetch("http://localhost:9090/deleteBook/" + bookName, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => {
      if (res.ok) {
        console.log("Book Deleted Sucessfully");
      }
      return res.text();
    })
    .catch((err) => console.log(err));
}
