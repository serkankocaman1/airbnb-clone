import "./Hero.css"
import ImageList from "./ImageList"
import {images} from "./index"

const Hero = () => {
  return (
    <div className="hero-container">
        <ImageList images={images}/>
        <div className="text-container">
            <h2>Online Experiences</h2>
            <p>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
            </p>
        </div>
    </div>
  )
}

export default Hero