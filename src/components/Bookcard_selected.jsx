const Bookcard_selected = ({ book }) => {
  const {title, image, author, abstract} = book
    return (
        <div className="col-12">
            <div className="card medium-card">
              <img 
                  src={image} 
                  className="img-fluid"
                  alt={author} 
                />
                <div className="overlay">
                  <h2 className="text-center my-3">{title}</h2>
                  <p className="text-center">{author}</p>
                  <p className="text-center">{abstract}</p>
                </div>
            </div>
        </div>
    )
    
}

export default Bookcard_selected