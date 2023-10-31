import { useState } from "react";
import { CardBooks } from "../CardBooks";
import { FormStyled } from "./styled";
import "bootstrap/dist/css/bootstrap.min.css";

import { BotaoStyled } from "../Button/styled";

export function Books() {
  const [books, setBooks] = useState<Book[]>([
    {
      id: 1,
      title: "Harry Potter",
      author: "J.K. Rowling",
      publicationYear: "2020-05-05",
      dateRegister: "2020-05-05",
      genre: "Ficção",
      description: "Um livro de fantasia",
    },
    {
      id: 2,
      title: "O Hobbit",
      author: "J.R.R. Tolkien",
      publicationYear: "2020-05-05",
      dateRegister: "2020-05-05",
      genre: "Ficção",
      description: "Um livro de fantasia",
    },
    {
      id: 3,
      title: "Dom Quixote",
      author: "Miguel de Cervantes",
      publicationYear: "1605-07-15",
      dateRegister: "2020-04-15",
      genre: "Romance",
      description: "A história de um cavaleiro enlouquecido.",
    },
    {
      id: 4,
      title: "A Revolução dos Bichos",
      author: "George Orwell",
      publicationYear: "1945-08-17",
      dateRegister: "2020-10-05",
      genre: "Alegoria",
      description:
        "Uma sátira política que descreve uma revolta dos animais contra seus donos humanos, espelhando eventos que levaram à Revolução Russa de 1917.",
    },
    {
      id: 5,
      title: "1984",
      author: "George Orwell",
      publicationYear: "1949-06-08",
      dateRegister: "2020-06-20",
      genre: "Ficção Científica",
      description: "Um romance distópico sobre controle totalitário.",
    },
    {
      id: 6,
      title: "Cem Anos de Solidão",
      author: "Gabriel García Márquez",
      publicationYear: "1967-03-11",
      dateRegister: "2020-07-10",
      genre: "Realismo Mágico",
      description: "A saga de uma família ao longo de várias gerações.",
    },
    {
      id: 7,
      title: "Crime e Castigo",
      author: "Fiódor Dostoiévski",
      publicationYear: "1866-11-26",
      dateRegister: "2020-08-02",
      genre: "Ficção",
      description: "Um estudo psicológico de um jovem atormentado por culpa.",
    },
    {
      id: 8,
      title: "Orgulho e Preconceito",
      author: "Jane Austen",
      publicationYear: "1813-01-28",
      dateRegister: "2020-09-18",
      genre: "Romance",
      description: "Um romance sobre amor, casamento e preconceito social.",
    },
  ]);

  interface Book {
    id: number;
    title: string;
    author: string;
    publicationYear: string;
    dateRegister: string;
    genre: string;
    description: string;
  }

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publicationYear, setPublicationYear] = useState("");
  const [genre, setGenre] = useState("");
  const [description, setDescription] = useState("");
  const [dateRegister, setDateRegister] = useState("");
  const [formId, setFormId] = useState(-1);
  const [showBooks, setShowBooks] = useState(false);

  const today = new Date().toISOString().split("T")[0];

  function cleanInput() {
    setTitle("");
    setAuthor("");
    setPublicationYear("");
    setGenre("");
    setDescription("");
    setDateRegister("");
    setFormId(-1);
    setIsEditing(false);
  }

  function saveBooks() {
    if (
      !title ||
      !author ||
      !publicationYear ||
      !genre ||
      !description ||
      !dateRegister
    )
      return;

    const isNewbook = formId === -1;

    const newBook: Book = {
      title,
      author,
      publicationYear,
      genre,
      description,
      dateRegister,
      id: isNewbook ? books.length + 1 : formId,
    };
    if (isNewbook) {
      setBooks([...books, newBook]);
    } else {
      const newBookList = books.map((book) => {
        if (book.id === formId) {
          return newBook;
        }
        return book;
      });
      setBooks(newBookList);
    }
    cleanInput();
  }

  function toggleBooksVisibility() {
    setShowBooks(!showBooks);
  }

  function deleteBook(id: number) {
    const confirmDelete = window.confirm(
      "Tem certeza de que deseja excluir este livro?"
    );
    if (confirmDelete) {
      const oldState = books.filter((book) => {
        return book.id !== id;
      });

      setBooks([...oldState]);
    }
  }

  const [isEditing, setIsEditing] = useState(false);

  function editBook(id: number) {
    const bookEdit = books.find((book) => {
      if (book.id === id) {
        return book;
      }
    });
    if (bookEdit !== undefined) {
      setTitle(bookEdit.title);
      setAuthor(bookEdit.author);
      setGenre(bookEdit.genre);
      setDescription(bookEdit.description);
      setFormId(bookEdit.id);
      setDateRegister(bookEdit.dateRegister);
      setPublicationYear(bookEdit.publicationYear);
      setIsEditing(true);
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  }

  return (
    <>
      
        <h1 className="m-1 d-flex align-items-center justify-content-center H1Styled">
          A Biblioteca Mágica
        </h1>
     

      <div className="container">
        <div className="row d-flex align-items-center justify-content-center">
          <div className="col-lg-4 col-sm-9">
            <FormStyled>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Titulo do Livro:"
              />
              <input
                type="text"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                placeholder="Autor:"
              />
              <input
                type="text"
                value={genre}
                onChange={(e) => setGenre(e.target.value)}
                placeholder="Genero:"
              />
              <label htmlFor="dateInput">Data de Lançamento:</label>
              <input
                type="date"
                value={publicationYear}
                onChange={(e) => setPublicationYear(e.target.value)}
                placeholder="Data de publicação"
                max={today}
              />
              <label htmlFor="dateInput">Data de Cadastro:</label>
              <input
                type="date"
                value={dateRegister}
                onChange={(e) => setDateRegister(e.target.value)}
                placeholder="Data de cadastro"
                max={today}
              />
              <label htmlFor="descripton">Descrição:</label>
              <textarea
                name="description"
                form="usrform"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                maxLength={200}
                style={{
                  maxHeight: "100px",
                  minHeight: "10px",
                  resize: "none",
                }}
              ></textarea>
              <div className="d-flex justify-content-around mt-3">
                <BotaoStyled
                  style={{
                    background: "#6ee7b7",
                    color: "black",
                    height: "2em",
                  }}
                  onClick={saveBooks}
                >
                  {isEditing ? "Editar" : "Cadastrar"}
                </BotaoStyled>
                <BotaoStyled onClick={cleanInput}>Limpar</BotaoStyled>
              </div>
            </FormStyled>
          </div>
        </div>
      </div>
      <div
        style={{
          marginTop: "50px",
        }}
        className="container"
      >
        <div className="row">
          <div className=" d-flex align-items-center justify-content-center">
            <BotaoStyled onClick={toggleBooksVisibility}>
              {showBooks ? "Esconder Livros" : "Mostrar Livros"}
            </BotaoStyled>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col">
            <div>
              {showBooks && (
                <div className="container">
                  <div className="row">
                    {books.map((book) => (
                      <CardBooks
                        key={book.id}
                        id={book.id}
                        title={book.title}
                        author={book.author}
                        dateRegister={book.dateRegister}
                        publicationYear={book.publicationYear}
                        genre={book.genre}
                        description={book.description}
                        handleDeleteBook={deleteBook}
                        handleEditBook={editBook}
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
