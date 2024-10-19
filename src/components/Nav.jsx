import { FaCartShopping } from "react-icons/fa6";
import Logo from "../assets/Logo.jpeg"
import { IoMdSearch } from "react-icons/io";
export const Nav = () => {
  return (
    <>
      <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40">
        {/*primer navbar*/}
        <div className="bg-primary/40 py-2">
          <div className="container flex justify-between items-center ">
            <div>
              <a href="#" className="font-bold text-2xl sm:text-3xl flex gap-2">
                <img src={Logo} alt="Logo" className="w-10 uppercase" />
                Usco
              </a>
            </div>
            {/* Barra de busqueda y carrito */}
            <div className="flex justify-between items-center gap-4">
              {/* Barra de busqueda */}
              <div className="relative group hidden sm:block">
                <input type="text" placeholder="Buscar" className="w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border border-gray-300 px-2 py-1 focus:outline-none focus:border-1 focus:border-primary "/>
                <IoMdSearch className="text-gray-500 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3"/>
              </div>
              {/* Carrito */}
              <button onClick={() => alert("La orden aun no esta disponible")} className="bg-gradient-to-r from-primary to-secondary transition-all duration-200 text-white py-1 px-4 rounded-full flex items-center gap-3 group">
                <span className="group-hover:block hidden transition-all duration-200">Orden</span>
                <FaCartShopping className="text-xl text-white drop-shadow-sm cursor-pointer"/>
              </button>
              {/* Boton para modo oscuro */}
              <div>
              </div>
            </div>
          </div>
        </div>
        {/*Segundo navbar*/}
        <div></div>
      </div>
    </>
  )
}

export default Nav
