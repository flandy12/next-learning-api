import RatingComponent from "@/components/rating/page";
const CardProduct = ({image,title, price, rating, url}) => {
    return (
     
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow ">
                <a href={url}>
                    <img className="rounded-t-lg w-full h-60" src={image} alt={title}/>
                </a>
                <div className="p-5">
                    <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 ">{title}</h5>
                    <div>
                        <span>{price}</span>
                        <RatingComponent rate={rating}/>
                    </div>
                </div>
            </div>

    )
}

export default CardProduct;