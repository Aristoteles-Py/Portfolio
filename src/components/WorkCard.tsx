import calculadora from "../assets/calculadora.png"
import eventPlataform from "../assets/event-plataform.jpeg"
import CardProject from "./CardProject";

function WorkCard(){
    return (
        <div className="w-full mt-5 ">
            <strong className="max-[650px]:ml-3 text-3xl text-gold-100 ml-40 max-[650px]:">
                Ultimos projetos
            </strong>
            <div className="w-full mt-4 flex justify-center gap-20 mt-2 max-[650px]:gap-10 max-[650px]:flex-col max-[650px]:items-center">
                <CardProject 
                img={calculadora}
                title="Calculadora"
                description="O projeto foi criado para eu poder começar a trabalhar com o JSX, entender como ele funciona, e criar os meus primeiros components em React, ultilizando os react-hooks."
                skils={['HTML', 'CSS', 'JavaScript', 'React']}
                demo="https://calculadora-react-js-git-main-aristoteles-py.vercel.app/"
                git="https://github.com/Aristoteles-Py/Calculadora-React.JS"
                />
    
                <CardProject 
                img={eventPlataform}
                title="Event Plataform"
                description="Esse projeto foi desenvolvido junto com Diego Fernandes da Rocketseat no Ignite Lab, colocando em pratica meus conhecimentos com GraphQL e TailwindCSS"
                skils={['React','TypeScript','vite','GraphQL','TailwindCSS']}
                demo="https://ignite-lab-event-plataform-iusi-git-main-aristoteles-py.vercel.app/"
                git="https://github.com/Aristoteles-Py/Ignite-Lab-Event-Plataform"
                />
            </div>
        </div>
    )
}
export default WorkCard;