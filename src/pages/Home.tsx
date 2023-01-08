import Footer from '.././components/Footer';
import Header from '.././components/Header';
import Im from '.././components/Im';
import TalkMy from '.././components/TalkMy';
import WorkCard from '.././components/WorkCard';

function App(){
    return(
        <div className="min-[1000px]:w-[1200px]">
            <Header/>
            <Im/>
            <WorkCard/>
            <TalkMy/>
            <Footer/>
        </div>
    )
}

export default App;