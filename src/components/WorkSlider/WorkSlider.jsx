import { useContext, useEffect } from 'react'
import { WorkSliderContext } from '../../context/WorkSliderContext'

// styles
import styles from './WorkSlider.module.scss'

export default function WorkSlider({ sections }) {

    const { handleScroll, setSections } = useContext(WorkSliderContext)

    useEffect(() => {
        setSections(sections)
    }, [setSections, sections])

    return (
        <div className={styles.slider}>
            {sections.map((section, index) => (
            <div 
            className={styles.sliderIndex}
            key={index}
            onClick={() => handleScroll(index)}>
            {section}
            </div>
            ))}
        </div>
    )
}
