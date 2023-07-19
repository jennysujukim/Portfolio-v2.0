// styles
import styles from './FeaturedProjects.module.scss'

// components
import InternalButton from '../../../components/InternalButton'
import Heading from '../../../components/Heading'
import ProjectsList from '../../../components/ProjectsList'

export default function FeaturedProjects() {

    return ( 
        <section className="wrapper">
            <div className={styles.heading}>
                <Heading text="Featured Projects"/>
                <p className={styles.subTxt}>
                    Check out selected projects. 
                    <br />
                    Have a blast exploring them!
                </p>
            </div>
            <ProjectsList isHome />
            <InternalButton 
                text="View All Projects" 
                link="/work/all" 
            />
        </section>
    )
}
