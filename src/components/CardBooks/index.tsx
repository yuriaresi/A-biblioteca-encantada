import { useState } from "react";
import { Button } from "../Button";
import { CardStyled } from "./styled";
import "bootstrap/dist/css/bootstrap.min.css";

interface CardBooksProps {
  id: number;
  title: string;
  author: string;
  publicationYear: string;
  dateRegister: string;
  genre: string;
  description: string;
  handleDeleteBook: (id: number) => void;
  handleEditBook: (id: number) => void;
}

export function CardBooks(props: CardBooksProps) {
  const [showDetails, setShowDetails] = useState(false);

  function toggleDetails() {
    setShowDetails(!showDetails);
    if (!showDetails) {
      window.scrollTo({
        top: 500,
        behavior: "smooth",
      });
    }
  }

  return (
    <div className="col-lg-3 col-sm-6 mt-3">
      <CardStyled className="card">
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <h6 className="card-subtitle mb-2">{props.author}</h6>
          <p className="card-text">{props.genre}</p>
          {showDetails && (
            <div>
              <h6>Ano de Publicação:</h6>
              <p>{props.publicationYear}</p>
              <h6>Data de Cadastro:</h6>
              <p>{props.dateRegister}</p>
              <h6>Descrição:</h6>
              <p>{props.description}</p>

              <Button
                title="Editar"
                clickFunction={() => props.handleEditBook(props.id)}
              />

              <Button title="Ocultar Detalhes" clickFunction={toggleDetails} />

              <Button
                title="Excluir"
                clickFunction={() => props.handleDeleteBook(props.id)}
              />
            </div>
          )}
          {!showDetails && (
            <button className="seu-botao" onClick={toggleDetails}>
              Mostrar Detalhes
            </button>
          )}
        </div>
      </CardStyled>
    </div>
  );
}
