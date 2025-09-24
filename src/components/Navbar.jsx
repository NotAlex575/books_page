import { useNavigate } from "react-router-dom";

const Navbar = () => {

  const naviga = useNavigate();

  const goCreateBook = () => {
    naviga("/create");
  }
  return (
    <header className="bg-orange">
      <nav className="navbar">
        <div className="d-flex justify-content-between">
          <a className="margin-left-right-50" href="/">
            <i className="fa-solid fa-book fa-3x"></i>
          </a>
          <h2 className="text-white margin-left-right-50">QUESTA E LA NAVBAR BOOKlY</h2>
          <button 
          className="btn btn-primary margin-left-right-50"
          onClick={goCreateBook}
          >Crea un nuovo libro!</button>
        </div>
      </nav>
    </header>
  )
}

export default Navbar