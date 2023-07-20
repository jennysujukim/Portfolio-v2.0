import { ProjectContext } from "../context/ProjectContext";
import { useContext } from "react";

export const useProjectContext = () => {
    const context = useContext(ProjectContext)

    if(!context){
        throw new Error('useProjectContext must be inside an ProjectContext Provider.')
    }

    return context
}