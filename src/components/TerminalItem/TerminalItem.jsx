import { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom' 

// styles
import styles from './TerminalItem.module.scss'

export default function TerminalItem() {

    const navigate = useNavigate()

    const [ command, setCommand ] = useState('')
    const [ prevCommands, setPrevCommands ] = useState([])

    const { pathname } = useLocation()

    const handleSubmit = async (e) => {
        e.preventDefault()
        e.persist()

        try {

        let result = ''
        const cleanedCommand = command.replace(/\s+/g, ' ').trim()

        switch (cleanedCommand) {
            case 'pwd':
                result = 'https://seojeongkim.com/'
                break
            case 'ls':
                result = 'home/  about/  projects/  bts/'
                break
            case 'cd about':
                navigate("/about")
                break
            case 'home':
                result = 'Error: Type "cd home" to navigate to home page.'
                break
            case 'cd home':
                if(pathname === '/'){
                    result = `'home' is a current directory.`
                } else {
                    navigate("/")
                }
                break
            case 'projects':
                result = 'Error: Type "cd projects" to navigate to projects page.'
                break
            case 'cd projects':
                navigate("/work/all")
                break
            case 'bts':
                result = 'Error: Type "cd bts" to navigate to bts page.'
                break
            case 'cd bts':
                navigate("/work/portfolio-build")
                break
            case 'clear':
                setPrevCommands([])
                setCommand('')
                break
            default:
                result = 'Error: cannot find the command'
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
        <div className={styles.title}>
            Terminal
        </div>
        <div>Try the terminal ! Command below to navigate:</div>
        <div className={styles.intro}>
            <div>AVAILABLE COMMAND:</div>
            <div>pwd</div>
            <div>ls</div>
            <div>cd</div>
            <div>clear</div>
        </div>
        <div className={styles.commandbox}>
            {prevCommands.map((prevCommand, index) => (
                <div key={index}>
                    <div>portfolio@jenkim % {prevCommand}</div>
                </div>
            ))}
            <form 
                className={styles.form}
                onSubmit={handleSubmit}
            >
                <span>portfolio@jenkim %</span>
                <input 
                    className={styles.formInput}
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
