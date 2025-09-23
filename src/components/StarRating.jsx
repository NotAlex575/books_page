import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const StarRating = ({vote}) => {
    const nums = [1, 2, 3, 4, 5];
    const starArray = nums.map((num, i) => {
        console.log(num, i)
        if(i < vote){
            return <i className="fa-solid fa-star"></i>
        }
        else{
            return "";
        }
    })
    return starArray
}

export default StarRating