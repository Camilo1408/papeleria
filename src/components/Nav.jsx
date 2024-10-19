import { FaCaretDown, FaCartShopping } from "react-icons/fa6";
import Logo from "../assets/Logo.jpeg"
import { IoMdSearch } from "react-icons/io";


const Menu = [

  {
    id:1,
    name: "Nosotros",
    link:"/#",
  },
  {
    id:2,
    name: "Contacto",
    link:"/#",
  },
  {
    id:3,
    name: "Api",
    link:"/#",
  },
  
];

const DropDownLinks = [
  {
    id:1,
    name:"Categoria 1",
    link:"/#",
  },
  {
    id:2,
    name:"Categoria 2",
    link:"/#",
  },
  {
    id:3,
    name:"Categoria 3",
    link:"/#",
  },
];
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
                <input type="text" placeholder="Buscar" className="w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border border-gray-300 px-2 py-1 focus:outline-none focus:border-1 focus:border-primary-primary dark:border-gray-500 dark:bg-gray-800"/>
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
        <div className="flex justify-center">
          <ul className="sm:flex hidden items-center gap-4
          ">
            {/* Dropdown categorias */}
              <li className="group relative cursor-pointer">
                <a href="#" className="flex items-center gap-[2px] py-2">Categorias
                  <span>
                    <FaCaretDown className="transition-all duration-200 group-hover:rotate-180"/>
                  </span>
                </a>
                <div className="absolute z-[9999] hidden group-hover:block w-[150px] rounded-md bg-white p-2 text-black shadow-md">
                  <ul>
                    {DropDownLinks.map((data) =>(
                      <li key={data.id}>
                        <a href={data.link} className="inline-block w-full rounded-md p-2 hover:bg-primary/20 ">
                          {data.name}
                        </a>
                      </li>
                    ))
                    }
                  </ul>
                </div>
              </li>
          {
            Menu.map((data)=>(
              <li key={data.id}>
                <a href={data.link} className="inline-block px-4 hover:text-primary duration-100">{data.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}

export default Nav
