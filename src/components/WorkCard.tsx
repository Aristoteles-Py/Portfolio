import { Browser, Code } from "phosphor-react";

import calculadora from "../assets/calculadora.svg"
import eventPlataform from "../assets/event-plataform.jpeg"

function WorkCard(){
    return (
        <div className="w-[1100px] h-screen flex justify-center gap-20 mt-10">
            <div className="w-[400px]">
                {/* card img */}
                <div>
                    <img 
                    className="w-[400px] h-[300px] rounded-xl"
                    src={calculadora} 
                    alt="" />
                </div>

                {/* bio */}
                <div className="flex flex-col mt-3">
                        <strong className="text-gold-100 text-2xl">
                            Calculadora
                        </strong>
                    <ul className="flex gap-2 mt-2">
                        <li className="border-2 border-gold-100 px-1 rounded text-sm ">HTML</li>
                        <li className="border-2 border-gold-100 px-1 rounded text-sm ">CSS</li>
                        <li className="border-2 border-gold-100 px-1 rounded text-sm ">JavaScript</li>
                        <li className="border-2 border-gold-100 px-1 rounded text-sm ">React</li>
                    </ul>
                    <p className="w-[400px] mt-2">
                        O projeto foi criado para eu poder começar a trabalhar com o JSX, entender como ele funciona, e criar os meus primeiros components em React, ultilizando os react-hooks.
                    </p>
                        <div className="flex gap-4 mt-4 ">


                            <a 
                            className="border-b-2 border-gold-100 text-center flex items-center gap-2 hover:border-gold-200 hover:"
                            href ="https://github.com/Aristoteles-Py/Calculadora-React.JS"> 
                                <Code className="" size={18}/>Code 
                            </a>

                            <a
                            className="border-b-2 border-gold-100 text-center flex items-center gap-2"
                            href ="https://calculadora-react-js-git-main-aristoteles-py.vercel.app/">
                                <Browser size={18}/>Demo
                            </a>

                        </div>
                </div>
            </div>

            <div className="w-[400px]">
                {/* card img */}
                <div>
                    <img 
                    className="w-[400px] h-[300px] rounded-xl"
                    src={eventPlataform} 
                    alt="" />
                </div>

                {/* bio */}
                <div className="flex flex-col mt-3">
                        <strong className="text-gold-100 text-2xl">
                            Event Plataform
                        </strong>
                    <ul className="flex gap-2 mt-2">
                        <li className="border-2 border-gold-100 px-1 rounded text-sm ">React</li>
                        <li className="border-2 border-gold-100 px-1 rounded text-sm ">TypeScript</li>
                        <li className="border-2 border-gold-100 px-1 rounded text-sm ">vite</li>
                        <li className="border-2 border-gold-100 px-1 rounded text-sm ">GraphQL</li>
                        <li className="border-2 border-gold-100 px-1 rounded text-sm ">TailwindCSS</li>
                    </ul>
                    <p className="w-[400px] mt-2">
                    Esse projeto foi desenvolvido junto com Diego Fernandes da Rocketseat no Ignite Lab, botando em pratica meus conhecimentos com GraphQL e TailwindCSS
                    </p>
                        <div className="flex gap-4 mt-4 ">


                            <a 
                            className="border-b-2 border-gold-100 text-center flex items-center gap-2 hover:border-gold-200"
                            href ="https://github.com/Aristoteles-Py/Ignite-Lab-Event-Plataform"> 
                                <Code className="" size={18}/>Code 
                            </a>

                            <a
                            className="border-b-2 border-gold-100 text-center flex items-center gap-2 hover:border-gold-200 hover:text-gray-400"
                            href ="https://ignite-lab-event-plataform-iusi-aristoteles-py.vercel.app/">
                                <Browser size={18}/>Demo
                            </a>

                        </div>
                </div>
            </div>

        </div>
    )
}
export default WorkCard;