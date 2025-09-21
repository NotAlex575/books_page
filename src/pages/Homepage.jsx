import axios from "axios"
import { useState, useEffect } from "react"

const Homepage = () => {
    //definizioni delle variabili di stato
    const [books, setBooks] = useState([]);

    // function che recupera i libri tramite chiamata ajax
    const fetchBooks = () => {
        axios.get("http://localhost:3000/books")
        .then((resp) => {
            setBooks(resp.data);
            console.log(resp.data);
        })
        .catch((err) => console.log(err));
    };

    // utilizzo useEffect per recuperare la lista dei libri
    useEffect(fetchBooks, []);

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
                {books.map(book => {
                    return(
                        <div className="col-12 col-md-6 col-lg-4" key = {book.id}>
                            <div className="card">
                                <img 
                                    src = {book.image}
                                    className="img-fluid"
                                    alt = {book.author} 
                                />
                                <div className="overlay">
                                    <h2 className="text-center my-3">{book.title}</h2>
                                    <p className="text-center">{book.author}</p>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Homepage