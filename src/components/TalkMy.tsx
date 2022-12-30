import maoRight from '../assets/maoRight.svg';

function TalkMy(){
    return(
        <div className="h-[500px] flex justify-end items-center bg-icons mt-10">
            <div className="flex flex-col gap-4">
                <strong className="text-gold-100">I’m ready to talk...</strong>
                <input className="w-[457px] h-[65px] border border-gray-600" type="text" name="" />
                <input className="w-[457px] h-[65px] border border-gray-600" type="text" name="" />
                <input className="w-[457px] h-[140px] border border-gray-600" type="text" name="" /> 
            </div>
            <img className="mt-10" src={maoRight} alt="" />
        </div>
    )
}
export default TalkMy;