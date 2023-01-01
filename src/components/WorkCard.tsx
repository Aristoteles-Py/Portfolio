import calculadora from "../assets/calculadora.svg"
import eventPlataform from "../assets/event-plataform.jpeg"
import CardProject from "./CardProject";

function WorkCard(){
    return (
        <div className="w-[1100px] flex justify-center gap-20 mt-6">

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
            title="Calculadora"
            description="Esse projeto foi desenvolvido junto com Diego Fernandes da Rocketseat no Ignite Lab, botando em pratica meus conhecimentos com GraphQL e TailwindCSS"
            skils={['React','TypeScript','vite','GraphQL','TailwindCSS']}
            demo="https://calculadora-react-js-git-main-aristoteles-py.vercel.app/"
            git="https://github.com/Aristoteles-Py/Calculadora-React.JS"
            />

        </div>
    )
}
export default WorkCard;