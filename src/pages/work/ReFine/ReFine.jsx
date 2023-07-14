import { useContext, useEffect } from 'react'
import { ProjectContext } from '../../../context/ProjectContext'
import { WorkSliderContextProvider } from '../../../context/WorkSliderContext'
import { motion } from 'framer-motion'

// styles
import styles from './ReFine.module.scss'

// components
import WorkBanner from '../../../components/WorkBanner'
import WorkSlider from '../../../components/WorkSlider'
import SubHeading from '../../../components/SubHeading'
import WorkOverview from '../../../components/WorkOverview'
import WorkNavigation from '../../../components/WorkNavigation'
import CodeSnippet from '../../../components/CodeSnippet'
import OverviewVid from '../../../assets/images/work/re-fine/overview.mp4'
import frontendImg from '../../../assets/images/work/re-fine/frontend.jpg'

export default function ReFine() {

    const { setProjectId } = useContext(ProjectContext)

    useEffect(() => {
        setProjectId("002")
    }, [setProjectId])

    const ReFineSections = [ "Overview", "Serverside Envrionment", "OpenAI API", "Clientside Display", "Takeaways" ]

    const codeServer = 
`

const express = require('express')
const { generateContent } = 
require('./controllers/openaiControllers')

// app setup
const app = express()
const PORT = 3000 || process.env.PORT

app.listen(PORT, () => 
console.log(\`listening request on port \${PORT}\`))

// middleware
app.use(express.json())
app.use(express.static('public'))

// routes
app.post('/api/content', generateContent)


`

    const codeOpenAi = 
`const openai = require('../config/openaiConfig');

const generateContent = async (req, res) => {

    const { content } = req.body;

    const answer = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [
            {
                role: "system", 
                content: "You are a helpful assistant
                to help user to check English."
            },
            {
                role: 'user',
                content: \`Correct grammar and 
                refine the following sentences.: \${content}\`
            }
        ],
        temperature: 1,
        max_tokens: 500
    })

    res.status(200).json({
        answer: answer.data.choices[0].message.content,
    })
}
`

    const codeClient = 
`contentForm.addEventListener('submit', async (e) => {

    e.preventDefault();
    noResult.classList.add('deactive');
    isPending.classList.add('active');

    let question  = e.target.elements.content.value;
    formatQuestion(question);

    resultContainer.scrollTop = resultContainer.scrollHeight;

    fetch('/api/content', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ content: 
            contentForm.content.value })
    })
    .then(
        response => response.json()
    )
    .then((data) => {
        formatAnswer(data.answer);
    })
    .catch((error) => {
        const errorMsg = document.createElement('div');
        errorMsg.classList.add(error);
        errorMsg.innerText = error;

        resultContainer.appendChild(errorMsg);
    })
    .finally(
        () => {
            e.target.elements.content.value = '';
            isPending.classList.remove('active');
            resultContainer.scrollTop = 
            resultContainer.scrollHeight;
        }
    )
});
`

  return (
    <>
        <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ delay: 0.5 }}>
            <WorkBanner />
            <div className={`wrapper ${styles.container}`}>
                <WorkSliderContextProvider>
                <WorkSlider sections={ReFineSections} />
                </WorkSliderContextProvider>

                <div className={styles.content}>
                    <div className="glass__white"></div>

                    <section
                    id="section--0"
                    className={`wrapper--inner ${styles.sectionOne}`}>
                        <SubHeading text="Overview"/>
                        <WorkOverview
                            timeline="JUL 2023"
                            role="Design & Develop"
                            tech="JavaScript  Node.js  Express.js  OpenAI" />
                        <div className={styles.txtContainer}>
                            <p>
                                RE:FINE is a web application that allows users to check and refine their sentences using AI. Through a user-friendly chat interface, you can input initial sentences and promptly receive the polished versions. 
                            </p>
                            <p>
                                As a non-native English speaker, I have relied on AI particularly chatGPT to modify sentences. RE:FINE eliminates the need for additional commands and simplifies the process of verifying grammar and improving sentence structure.
                            </p>
                        </div>
                        <div className={styles.vidContainer}>
                            <video playsInline autoPlay muted loop>
                                <source src={OverviewVid} type="video/mp4" />
                            </video>
                        </div>
                    </section>
                    <section
                    id="section--1"
                    className={`wrapper--inner ${styles.sectionTwo}`}>
                        <SubHeading text="Server-side Environment"/>
                        <div className={styles.contentContainer}>
                            <div className={styles.txtContainer}>
                                <p>
                                    The code utilizes Node.js as the runtime environment to integrate the OpenAI API efficiently. Express.js, a web application framework for Node.js, is employed to simplify the handling of HTTP requests and responses with the OpenAI API. After starting the server, I set up the middleware that parses incoming requests as JSON. Additionally, the application is configured to serve static assets from the 'public' directory.
                                </p>
                                <p>
                                    Then, a route is created to handle POST requests at the '/api/content' endpoint. This route is associated with the generateContent function from the controller module. When a POST request is received at this endpoint, the generateContent function will be invoked to handle the request and generate the desired content using the OpenAI API.
                                </p>
                            </div>
                            <div className={styles.codeContainer}>
                                <CodeSnippet language="javascript" code={codeServer}/>
                            </div>
                        </div>
                    </section>
                    <section
                    id="section--2"
                    className={`wrapper--inner ${styles.sectionThree}`}>
                        <SubHeading text="OpenAI Controller"/>
                        <div className={styles.contentContainer}>
                            <div className={styles.txtContainer}>
                                <p>
                                    I created controller module to handle the Open AI API logic associated with the ‘/api/content’ endpoint. 
                                </p>
                                <p>
                                    Thankfully, OpenAI provides comprehensive resources, which made it easy for me to set up the async function to handle the POST request. ‘Content’, which is the input value from the client side, is extracted when user make a request. The request’s body property contains a JSON object with a content field. 
                                </p>
                                <p>
                                    This is passed to the messages array object, which is structured to serve as the command line for OpenAI’s GPT. I specifically have set the system and user’s situation to instruct the GPT model to function as a grammar checker and sentence refiner. 
                                </p>
                            </div>
                            <div className={styles.codeContainer}>
                                <CodeSnippet language="javascript" code={codeOpenAi}/>
                            </div>
                        </div>
                    </section>
                    <section
                    id="section--3"
                    className={`wrapper--inner ${styles.sectionFour}`}>
                        <SubHeading text="Client-side Display"/>
                        <div className={styles.contentContainerOne}>
                            <div className={styles.txtContainer}>
                                <p>
                                    On the client-side, I have implemented the async function that sends a 'POST' request when the form is submitted. This allows the OpenAI controller to handle the content data sent from the form. When the fetch function successfully receives a response from the server, it triggers the execution of the formatAnswer() function. This function appends the generated answer as a new node element inside the HTML, displaying it to the user. Additional functions and error handling are included within this function to ensure a seamless user experience and better affordance.
                                </p>
                            </div>
                            <div className={styles.codeContainer}>
                                <CodeSnippet language="javascript" code={codeClient}/>
                            </div>
                        </div>
                        <div className={styles.contentContainerTwo}>
                            <div className={styles.imgContainer}>
                                <img src={frontendImg} alt="Shots of RE:FINE App" />
                            </div>
                        </div>

                    </section>
                    <section
                    id="section--4"
                    className={`wrapper--inner ${styles.sectionFive}`}>
                        <SubHeading text="Takeaways"/>
                        <div className={styles.contentContainer}>
                            <p>
                                Thanks to Express.js, building a project that includes both server and client with Node.js was an excellent practice for me. As a frontend developer, it provides me with a clear understanding of how server handles requests and how frontend displays the response on the client-side.
                            </p>
                            <p>
                                Integrating OpenAI into the project initially seemed challenging, but the detailed documentation made it feasible to implement AI functionality. Although fine-tuning is required to achieve seamless and accurate answers in the responses, it was a fun project that catered to my personal needs.
                            </p>
                        </div>
                    </section>
                </div>
            </div>
            <WorkNavigation />
        </motion.div>
    </>
  )
}
