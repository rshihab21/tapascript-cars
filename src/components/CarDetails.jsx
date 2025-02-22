

const CarDetails = ({car}) => {
  return (
    <div className="border px-20 border-gray-300 rounded py-2">
        <h3><span className="font-bold">Title:</span>{car.title}</h3>
        <p><span className="font-bold">Brand:</span>{car.brand}</p>
        <p><span className="font-bold">Year:</span>{car.year}</p>
        <p><span className="font-bold">price:</span>{car.price}</p>
    </div>
  )
}

export default CarDetails