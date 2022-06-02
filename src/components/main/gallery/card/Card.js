import './Card.css';

const Card = ({img,age, setInfo, id})=> {

    const handleClick=()=>{
        setInfo(id)
        window.scrollTo(0,200)
    }

    return(
        <figure className="figure flex flex-col flex-wrap w-36 sm:w-48 lg:w-52 xl:w-56 rounded-lg delay-100 cursor-pointer overflow-hidden border-transparent hover:border-red-600 border-2">
            <img 
            className="figure__image w-full rounded-t-lg"
            src={img}  
            alt="card de película"
            onClick={handleClick}
            />
            <figcaption className="figure__caption flex w-full justify-center py-2 bg-gray-800">
                <p className="text-white">{age}</p>
            </figcaption>
        </figure>
    )
}

export default Card