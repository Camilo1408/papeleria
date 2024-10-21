import Img1 from '../../assets/imgTopProducts/imgMarcadores.jpg'
import Img2 from '../../assets/imgTopProducts/imgLapices.jpg'
import Img3 from '../../assets/imgTopProducts/imgCuadernos.jpg'
import { FaStar } from 'react-icons/fa6'

const ProductsData = [
    {
        id:1,
        title: "Marcadores",
        img: Img1,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia iusto illo doloremque quia",
    },
    {
        id:2,
        title: "Lapiz",
        img: Img2,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia iusto illo doloremque quia",
    },
    {
        id:3,
        title: "Cuaderno",
        img: Img3,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia iusto illo doloremque quia",
    }

]

const TopProducts = () => {
  return (
    <div>
        <div className='container'>
            {/* Header Section */}

                <div className='text-left mb-24'>
                    <p data-aos="fade-up" className='text-sm text-primary'>
                        Los Productos Más Vendidos Para Ti
                    </p>
                    <h1 data-aos="fade-up" className='text-3xl font-bold'>
                        Productos
                    </h1>
                    <p data-aos="fade-up" className='text-xs text-gray-400'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia iusto illo doloremque quia.
                    </p>
                </div>
            {/* Body Section */}
            <div
            className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 md:gap-5 place-items-center'>
                {
                    ProductsData.map((data) =>(
                        <div key={data}
                        data-aos="zoom-in"
                        className='rounded-2xl bg-white dark:bg-gray-800 hover:bg-black/80 dark:hover:bg-primary hover:text-white relative shadow-xl duration-high group max-w-[300px]'>
                            {/* Image Section */}
                            <div className='h-[100px]'>
                                <img src={data.img} alt="" 
                                className='max-w-[140px] block mx-auto transform -translate-y-20 group-hover:scale-105 duration-300 drop-shadow-md'
                                />
                            </div>
                            {/* Details Section */}
                            <div className='p-4 text-center'>
                                {/* star rating */}
                                <div className='w-full flex items-center justify-center gap-1 '>
                                    <FaStar className='text-yellow-500'/>
                                    <FaStar className='text-yellow-500'/>
                                    <FaStar className='text-yellow-500'/>
                                    <FaStar className='text-yellow-500'/>
                                </div>
                                <h1 className='text-xl font-bold'>{data.title}</h1>
                                <p className='text-gray-500 group-hover:text-white duratin-300 text-sm line-clamp-2'>
                                    {data.description}
                                </p>
                                <button className='bg-primary hover:scale-105 duration-300 text-white py-1 px-4 rounded-full mt-4 group-hover:bg-white group-hover:text-primary'
                                //onClick={handleOrderPopup}
                                >
                                    Compra Ya
                                </button>
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    </div>
  )
}

export default TopProducts