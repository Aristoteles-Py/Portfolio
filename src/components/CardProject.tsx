import { Browser, Code } from "phosphor-react";

interface CardProps{
    img: string;
    title: string;
    description: string;
    skils: string[];
    demo: string;
    git: string;
}


function CardProject(props: CardProps) {

    const skils = props.skils.map((skil) => {
        return (
            <li className="border-2 border-gold-100 px-1 rounded text-sm" >
                {skil}
            </li>
        )
    });

    return(
        <div className="w-[400px] max-[650px]:w-full max-[650px]:items-center max-[650px]:flex max-[650px]:flex-col">
            <div>
                <img 
                className="w-[400px] h-[300px] rounded-xl max-[650px]:w-[300px] max-[650px]:h[200px]"
                src={props.img} 
                alt="" />
            </div>
            <div className="flex flex-col mt-3 w-[400px] max-[650px]:w-[300px]">
                <strong className="text-gold-100 text-2xl">
                    {props.title}
                </strong>
                <ul className="flex gap-2 mt-2 flex-wrap">
                    {skils}
                </ul>
                <p className="mt-2">
                    {props.description}
                </p>
                <div className="flex gap-4 mt-4 ">
                    <a 
                    className="border-b-2 border-gold-100 text-center flex items-center gap-2 hover:border-gold-200 hover:"
                    href = {props.git}> 
                        <Code className="" size={18}/>Code 
                    </a>
                    <a
                    className="border-b-2 border-gold-100 text-center flex items-center gap-2"
                    href = {props.demo}>
                        <Browser size={18}/>Demo
                    </a>
                </div>
            </div>
        </div>
    )
}
export default CardProject;