
const ImageList = (props) => {
    const images = props.images
    const content = () => {
        return(
            <div className="image-container">
                <div className="group">
                    <div className="hero-item" key={images[0].id}>
                        <img src={images[0].imgURL} alt="hero-image" />
                    </div>
                </div>
                <div className="group">
                    <div className="hero-item" key={images[1].id}>
                        <img src={images[1].imgURL} alt="hero-image" />
                    </div>
                    <div className="hero-item" key={images[2].id}>
                        <img src={images[2].imgURL} alt="hero-image" />
                    </div>
                </div>
                <div className="group">
                    <div className="hero-item" key={images[3].id}>
                        <img src={images[3].imgURL} alt="hero-image" />
                    </div>
                    <div className="hero-item" key={images[4].id}>
                        <img src={images[4].imgURL} alt="hero-image" />
                    </div>
                </div>
                <div className="group">
                    <div className="hero-item" key={images[5].id}>
                        <img src={images[5].imgURL} alt="hero-image" />
                    </div>
                    <div className="hero-item" key={images[6].id}>
                        <img src={images[6].imgURL} alt="hero-image" />
                    </div>
                </div>
                <div className="group">
                    <div className="hero-item" key={images[7].id}>
                        <img src={images[7].imgURL} alt="hero-image" />
                    </div>
                    <div className="hero-item" key={images[8].id}>
                        <img src={images[8].imgURL} alt="hero-image" />
                    </div>
                </div>
            </div>
        )
   }

   return (
    content()
   );
}

export default ImageList