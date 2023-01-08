import { GithubLogo, InstagramLogo, LinkedinLogo, WhatsappLogo } from "phosphor-react";

import maoLeft from '../assets/maoLeft.svg'


function Header(){
    return(
        <header className="w-full h-[450px] bg-icons bg-cover flex border-b-2 mt-10 max-[650px]:h-[260px]" id="home">

            <div className="absolute">
                <img 
                className="w-80 max-[1026px]:w-56  max-[1026px]:mt-3 max-[802px]:hidden"
                src={maoLeft} 
                alt=""/>
            </div>

            <div className="h-screen w-full mt-20 flex flex-col items-center ml-32 max-[1026px]:ml-0">
                <h1 className="text-5xl w-[400px] font-bold max-[650px]:text-center">
                    I´m Aristoteles
                </h1>
                <p className="w-[400px] mt-3 text-lg items-center max-[650px]:text-center">
                    <strong className="text-gold-100">Desenvolvedor Frontend.</strong> 
                    <span className="max-[650px]:hidden">Não é a linguagem de programação que define o programador, mas sim sua lógica.</span>
                </p>

                <nav>
                    <ul className="flex gap-2 mt-3 w-[400px] max-[650px]:justify-center">
                        <li>
                            <a href="https://www.instagram.com/aristoteles269/">
                                <InstagramLogo 
                                className="hover:text-pink-600"
                                size={32}/>
                            </a>
                        </li>
                        <li>
                            <a href="https://wa.me/qr/HBEXKQG73VXAE1">
                                <WhatsappLogo 
                                className="hover:text-green-600"
                                size={32}/>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/aristoteles-aleves-de-oliveira-ab8089226/">
                                <LinkedinLogo 
                                className="hover:text-blue-600"
                                size={32}/>
                            </a>
                        </li>
                        <li>
                            <a href="https://github.com/Aristoteles-Py">
                                <GithubLogo 
                                className="hover:text-purple-900"
                                size={32}/>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}
export default Header;