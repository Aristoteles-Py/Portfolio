import { GithubLogo, House, InstagramLogo, LinkedinLogo, Phone, Rocket, User } from "phosphor-react";

function Footer(){
    return(
        <footer className="w-full h-40 flex flex-col justify-center items-center gap-4">
            <div>
                <ul className="flex gap-14 text-base font-medium mb-2 max-[650px]:gap-5">
                    <li className="hover:text-gray-600 transition-colors group">
                        <a href="#home" className="flex gap-1">
                            <House
                            className="group-hover:text-amber-900"
                            size={23}/>
                            Home
                        </a>
                    </li>
                    <li className="flex gap-1 hover:text-gray-600 transition-colors group">
                        <a href="" className="flex gap-1">
                            <Phone 
                            className="group-hover:text-green-300"
                            size={23}/>
                            Fale comigo
                        </a>
                        
                    </li>
                    <li className="flex gap-1 hover:text-gray-600 transition-colors group">
                        <a href="" className="flex gap-1">
                            <User
                            className="group-hover:text-blue-400"
                            size={23}/>
                            Contato</a>
                    </li>
                </ul>
            </div>
            <div>
                <ul className="flex gap-4">
                    <li>
                        <a href="" className="flex gap-1">
                            <InstagramLogo className="bg-gold-100 rounded-full p-2 transition-colors hover:text-pink-600 hover:bg-gold-200" 
                            size={42}/>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/aristoteles-aleves-de-oliveira-ab8089226/" className="flex gap-1">
                            <LinkedinLogo className="bg-gold-100 rounded-full p-2 transition-colors hover:text-blue-500 hover:bg-gold-200" 
                            size={42}/>
                        </a> 
                    </li>
                    <li>
                        <a href="https://github.com/Aristoteles-Py" className="flex gap-1">
                            <GithubLogo className="bg-gold-100 rounded-full p-2 transition-colors hover:text-purple-900 hover:bg-gold-200" 
                            size={42}/>
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    )
}
export default Footer;