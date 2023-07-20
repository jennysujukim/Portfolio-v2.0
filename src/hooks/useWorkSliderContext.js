import { WorkSliderContext } from "../context/WorkSliderContext";
import { useContext } from "react";

export const useWorkSliderContext = () => {
    const context = useContext(WorkSliderContext)

    if(!context){
        throw new Error('useWorkSliderContext must be inside an WorkSliderContext Provider.')
    }

    return context
}