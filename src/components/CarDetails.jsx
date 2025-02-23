import PropTypes from "prop-types"
const CarDetails = ({car}) => {
  const {title,brand,year,price,isPremium}=car;
  
  return (
    <div className="border px-20 border-gray-300 rounded py-2">
        <h3><span className="font-bold">Title:</span>{title}</h3>
        <p><span className="font-bold">Brand:</span>{brand}</p>
        <p><span className="font-bold">Year:</span>{year}</p>
        <p><span className="font-bold">price:</span>{price}</p>
        <p><span className="font-bold">Premium:</span>{isPremium}</p>
    </div>
  )
}


CarDetails.propTypes = {
  car: PropTypes.string.isRequired
}



export default CarDetails