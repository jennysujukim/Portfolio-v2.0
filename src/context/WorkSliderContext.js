import { createContext, useState } from 'react'

export const WorkSliderContext = createContext()

export const WorkSliderContextProvider = ({ children }) => {

    const [ sections, setSections ] = useState([])

    const handleScroll = (index) => {
        const element = document.getElementById(`section--${index}`)

        if (element) {
        const yOffset = -76;
        const y = element.getBoundingClientRect().top + window.scrollY + yOffset;

        window.scrollTo({ top: y, behavior: 'smooth' });
        }
    }

    return (
        <WorkSliderContext.Provider value={ { handleScroll, sections, setSections } }>
            { children }
        </WorkSliderContext.Provider>
    )

}