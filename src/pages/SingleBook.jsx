import axios from "axios"
import { Navigate, useParams, useNavigate} from "react-router-dom"
import { useState, useEffect } from "react"
import Bookcard_selected from "../components/Bookcard_selected"
import Reviews from "../components/Reviews"

const SingleBook = () => {

  const { id } = useParams();
  const [book, setBook] = useState([]);
  const [reviews, setReviews] = useState([]);
  const naviga = useNavigate();

  const fetchBook = () => {
    axios.get(`http://localhost:3000/books/${id}`)
    .then((resp) => {
      setBook(resp.data)
    })
    .catch(err => console.log(err));
  };

  const goNextPage = () => {
    const page = parseInt(id) + 1;
    naviga("/books/" +page);
  }

  const goPrevPage = () => {
    const page = parseInt(id) - 1;
    naviga("/books/" +page);
  }

  const goHomepage = () => {
    naviga("/");
  }

  useEffect(fetchBook, []);

  return (
    <div className="container my-5">
            <div className="row">
                <div className="col-12 text-center">
                    <h1>Bookly</h1>
                    <h2>
                        <i>Libri per i veri appassionati</i>
                    </h2>
                </div>
            </div>
            <div className="row gy-3">
              <Bookcard_selected key={id} book={book}></Bookcard_selected>
            </div>
            <div className="row">
                <button className="btn btn-primary btn-prev-next"
                  disabled={book.id === 1}
                  onClick={goPrevPage}>
                  Vai al libro precedente
                </button>
                <button className="btn btn-primary btn-prev-next"
                  onClick={goNextPage}>
                  Vai al libro successivo
                </button>
                <button className="btn btn-primary btn-prev-next"
                  onClick={goHomepage}>
                  Torna alla homepage
                </button>
            </div>
            {/* RECENSIONI */}
            { /*MAP DI TUTTE LE REVIEWS DEL LIBRO */}
            <Reviews></Reviews>
        </div>
  )
}

export default SingleBook