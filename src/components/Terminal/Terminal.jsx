import { useState } from 'react'
import { useNavigate } from 'react-router-dom' 

// styles
import styles from './Terminal.module.scss'

export default function Terminal() {

    const navigate = useNavigate()

    const [ command, setCommand ] = useState('')
    const [ prevCommands, setPrevCommands ] = useState([])

    const handleSubmit = async (e) => {
        e.preventDefault()
        e.persist()

        try {

        let result = ''

        switch (command) {
            case 'pwd':
                result = 'https://seojeongkim.com/'
                break
            case 'ls':
                result = 'home/  about/  projects/'
                break
            case 'cd about':
                result = 'cd is typed'
                navigate("/about")
                break
            case 'cd home':
                result = 'cd is typed'
                navigate("/home")
                break
            case 'cd projects':
                result = 'cd is typed'
                navigate("/work/all")
                break
            case 'exit':
                result = 'exit is typed'
                break
            case 'clear':
                setPrevCommands([])
                setCommand('')
                break
            default:
                result = 'cannot find the command'
        }

        if (command !== 'clear'){
            setPrevCommands((prevCommands) => [...prevCommands, result])
        }
        setCommand('')

        }catch(err){
            console.log(err)
        }

    }

  return (
    <div className={styles.container}>
        <h4>Terminal</h4>

        <div>Welcome to JenKim's terminal! Command below to navigate:</div>
        <div className={styles.intro}>
            <div>AVAILABLE COMMAND:</div>
            <div>pwd</div>
            <div>ls</div>
            <div>cd</div>
            <div>clear</div>
            <div>exit</div>
        </div>

        <div className={styles.commandbox}>
            {prevCommands.map((prevCommand, index) => (
                <div key={index}>
                    <div>portfolio@jenkim % {prevCommand}</div>
                </div>
            ))}
            <form 
                className={styles.form}
                onSubmit={handleSubmit}>
                <span>portfolio@jenkim %</span>
                <input 
                    type="text"
                    placeholder="/* Type command here */"
                    value={command}
                    onChange={(e) => setCommand(e.target.value.toLowerCase())}
                />
            </form>
        </div>

    </div>
  )
}
