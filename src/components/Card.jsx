import "./Card.css"


/*
Challenge: Pass props to the Card component and display that data

- img ("katie-zaferes.png")
- rating ("5.0")
- reviewCount (6)
- country (Whatever you want)
- title ("Life Lessons with Katie Zaferes")
- price (136)

*/

const Card = (props) => {
    const cardRender = props.cards.map((card,index) => {
        let badgetText

        if(card.openSpots === 0){
            badgetText = "SOLD OUT"
        }else if(card.location === "Online"){
            badgetText = "ONLINE"
        }


        return(
        <div className="card-item" key={index}>
            <div className="card-top">
                <img src={card.coverImg} alt="" />
                {badgetText && <p>{badgetText}</p>}
            </div>
            <div className="card-bottom">
                <div className="card-rating">
                    <p><i class="fa-sharp fa-solid fa-star"></i> {card.stats.rating} <span>({card.stats.reviewCount}) • {card.location}</span></p>
                </div>
                <div className="card-about">
                    <p>{card.title}</p>
                </div>
                <div className="card-price">
                    <p>From ${card.price} / <span>person</span></p>
                </div>
            </div>
        </div>
        )
    })
  return (
    
    <div className="card-container">
        {cardRender}
    </div>
  )
}

export default Card