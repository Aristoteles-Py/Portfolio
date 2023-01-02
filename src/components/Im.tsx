import myPhoto from '../assets/myPhoto.jpg';
import assinatura from '../assets/assinatura.svg';


function Im() {
    return(
        <div className="w-fll mt-5">
            <div className="flex gap-7 justify-center  max-[650px]:h-[400px] max-[650px]:w-[400px]">

                <img className="h-[400px] w-[400px] rounded max-[650px]:absolute" 
                src={myPhoto} 
                alt=""
                />

                <div className="w-[450px] max-[650px]:relative">

                    <span className="">
                        Nice to meet you,
                    </span>
                    <strong className="">
                        I’m Aristóteles Alves
                    </strong>
                    <p className="">
                        Sou um jovem estudante de sistema de informação 
                        na universidade Centro Universitário Paraíso (UNIFAP), 
                        apaixonado pelo desenvolvimento front-end.
                    </p>
                    <div className='min-[650px]:hidden'>
                    </div>
                    <strong className="max-[650px]:hidden">
                        Code, Design, Learn and coffee
                    </strong>
                    <p className="max-[650px]:hidden">
                        Frontend is my true passion and I really enjoy the whole process of creating UIs, 
                        from the first brainstorming, wireframes, mockups, design, 
                        all the way until the final product.
                    </p>
                    <img className="max-[650px]:hidden" src={assinatura} alt="" />
                </div>
            </div>

            <div className="w-full mt-4 pl-60 max-[650px]:pl-0">
                <strong className="">
                    Minhas experiências inclui, mas não se limita:
                </strong>
                <ul className="flex flex-wrap gap-3 mt-1" >
                    <li className="border-2 border-gold-100 px-1 rounded text-sm">HTML</li>
                    <li className="border-2 border-gold-100 px-1 rounded text-sm">CSS</li>
                    <li className="border-2 border-gold-100 px-1 rounded text-sm">JavaScript</li>
                    <li className="border-2 border-gold-100 px-1 rounded text-sm">TypeScript</li>
                    <li className="border-2 border-gold-100 px-1 rounded text-sm">Node</li>
                    <li className="border-2 border-gold-100 px-1 rounded text-sm">npm</li>
                    <li className="border-2 border-gold-100 px-1 rounded text-sm">Reactjs</li>
                    <li className="border-2 border-gold-100 px-1 rounded text-sm">Nextjs</li>
                    <li className="border-2 border-gold-100 px-1 rounded text-sm">UI Design</li>
                    <li className="border-2 border-gold-100 px-1 rounded text-sm">GraphQL</li>
                    <li className="border-2 border-gold-100 px-1 rounded text-sm">Tailwindcss</li>
                </ul>
            </div>
        </div>
    )
}

export default Im;