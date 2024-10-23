import footerLogo from "../../assets/Logo.jpeg"
import Banner from "../../assets/Foot/banner.jpg"
import { FaFacebook, FaInstagram, FaLinkedin, FaLocationArrow } from "react-icons/fa6";
import { FaMobileAlt } from "react-icons/fa";

const BannerImg = {
    backgroundImage: `url(${Banner})`,
    backgroundPosition:"bottom",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100%",
    width: "100%",
};

const FooterLinks = [
    {
        tittle:"Home",
        link:"/#"
    },
    {
        tittle:"About",
        link:"/#about"
    },
    {
        tittle:"Contact",
        link:"/#contact"
    },
    {
        tittle:"Blog",
        link:"/#blog"
    },

]

export const Footer = () => {
    return (
    <>
    <div style={BannerImg} className="text-white mt-20">
        <div className="container">
            <div data-aos= "zoom-in" className="grid md:grid-cols-3 pb-44 pt-5">
                {/* Detalles de la empresa */}
                <div className="py-8 px-4">
                    <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3"><img src={footerLogo} alt="" className="max-w-[50px]"/>Usco</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab repellat obcaecati tempore odit ullam et nemo suscipit veniam expedita eius facilis rerum eveniet quisquam maiores facere aspernatur, excepturi iusto esse.</p>
                </div>
                {/* Footer Links */}
                <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10">
                    <div>
                        <div className="py-8 px-4">
                            <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3">Links </h1>
                            <ul className="flex flex-col gap-3">
                                {FooterLinks.map((link) => (
                                        <li className="cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200" key={link.tittle}>
                                            <span>{link.tittle}</span>
                                        </li>
                                    ))}
                            </ul>
                        </div>
                    </div>

                    {/* Social likns */}
                    <div>
                        <div className="flex items-center gap-3 mt-6">
                            <a href="#">
                                <FaInstagram className="text-3xl"/>
                            </a>
                            <a href="#">
                                <FaFacebook className="text-3xl"/>
                            </a>
                            <a href="#">
                                <FaLinkedin className="text-3xl"/>
                            </a>
                        </div>
                        <div className="mt-6">
                            <div className="flex items-center gap-3">
                                <FaLocationArrow/>
                                <p>Noida, Uttar Pradesh</p>
                            </div>
                            <div className="flex items-center gap-3 mt-3">
                                <FaMobileAlt/>
                                <p>+57 9286192</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
    )
}
export default Footer