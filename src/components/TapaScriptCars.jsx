
import Cars from "./Cars"
import Features from "./Features"
import TapaScriptTitle from "./TapaScriptTitle"

const TapaScriptCars = () => {
  return (
    <div className="flex flex-col justify-center max-w-7xl mx-auto">
        <TapaScriptTitle></TapaScriptTitle>
       <Features></Features>
       <Cars></Cars>
    </div>
  )
}

export default TapaScriptCars