import CarDetails from "./CarDetails"
import PropTypes from "prop-types"
const CarsRow = ({car}) => {
  return (
    <div>
        <CarDetails car={car}></CarDetails>
    </div>
  )
}

CarsRow.propTypes={
  car: PropTypes.string.isRequired
}


export default CarsRow