import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import petlover1 from "../assets/petlover1.jpg";
import petlover2 from "../assets/petlover2.jpg";
import petlover3 from "../assets/petlover3.png";
import petlover4 from "../assets/petlover4.jpg";
import petlover5 from "../assets/petlover5.jpg";
import petlover6 from "../assets/petlover6.jpg";

const CarouselData=[
    {
        image: petlover2,
        path:""
    },
    {
        image:petlover3,
        path:""
    },
    {
        image:petlover1,
        path:""
    },
    {
        image:petlover6,
        path:""
    },
    {
        image:petlover5,
        path:""
    },
    {
        image:petlover4,
        path:""
    }
]

function Carousel (){

    const items = CarouselData.map((item,index)=>
        <div className='relative'>
            <div key={index} className="w-[950px] h-[500px] mt-8 ml-40 flex justify-center items-center">
                <img
                className="w-full h-full object-cover rounded-lg cursor-pointer"
                role="presentation"
                src={item.image}
                alt={`Slide ${index}`}
                />
            </div>
        </div> )


    return(
    <AliceCarousel
        items={items}
        autoPlay
        autoPlayInterval={1000}
        infinite
    />
    )
}

export default Carousel;