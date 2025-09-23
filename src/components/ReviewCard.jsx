import StarRating from "./StarRating"

const ReviewCard = ( {review} ) => {

    const {name, text, vote} = review
    return (
        <div className="review-card">
            <h3>{name}</h3>
            <p>Voto: <StarRating vote={vote}></StarRating></p>
            <p>{text}</p>
        </div>
  )
}

export default ReviewCard