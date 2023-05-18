import { AiFillStar } from "react-icons/Ai"

function Rating_stars({stars=3}) {
    

  return (
    <div className="flex">
      {[...Array(stars).keys()].map((star, i) => <AiFillStar className="text-[#ffa902]" key={i}/>)}
      {[...Array(5-stars).keys()].map((star, i) => <AiFillStar className="text-black/40" key={i}/>)}
    </div>
  )
}

export default Rating_stars
