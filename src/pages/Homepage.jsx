import axios from "axios"
import { useState, useEffect } from "react"
import Bookcard from "../components/Bookcard";

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
            <div className="row mb-100">
                <div className="col-12 text-center">
                    <h1>Bookly</h1>
                    <h2>
                        <i>Libri per i veri appassionati!</i>
                    </h2>
                </div>
            </div>
            <div className="row gy-3">
                {books.map(book => {
                    const { id } = book;
                    return <Bookcard key={id} book={book}></Bookcard>
                })}
            </div>
        </div>
    )
}

export default Homepage