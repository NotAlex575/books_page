import axios from "axios"
import { useParams, useNavigate} from "react-router-dom"
import { useState, useEffect } from "react"
import Bookcard_selected from "../components/Bookcard_selected"
import ReviewCard from "../components/ReviewCard"
import ReviewForm from "../components/ReviewForm"

const SingleBook = () => {

  const { id } = useParams();
  const [book, setBook] = useState([]);
  const [totalBooks, setTotalBooks] = useState();
  const naviga = useNavigate();

  const fetchBook = () => {
    axios.get(`http://localhost:3000/books/${id}`)
    .then((resp) => {
      setBook(resp.data)
    })
    .catch((err) => naviga("not-found"));
  };

  const fetchTotalBooks = () => {
    axios.get("http://localhost:3000/books")
      .then(resp => setTotalBooks(resp.data.length))
      .catch(err => console.log(err));
  };

  const goNextPage = () => {
    const page = parseInt(id) + 1;
    naviga("/" +page);
  }

  const goPrevPage = () => {
    const page = parseInt(id) - 1;
    naviga("/" +page);
  }

  const goHomepage = () => {
    naviga("/");
  }

  useEffect(() => {
      fetchBook();
      fetchTotalBooks();
  }, [id]);

  return (
    <div className="container my-5">
      <div className="row mb-100">
          <div className="col-12 text-center">
              <h1>Bookly</h1>
              <h2>
                  <i>Libri per i veri appassionati!</i>
              </h2>
          </div>
      </div>
      <div className="row gy-3">
        <Bookcard_selected key={id} book={book}></Bookcard_selected>
      </div>
      <div className="flex-row">
          <button className="btn btn-primary btn-prev-next"
            disabled={book.id === 1}
            onClick={goPrevPage}>
            Vai al libro precedente
          </button>
          <button className="btn btn-primary btn-prev-next margin-left-right-50"
            onClick={goHomepage}>
            Torna alla homepage
          </button>
          <button className="btn btn-primary btn-prev-next"
            disabled={book.id === totalBooks}
            onClick={goNextPage}>
            Vai al libro successivo
          </button>
      </div>
      <div className="reviews">
        {book.reviews && book.reviews.length > 0 ? (
          book.reviews.map((review) => {
            return <ReviewCard key={review.id} review={review}></ReviewCard>
        })):(
          <h2>
            <em>Non ci sono ancora recensioni per questo libro</em>
          </h2>
        )}
      </div>
      <ReviewForm bookId ={id} reloadReviews={fetchBook}></ReviewForm>
  </div>
  )
}

export default SingleBook