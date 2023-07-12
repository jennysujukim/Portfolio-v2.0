import { useEffect, useContext } from 'react'
import { WorkSliderContextProvider } from '../../../context/WorkSliderContext'
import { ProjectContext } from '../../../context/ProjectContext'

// styles
import styles from './TypaType.module.scss'

// components
import overviewImg from '../../../assets/images/work/typa-type/overview.jpg'
import fundamentalVid from '../../../assets/images/work/typa-type/fundamentals.mp4'
import functionalitiesVid from '../../../assets/images/work/typa-type/functionalities.mp4'
import WorkBanner from '../../../components/WorkBanner'
import WorkSlider from '../../../components/WorkSlider'
import SubHeading from '../../../components/SubHeading'
import WorkOverview from '../../../components/WorkOverview'
import CodeSnippet from '../../../components/CodeSnippet'
import WorkNavigation from '../../../components/WorkNavigation'


export default function TypaType() {

    const { setProjectId } = useContext(ProjectContext)

    useEffect(() => {
        setProjectId("004")
      }, [setProjectId])

    const TypaTypeSections = [ "Overview", "At A Glance", "Append Node Objects", "Event Handlers", "Takeaways" ]

    const codeAppend = 
`const addToFontList = () => {

    const fontDetails = (data) => {
        const fontCard = document.createElement('li');
        fontCard.classList.add("fontlist-card");
    
        const fontSample = document.createElement('div');
        fontSample.classList.add('card-aa', \`font--\${data.id}\`);
        fontSample.innerText = "Aa"; 

        // ---- append more children ---- //

        fontCard.appendChild(fontSample);
        slideContainer.appendChild(fontCard);
    }

    fontData.forEach(data => {
        fontDetails(data)
    });

}

addToFontList();
`

    const codeEventHandler = 
`sizeControl.addEventListener('input', (e) => {
    let inputValue = e.target.value;
    sampleText.style.fontSize = inputValue + 'px';
    sizeValue.textContent = inputValue + 'px';
});

letterControl.addEventListener('input', (e) => {
    let inputValue = e.target.value;
    sampleText.style.letterSpacing = inputValue + 'px';
    letterValue.textContent = inputValue + 'px';
});

heightControl.addEventListener('input', (e) => {
    let inputValue = parseFloat(e.target.value) / 10;
    let formatValue = inputValue.toFixed(1);
    sampleText.style.lineHeight = formatValue;
    heightValue.textContent = formatValue;
});
`

  return (
    <>
        <WorkBanner />
        <div className={`wrapper ${styles.container}`}>
            <WorkSliderContextProvider>
                <WorkSlider sections={TypaTypeSections}/>
            </WorkSliderContextProvider>
            <div className={styles.content}>
                <div className="glass__white"></div>
                <section
                id="section--0"
                className={`wrapper--inner ${styles.sectionOne}`}>
                    <SubHeading text="Overview"/>
                    <WorkOverview 
                        timeline="FEB 2023"
                        role="Design & Develop"
                        tech="HTML CSS JAVASCRIPT"/>
                    <div className={styles.txtContainer}>
                        <p>Typa Type is a website that offers a curated collection of  distinctive typography options.  It allows you to discover different styles and experiment with various settings. Once you find a font you like, simply click "Get Fonts" to go the place you can download the font.</p>
                        <p> With Typa Type, you can select a font and customize its size, letter spacing, line height, and text alignment to see how it looks in real time. You can enter your own sample text to experiment with and view the changes instantly. Discover and explore unique font styles with Typa Type!</p>
                    </div>
                    <div className={styles.imgContainer}>
                        <img src={overviewImg} alt="Shots of Typa Type" />
                    </div>
                </section>

                <section
                id="section--1"
                className={`wrapper--inner ${styles.sectionTwo}`}>
                    <SubHeading text="At A Glance"/>
                    <div className={styles.contentContainerOne}>
                        <div className={styles.txtContainer}>
                            <h4>Fundamentals</h4>
                            <p>
                                This website is built with pure CSS and vanilla JS without any frameworks or plugins. By choosing to keep it basic, I can have flexibility to utilize essential JavaScript practices and achieve the desired functionality without relying on external dependencies. This approach allows for a lightweight and efficient website, providing the freedom to create unique designs and easily modify the appearance as needed.
                            </p>
                        </div>
                        <div className={styles.vidContainer}>
                            <video playsInline autoPlay muted loop>
                                <source src={fundamentalVid} type="video/mp4" />
                            </video>
                        </div>
                    </div>
                    <div className={styles.contentContainerTwo}>
                        <div className={styles.txtContainer}>
                            <h4>Functionalities</h4>
                            <p>
                                To create interactivity, input ranges are primarily used to receive user input. Users can easily drag ranges to dynamically change the style of sample text.
                            </p>
                        </div>
                        <div className={styles.vidContainer}>
                            <video playsInline autoPlay muted loop>
                                <source src={functionalitiesVid} type="video/mp4" />
                            </video>
                        </div>
                    </div>
                </section>

                <section
                id="section--2"
                className={`wrapper--inner ${styles.sectionThree}`}>
                    <SubHeading text="Append Node Objects"/>
                    <div className={styles.contentContainer}>
                        <div className={styles.txtContainer}>
                            <p>
                                Instead of directly creating elements in HTML, I created a function that dynamically generates elements and appends them under a parent node using the appendChild() method. To enhance modularity and flexibility, I have organized the font details into an array of font data objects in a separate file. Then, I iterate over the data array using forEach with a pre-defined function. This approach allows me to add new font data without need to modify the existing code.
                            </p>
                        </div>
                        <div className={styles.codeContainer}>
                            <CodeSnippet language="javascript" code={codeAppend}/>
                        </div>
                    </div>
                </section>

                <section
                id="section--3"
                className={`wrapper--inner ${styles.sectionFour}`}>
                    <SubHeading text="Event Handlers"/>
                    <div className={styles.contentContainer}>
                        <div className={styles.txtContainer}>
                            <p>
                                To enable user interaction, EventListeners are added to each component in order to update the styles and functionalities. The values obtained from the range inputs are utilized to update the corresponding styles of the sample text within the textarea. These updates are instantly applied to the sample text, resulting in a responsive and interactive user experience.
                            </p>
                        </div>
                        <div className={styles.codeContainer}>
                            <CodeSnippet language="javascript" code={codeEventHandler}/>
                        </div>
                    </div>
                </section>

                <section
                id="section--4"
                className={`wrapper--inner ${styles.sectionFive}`}>
                    <SubHeading text="Takeaways"/>
                    <div className={styles.contentContainer}>
                        <p>
                            With vanilla JS, the website leverages core JavaScript practices and capabilities without the need for additional libraries. This allows for greater control and understanding of the underlying code, as well as the ability to optimize performance and tailor the functionality to specific requirements.
                        </p>
                        <p>
                            Overall, building the website without frameworks or plugins offers the advantages of simplicity, flexibility, control, and performance optimization. It allows for a more streamlined development process and enables the utilization of essential JavaScript practices to achieve the desired functionality.  
                        </p>
                    </div>
                </section>
            </div>
        </div>
        <WorkNavigation />
    </>
  )
}
