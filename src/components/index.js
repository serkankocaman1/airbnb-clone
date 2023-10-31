export const images = [
    {id:1, imgURL:"../assets/photo1.avif"},
    {id:2, imgURL:"../assets/photo2.avif"},
    {id:3, imgURL:"../assets/photo3.avif"},
    {id:4, imgURL:"../assets/photo4.avif"},
    {id:5, imgURL:"../assets/photo5.avif"},
    {id:6, imgURL:"../assets/photo6.avif"},
    {id:7, imgURL:"../assets/photo7.avif"},
    {id:8, imgURL:"../assets/photo8.avif"},
    {id:9, imgURL:"../assets/photo9.avif"}
]

/*
Challenge: Pass props to the Card component and display that data

- img ("katie-zaferes.png")
- rating ("5.0")
- reviewCount (6)
- country (Whatever you want)
- title ("Life Lessons with Katie Zaferes")
- price (136)

*/

export const cards = [
    {
        id: 1,
        title: "Life Lessons with Katie Zaferes",
        description: "I will share with you what I call \"Positively Impactful Moments of Disappointment.\" Throughout my career, many of my highest moments only came after setbacks and losses. But learning from those difficult moments is what gave me the ability to rise above them and reach my goals.",
        price: 136,
        coverImg: "/assets/katie-zaferes.png",
        stats: {
            rating: 5.0,
            reviewCount: 6
        },
        location: "Online",
        openSpots: 0,
    },
    {
        id: 2,
        title: "Learn Wedding Photography",
        description: "Interested in becoming a wedding photographer? For beginner and experienced photographers alike, join us in learning techniques required to leave the happy couple with memories that'll last a lifetime.",
        price: 125,
        coverImg: "/assets/wedding-photography.png",
        stats: {
            rating: 5.0,
            reviewCount: 30
        },
        location: "Online",
        openSpots: 27,
    },
    {
        id: 3,
        title: "Group Mountain Biking",
        description: "Experience the beautiful Norwegian landscape and meet new friends all while conquering rugged terrain on your mountain bike. (Bike provided!)",
        price: 50,
        coverImg: "/assets/mountain-bike.png",
        stats: {
            rating: 4.8,
            reviewCount: 2
        },
        location: "Norway",
        openSpots: 3,
    }
]