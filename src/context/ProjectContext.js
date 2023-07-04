import { createContext, useState } from "react"
import { FetchProjectData } from '../assets/data/FetchProjectData'


export const ProjectContext = createContext()

export const ProjectContextProvider = ({ children }) => {

    const [ projectId, setProjectId ] = useState("")

    const allData = FetchProjectData()

    const projectData = allData.find((e) => {
        return e.id === projectId
        // return e.id === "004"
    })

    return (
        <ProjectContext.Provider value={ { projectData, setProjectId } } >
            { children }
        </ProjectContext.Provider>
    )

}