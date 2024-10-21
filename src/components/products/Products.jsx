
import Img1 from "../../assets/imgProducts/Img1.jpg"
import Img2 from "../../assets/imgProducts/Img2.jpg"
import Img3 from "../../assets/imgProducts/Img3.jpg"
import Img4 from "../../assets/imgProducts/Img4.jpg"
import Img5 from "../../assets/imgProducts/Img5.jpg"
import { FaStar } from "react-icons/fa6"
const ProductsData = [
    {
        id:1,
        img: Img1,
        tittle: "Calculadora",
        rating: 5.0,
        color:"white",
        aosDelay: "0",

    },
    {
        id:2,
        img: Img2,
        tittle: "Colores",
        rating: 5.0,
        color:"red",
        aosDelay: "200",

    },
    {
        id:3,
        img: Img3,
        tittle: "Carpeta",
        rating: 5.0,
        color:"brown",
        aosDelay: "400",

    },
    {
        id:4,
        img: Img4,
        tittle: "Sacapuntas",
        rating: 5.0,
        color:"Yellow",
        aosDelay: "600",

    },
    {
        id:5,
        img: Img5,
        tittle: "Regla",
        rating: 5.0,
        color:"Pink",
        aosDelay: "800",

    }

]



export const Products = () => {

    return (
        <>
            <div className="mt-14 mb-12">
                <div className="container">
                    {/* Header */}
                    <div className="text-center mb-10 max-w-[600px] mx-auto">
                        <p data-aos="fade-up" className="text-sm text-primary">Productos Recomendados para ti</p>
                        <h1 data-aos="fade-up" className="text-3xñ font-bold">Productos</h1>
                        <p data-aos="fade-up" className="text-xs text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus fugiat suscipit sequi, veritatis expedita quae architecto nemo! Architecto ullam debitis cumque, assumenda sint dolor modi nobis facere eum eveniet earum!</p>
                    </div>
                    {/* Body */}
                    <div>
                        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5">
                            {/* card section */}
                            {ProductsData.map((data) =>(
                                    <div
                                    data-aos="fade-up"
                                    data-aos-delay={data.aosDelay}
                                    key={data.id} className="space-y-3"
                                    >
                                        <img src={data.img}  alt="" className="h-[220px] w-[150px] object-cover rounded-md"/>
                                        <div>
                                            <h3 className="font-semibold">{data.tittle}</h3>
                                            <p className="text-sem text-gray-600">{data.color}</p>
                                            <div className="flex items-center gap-1">
                                                <FaStar className="text-yellow-400"/>
                                                <span>{data.rating}</span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Products
