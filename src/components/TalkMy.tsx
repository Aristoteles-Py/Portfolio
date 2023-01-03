import {  Share } from 'phosphor-react';
import maoRight from '../assets/maoRight.svg';
import Send from '../assets/send.svg'

function TalkMy(){
    return(
        <form className="h-[500px] w-full flex justify-end bg-icons gap-5 mt-10 max-[650px]:justify-center">
            <div className="flex flex-col">
                <div className="flex flex-col gap-4 mt-20 w-[457px] max-[650px]:w-full">

                    <strong className="text-gold-100 font-bold text-3xl">I’m ready to talk...</strong>

                    <input 
                    className="bg-transparent  rounded h-[40px] border-2 border-gray-600 px-2" 
                    type="text" 
                    name=""
                    placeholder="Nome"
                     />

                    <input
                     className="bg-transparent rounded h-[40px] border-2 border-gray-600 px-2" 
                     type="email" 
                     name="" 
                     placeholder="E-mail"
                     />

                    <textarea className="bg-transparent rounded border-2 border-gray-600 p-2 resize-none" cols={10} rows={6} placeholder="Mensagem..."></textarea>
                </div>
                <div className="flex justify-end">
                    <button className="flex gap-1 mr-5 mt-5 border-b border-gold-100 w-[100px] justify-center items-center pb-1 hover:text-gray-500">
                        Enviar <Share size={19}/>
                    </button> 
                </div>
            </div>
            <img className="mt-24 max-[650px]:hidden" src={maoRight} alt="" />
        </form>
    )
}
export default TalkMy;