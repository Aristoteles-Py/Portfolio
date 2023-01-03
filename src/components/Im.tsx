import myPhoto from '../assets/myPhoto.jpg';
import assinatura from '../assets/assinatura.svg';


function Im() {
    return(
        <div className="w-fll mt-5 max-[650px]:justify-center">
            <div className="flex gap-7 w-full justify-center">

                <img className="h-[400px] w-[400px] rounded-2xl max-[650px]:absolute max-[650px]:w-[350px] max-[650px]:h-[350px] " 
                src={myPhoto} 
                alt=""
                />

                <div className="flex flex-col w-[400px] max-[650px]:relative max-[650px]:w-[350px] max-[650px]:h-[350px] max-[650px]:justify-end max-[650px]:text-right max-[650px]:overflow-hidden max-[650px]:rounded-2xl p-2">

                    <span className="max-[650px]:relative z-10">
                        Nice to meet you,
                    </span>
                    <strong className="max-[650px]:relative z-10 text-gold-100">
                        I’m Aristóteles Alves
                    </strong>
                    <p className="max-[650px]:relative z-10">
                        Sou um jovem estudante de sistema de informação 
                        na universidade Centro Universitário Paraíso (UNIFAP), 
                        apaixonado pelo desenvolvimento front-end.
                    </p>

                    <strong className="max-[650px]:hidden">
                        Code, Design, Learn and coffee
                    </strong>
                    <p className="max-[650px]:hidden">
                        Frontend is my true passion and I really enjoy the whole process of creating UIs, 
                        from the first brainstorming, wireframes, mockups, design, 
                        all the way until the final product.
                    </p>
                    <img className="max-[650px]:hidden" src={assinatura} alt="" />

                    
                    <div className='min-[650px]:hidden w-[500px] h-[270px] bg-white bg-opacity-10 absolute origin-center -rotate-[18deg] z-0 -mb-28 backdrop-blur-sm'>
                    </div>
                </div>
            </div>

            <div className="w-full pl-60 max-[650px]:pl-0 max-[650px]:mt-4 max-[650px]:justify-center max-[650px]:text-center">
                <strong className="">
                    Minhas experiências inclui, mas não se limita:
                </strong>
                <ul className="flex flex-wrap gap-3 mt-1 max-[650px]:justify-center" >
                    <li className="border-2 border-gold-100 px-1 rounded text-sm cursor-pointer">HTML</li>
                    <li className="border-2 border-gold-100 px-1 rounded text-sm cursor-pointer">CSS</li>
                    <li className="border-2 border-gold-100 px-1 rounded text-sm cursor-pointer">JavaScript</li>
                    <li className="border-2 border-gold-100 px-1 rounded text-sm cursor-pointer">TypeScript</li>
                    <li className="border-2 border-gold-100 px-1 rounded text-sm cursor-pointer">Node</li>
                    <li className="border-2 border-gold-100 px-1 rounded text-sm cursor-pointer">npm</li>
                    <li className="border-2 border-gold-100 px-1 rounded text-sm cursor-pointer">Reactjs</li>
                    <li className="border-2 border-gold-100 px-1 rounded text-sm cursor-pointer">Nextjs</li>
                    <li className="border-2 border-gold-100 px-1 rounded text-sm cursor-pointer">UI Design</li>
                    <li className="border-2 border-gold-100 px-1 rounded text-sm cursor-pointer">GraphQL</li>
                    <li className="border-2 border-gold-100 px-1 rounded text-sm cursor-pointer">Tailwindcss</li>
                </ul>
            </div>
        </div>
    )
}

export default Im;