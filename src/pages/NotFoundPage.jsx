import { Link } from "react-router-dom"

const NotFoundPage = () => {
  return (
    <div className='h-100 flex flex-column align-items-center justify-content-center'>
        <h2>Page not found....</h2>
        <p className='my-3'>La pagina cercata non esiste</p>
        <Link className="btn btn-danger" to="/">
            Torna alla homepage
        </Link>
    </div>
  )
}

export default NotFoundPage