import Introduction from "../../sections/Introduction/Introduction";
import About from "../../sections/About/About";
import Skills from "../../sections/Skills/Skills";
import Contact from "../../sections/Contact/Contact";

import ReactFullpage from "@fullpage/react-fullpage";

import "./Home.css"

function Home (){

    function onLeave(origin, destination, direction) {
        console.log("Leaving section " + origin.index);
    }
    function afterLoad(origin, destination, direction) {
        console.log("After load: " + destination.index);
    }
    return(

        <ReactFullpage
            navigation={false}
            controlArrows={false}
            keyboardScrolling={true}
            slidesNavigation={true}
            slidesNavPosition={'bottom'}
            navigationPosition={'right'}
            scrollOverflow={false}
            scrollBar={false}
            scrollingSpeed={600}
            sectionsColor={["white", "#fbfbfd", "white", "#fbfbfd"]}
            onLeave={onLeave}
            afterLoad={afterLoad}

            render={({ state, fullpageApi }) => {
                return (
                    <div id="fullpage-wrapper">
                        <div className="section" id="intro">
                            <Introduction />
                        </div>
                        <div className="section" id="about">
                            <About />
                        </div>
                        <div className="section" id="skills">
                            <Skills />
                        </div>
                        <div className="section" id="contact">
                            <Contact />
                        </div>
                    </div>
                );
            }}
        />
    );
}
export default Home;