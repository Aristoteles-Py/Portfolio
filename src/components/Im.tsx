import myPhoto from '../assets/myPhoto.svg';
import assinatura from '../assets/assinatura.svg';


function Im() {
    return(
        <div className="w-full">
            <div className="flex mt-11 ml-[110px] w-[1100px]">
                <img className="w-[378px] h-[440px]" src={myPhoto} alt="" />
                <div className="flex flex-col w-80 ml-5 mt-4">
                    <span>
                        Nice to meet you,
                    </span>
                    <strong>
                        I’m Aristóteles Alves
                    </strong>
                    <p>
                        Sou um jovem estudante de sistema de informação 
                        na universidade Centro Universitário Paraíso (UNIFAP), 
                        apaixonado pelo desenvolvimento front-end.
                    </p>
                    <strong className="text-gold-100 my-1">
                        Code, Design, Learn and coffee
                    </strong>
                    <p>
                        Frontend is my true passion and I really enjoy the whole process of creating UIs, 
                        from the first brainstorming, wireframes, mockups, design, 
                        all the way until the final product.
                    </p>
                    <img className="w-[210px] h-[75px]" src={assinatura} alt="" />
                </div>
            </div>
            <div className="ml-[110px] mt-4">
                <strong>
                    Minhas experiências inclui, mas não se limita:
                </strong>
                <ul className="flex gap-3 mt-1">
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