import { createContext, useState } from "react"
import { FetchProjectData } from '../assets/data/FetchProjectData'


export const ProjectContext = createContext()

export const ProjectContextProvider = ({ children }) => {

    const [ projectId, setProjectId ] = useState("")

    const allData = FetchProjectData()

    const projectData = allData.find((e) => {
        return e.id === projectId
    })

    const projectDataIndex = allData.findIndex((e) => {
        return e.id === projectId
    })

    const nextProjectData = allData[projectDataIndex + 1] || null;

    return (
        <ProjectContext.Provider value={ { projectData, setProjectId, nextProjectData } } >
            { children }
        </ProjectContext.Provider>
    )

}