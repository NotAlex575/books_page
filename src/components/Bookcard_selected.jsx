const Bookcard_selected = ({ book }) => {
  const { title, image, author } = book;
  
  // Qui costruisci il percorso completo per immagini locali
  const imageUrl = image?.startsWith('http') ? image : `/img/books/${image}`;

  return (
    <div className="col-12">
      <div className="card medium-card">
        <img 
          src={imageUrl} 
          className="img-fluid"
          alt={author} 
        />
        <div className="overlay">
          <h2 className="text-center my-3">{title}</h2>
          <p className="text-center">{author}</p>
        </div>
      </div>
    </div>
  );
};

export default Bookcard_selected;
