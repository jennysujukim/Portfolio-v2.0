import { useEffect } from 'react'
import { useWorkSliderContext } from '../../hooks/useWorkSliderContext'

// styles
import styles from './WorkSlider.module.scss'

export default function WorkSlider({ sections }) {

    const { handleScroll, setSections } = useWorkSliderContext()

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
