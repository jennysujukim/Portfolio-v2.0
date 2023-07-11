import { useContext, useEffect } from 'react'
import { ProjectContext } from '../../../context/ProjectContext'
import { WorkSliderContextProvider } from '../../../context/WorkSliderContext'

// styles
import styles from './ReFine.module.scss'

// components
import WorkBanner from '../../../components/WorkBanner'
import WorkSlider from '../../../components/WorkSlider'
import SubHeading from '../../../components/SubHeading'
import WorkOverview from '../../../components/WorkOverview'
import WorkNavigation from '../../../components/WorkNavigation'
import CodeSnippet from '../../../components/CodeSnippet'

export default function ReFine() {

    const { setProjectId } = useContext(ProjectContext)

    useEffect(() => {
        setProjectId("002")
    }, [setProjectId])

    const ReFineSections = [ "Overview", "Serverside Envrionment", "OpenAI API", "Clientside Display", "Takeaways" ]

    const codeServer = 
`const express = require('express')
const { generateContent, generateColors } = require('./controllers/openaiControllers')

// app setup
const app = express()
const PORT = 3000 || process.env.PORT

app.listen(PORT, () => console.log(\`listening request on port \${PORT}\`))

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
                content: "You are a helpful assistant to help user to check English."
            },
            {
                role: 'user',
                content: \`Correct grammar and refine the following sentences.: \${content}\`
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
        body: JSON.stringify({ content: contentForm.content.value })
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
        errorMsg.innerText = 'Error occured while fetching data. Please refresh.';

        resultContainer.appendChild(errorMsg);
    })
    .finally(
        () => {
            e.target.elements.content.value = '';
            isPending.classList.remove('active');
            resultContainer.scrollTop = resultContainer.scrollHeight;
        }
    )
});
`

  return (
    <>
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
                </section>
                <section
                id="section--1"
                className={`wrapper--inner ${styles.sectionTwo}`}>
                    <SubHeading text="Server-side Environment"/>
                    <div className={styles.contentContainer}>
                        <div className={styles.codeContainer}>
                            <CodeSnippet language="javascript" code={codeServer}/>
                        </div>
                    </div>
                </section>
                <section
                id="section--2"
                className={`wrapper--inner ${styles.sectionThree}`}>
                    <SubHeading text="Open AI API"/>
                    <div className={styles.contentContainer}>
                        <div className={styles.codeContainer}>
                            <CodeSnippet language="javascript" code={codeOpenAi}/>
                        </div>
                    </div>
                </section>
                <section
                id="section--3"
                className={`wrapper--inner ${styles.sectionFour}`}>
                    <SubHeading text="Client-side Display"/>
                    <div className={styles.contentContainer}>
                        <div className={styles.codeContainer}>
                            <CodeSnippet language="javascript" code={codeClient}/>
                        </div>
                    </div>
                </section>
                <section
                id="section--4"
                className={`wrapper--inner ${styles.sectionFive}`}>
                    <SubHeading text="Takeaways"/>
                </section>
            </div>
        </div>
        <WorkNavigation />
    </>
  )
}
