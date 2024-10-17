
export const Nav = () => {
  return (
    <>
        <nav className="bg-violet-700 h-12 flex justify-around p-2">
            <h1 className="font-bold"> Logo</h1>
            <ul className="flex justify-around ">
                <li className="mr-2 ml-2"><a href="#">Inicio</a></li>
                <li className="mr-2 ml-2"><a href="#">Categorias</a></li>
                <li className="mr-2 ml-2"><a href="#">Nosotros</a></li>
            </ul>
        </nav>
    </>
  )
}

export default Nav
