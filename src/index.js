import express from "express";
const app = express();
const port = 3000;

app.use(express.static("./src"));

app.get("/", (req, res) => {
  res.sendFile("index.html", { root: "./src" });
});

app.get("/books", (req, res) => {
  const books = getBooks();
  res.json(books);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

const getBooks = () => {
    const books = [
        { id: 1, name: "abc", author: "vvvv" },
        { id: 2, name: "sd", author: "sd" },
        { id: 3, name: "dfd", author: "sdfg" },
      ];

  return books;
};
