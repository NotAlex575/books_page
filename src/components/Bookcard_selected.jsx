const Bookcard_selected = ({book}) => {
  const {id, title, image, author } = book
    return (
        <div className="col-12">
            <div className="card">
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
            </div>
        </div>
    )
}

export default Bookcard_selected