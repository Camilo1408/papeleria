import Image1 from "../../assets/imgSlider/imgSlider1.jpg"
import Image2 from "../../assets/imgSlider/imgSlider2.jpg"
import Image3 from "../../assets/imgSlider/imgSlider3.jpg"
import Slider from "react-slick"

const ImageList = [
    {
        id: 1,
        img: Image1,
        title: "50% De Descuento En Cuadernos Norma",
        description: "Lorem his life will forever be changed dolor sit amet."

    },
    {
        id: 2,
        img: Image2,
        title: "30% De Descuento En Lapiceros Y Marcadores Fabell-Castell",
        description: "Lorem his life will forever be changed dolor sit amet."

    },
    {
        id: 3,
        img: Image3,
        title: "Remate En La Marca Scribe",
        description: "Lorem his life will forever be changed dolor sit amet."

    }
]

const HeaderSlider = () => {

    var settings = {
        dots :false,
        arrows: false,
        infinite: true,
        speed: 800,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        cssEase: "ease-in-out",
        pauseOnHover: false,
        pauseOnFocus:true
    };

  return (
    <div className="relative overflow-hidden min-h-[550px] sm:min-h-[650px] bg-gray-100 flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200">
        {/* Background pattern */}
        <div className="h-[700px] w-[700px] bg-primary/40 absolute -top-1/2 right-0 rounded-3xl rotate-45 -z-9">
        </div>
        {/* Slider Section */}
        <div className="container pb-8 sm:pb-0">
            <Slider {...settings}>
                {ImageList.map((data) =>(
                    <div key={data.id}>
                        <div className="grid grid-cols-1 sm:grid-cols-2">
                            {/* text content section */}
                            <div
                            className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10">
                                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold">{data.title}</h1>
                                <p className="text-sm">{data.description}</p>
                                <div>
                                    <button className=" bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-2 px-4 rounded-full">
                                        Order Now
                                    </button>
                                </div>
                            </div>
                            {/* Image Section */}
                            <div className="order-1 sm:order-2">
                                <div className="relative z-10">
                                    <img src={data.img} alt="Img_Slider" 
                                    className="w-[300px] h-[300px]  sm:h[450px] sm:scale-105 lg:scale-120 object-contain mx-auto"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
                
            </Slider>
            
        </div>
    </div>
  )
}

export default HeaderSlider