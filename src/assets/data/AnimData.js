import { useLottie } from "lottie-react"
import AustraliaAnim from "../images/about/about-archive-aus.json"
import FashionAnim from "../images/about/about-archive-fashion.json"
import HobbyAnim from "../images/about/about-archive-free.json"

export const ArchiveAus = () => {
    const options = {
        animationData: AustraliaAnim,
        loop: true
    }

    const { View } = useLottie(options)

    return <>{View}</>
}

export const ArchiveFashion = () => {
    const options = {
        animationData: FashionAnim,
        loop: true
    }

    const { View } = useLottie(options)

    return <>{View}</>
}

export const ArchiveHobby = () => {
    const options = {
        animationData: HobbyAnim,
        loop: true
    }

    const { View } = useLottie(options)

    return <>{View}</>
}