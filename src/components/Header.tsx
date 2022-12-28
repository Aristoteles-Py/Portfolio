import { GithubLogo, InstagramLogo, LinkedinLogo, WhatsappLogo } from "phosphor-react";

import maoLeft from '../assets/maoLeft.svg'


function Header(){
    return(
        <header className="w-[1100px] h-[450px] bg-icons flex border-b-2">

            <div className="absolute">
                <img 
                src={maoLeft} 
                alt=""/>
            </div>

            <div className="h-screen w-full mt-20 flex flex-col items-center">
                <h1 className="text-4xl w-[350px]">
                    I'm Aristoteles
                </h1>
                <p className="w-[350px] mt-3">
                    <strong className="text-gold-100">Desenvolvedor Frontend.</strong> Não é a linguagem de programação que define o programador, mas sim sua lógica.
                </p>

                <nav>
                    <ul className="flex gap-2 mt-3 w-[350px]">
                        <li><InstagramLogo size={32}/></li>
                        <li><WhatsappLogo size={32}/></li>
                        <li><LinkedinLogo size={32}/></li>
                        <li><GithubLogo size={32}/></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}
export default Header;