import styles from './Resume.module.scss'
import { FetchResumeData } from '../../assets/data/FetchResumeData'
import { FetchSkillData } from '../../assets/data/FetchSkillData'
import ArrowOutward from '../../components/ArrowOutward'

export default function Resume() {

    const workData = FetchResumeData().splice(0, 2)
    const extraData = FetchResumeData().splice(2, 2)
    const skillData = FetchSkillData()

    const handleClick = () => {
        window.print()
    }

  return (
    <main className="wrapper">
        <section className={styles.container}>
            <div className={styles.titleContainer}>
                <div>
                    <h1>Contact Me!</h1>
                    <p>Thank you for the visit. To print the resume, simply click the 'Print Resume' button.</p>
                </div>
                <button 
                    onClick={handleClick}
                    className={`highlight ${styles.ctaContainer}`}
                >
                    Print Resume
                    <div className={styles.cta}>
                        <ArrowOutward 
                            w="20px"
                            h="20px"
                        />
                    </div>
                </button>
            </div>
        </section>
        <section className={styles.resumeContainer}>
            <div className={styles.nameContainer}>
                <div>
                    <div className={styles.name}>
                        <h2>Jen Kim</h2>
                        <span>/ SEOJEONG</span>
                    </div>
                    <p className={styles.role}>Frontend Developer</p>
                </div>
                <div>
                    <div className={styles.contactContainer}>
                        <p>EMAIL</p>
                        <p className={styles.details}>hello@seojeongkim.com</p>
                    </div>
                    <div className={styles.contactContainer}>
                        <p>PHONE</p>
                        <p className={styles.details}>+1 236 869 4991</p>
                    </div>
                    <div className={styles.contactContainer}>
                        <p>PORTFOLIO</p>
                        <p className={styles.details}>https://seojeongkim.com</p>
                    </div>
                </div>
            </div>
            <div className={styles.contentContainer}>
                <div>
                    <p className={styles.sectionTitle}>Education</p>
                    <div className={styles.dataWrapper}>
                        <div className={styles.dataContainer}>
                            <div>
                                <p className={styles.title}>British Columbia Institute of Technology</p>
                                <p className={styles.subtitle}>New Media Design and Web Development</p>
                            </div>
                            <div className={styles.sideDetails}>
                                <p>05.2022 ~ Present</p>
                                <p>Vancouver, Canada</p>
                            </div>
                        </div>
                        <div className={styles.dataContainer}>
                            <div>
                                <p className={styles.title}>Royal Melbourne Institute of Technology</p>
                                <p className={styles.subtitle}>Bachelor of Fashion (Merchadise Management)</p>
                            </div>
                            <div className={styles.sideDetails}>
                                <p>02.2018 ~ 11.2020</p>
                                <p>Melbourne, Australia</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <p className={styles.sectionTitle}>Work Experience</p>
                    {workData.map((data, index) => (
                    <div 
                        key={index}
                        className={styles.dataWrapper}
                    >
                        <div className={styles.dataContainer}>
                            <div>
                                <p className={styles.title}>{data.title}</p>
                                <p className={styles.subtitle}>{data.subtitle}</p>
                            </div>
                            <div className={styles.sideDetails}>
                                <p>{data.duration}</p>
                                <p>{data.location}</p>
                            </div>
                        </div>
                        <ul>
                            {data.description.map((desc, index) => (
                                <li key={index}>
                                    <p>&bull; &nbsp;{desc}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                    ))}
                </div>
                <div>
                    <p className={styles.sectionTitle}>Volunteer & Awards</p>
                    {extraData.map((data, index) => (
                    <div 
                        key={index}
                        className={styles.dataWrapper}
                    >
                        <div className={styles.dataContainer}>
                            <div>
                                <p className={styles.title}>{data.title}</p>
                                <p className={styles.subtitle}>{data.subtitle}</p>
                            </div>
                            <div className={styles.sideDetails}>
                                <p>{data.duration}</p>
                                <p>{data.location}</p>
                            </div>
                        </div>
                        <ul>
                            {data.description.map((desc, index) => (
                                <li key={index}>
                                    <p>&bull; &nbsp;{desc}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                    ))}
                </div>
                <div>
                    <p className={styles.sectionTitle}>Skills</p>
                    { skillData.map((data, index) => (
                        <div 
                            key={index}
                            className={styles.dataWrapper}
                        >
                            <p className={styles.skillTitle}>{data.title}</p>
                            <ul className={styles.keywordContainer}>
                                {data.skills.map((skill, index) => (
                                    <li 
                                        key={index}
                                        className={styles.keyword}
                                    >
                                        <p>{skill}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
                <div>
                    <p className={styles.sectionTitle}>Languages</p>
                    <div className={styles.dataWrapper}>
                        <p>English</p>
                        <p>Korean</p>
                    </div>
                </div>
            </div>                       
        </section>
    </main>
  )
}
