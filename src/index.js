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
        { id: 1, name: "1984", author: "George Orwell"},
        { id: 2, name: "No Longer Human", author: "Osamu Dazai" },
        { id: 3, name: "Flowers for Algernon", author: "Daniel Keys" },
      ];

  return books;
};
