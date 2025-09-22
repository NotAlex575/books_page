import { Link } from "react-router-dom";

const BookCard = ({ book }) =>{
    const {id, title, image, author } = book
    return (
        <div className="col-12 col-md-6 col-lg-4">
            <div className="card">
                <Link className="text-decoration-none" to={`/${id}`}>
                <img 
                    src = "./img/sample.jpg" 
                    className="img-fluid"
                    alt = {author} 
                />
                 {/*in src al posto del link mettiamo src = {image} */}
                    <div className="overlay">
                        <h2 className="text-center my-3">{title}</h2>
                        <p className="text-center">{author}</p>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default BookCard;