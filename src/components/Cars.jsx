import CarsRow from "./CarsRow"

const Cars = () => {
    const cars =[   
        { id: 1, title: "Luxury Sedan", brand: "Mercedes", year: 2023, price: 80000, isPremium: true },
        { id: 2, title: "Family SUV", brand: "Toyota", year: 2022, price: 45000, isPremium: false },
        { id: 3, title: "Sports Car", brand: "Porsche", year: 2023, price: 120000, isPremium: true },
        { id: 4, title: "Electric Hatchback", brand: "Nissan", year: 2022, price: 35000, isPremium: false },
        { id: 5, title: "Luxury SUV", brand: "BMW", year: 2023, price: 90000, isPremium: true },
      ]
  return (
    <div className="md:grid md:grid-cols-3 gap-4 mt-6">
        {
            cars.map(car=> <CarsRow key={car.id} car={car}></CarsRow>)
        }
    </div>
  )
}

export default Cars