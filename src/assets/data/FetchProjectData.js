import dailyProteinBanner from '../images/work/daily-protein/banner.jpg'
import dailyProteinThumb from '../images/work/daily-protein/overview.jpg'
import dailyProteinThumb2x1 from '../images/work/daily-protein/thumb-projects-2x1.jpg'
import TypaTypeBanner from '../images/work/typa-type/banner.jpg'
import TypaTypeThumb2x1 from '../images/work/typa-type/thumb-projects-2x1.jpg'
import RefineBanner from '../images/work/re-fine/banner.jpg'
import Refinethumb2x1 from '../images/work/re-fine/thumb-projects-2x1.jpg'
import dailyProteinThumbPlaceholder from '../images/work/daily-protein/overview-placeholder.jpg'

export const FetchProjectData = () => {
    
    return [
        {
        id: "001",
        title: "Daily Protein",
        description: "Sign up, calculate, track your daily protein intake.",
        image_url: dailyProteinThumb,
        image_url_placeholder: dailyProteinThumbPlaceholder,
        image_url_projects: dailyProteinThumb2x1,
        banner_url: dailyProteinBanner,
        link: "/work/daily-protein",
        keywords: ["React.js", "Firebase", "Sass"],
        live_site: "https://daily-protein.seojeongkim.com/",
        source_code: "https://github.com/jennysujukim/daily-protein-2023"
        },
        {
        id: "002",
        title: "RE:FINE",
        description: "Correct grammar and refine your sentences using Open AI.",
        image_url: RefineBanner,
        image_url_placeholder: dailyProteinThumbPlaceholder,
        image_url_projects: Refinethumb2x1,
        banner_url: RefineBanner,
        link: "/work/re-fine",
        keywords: ["JavaScript", "Node.js", "Express.js", "OpenAI"],
        live_site: "https://re-fine.seojeongkim.com",
        source_code: "https://github.com/jennysujukim/refine-2023"
        },
        {
        id: "003",
        title: "Typa Type",
        description: "Discover a curated collection of unique typography.",
        image_url: TypaTypeBanner,
        image_url_placeholder: dailyProteinThumbPlaceholder,
        image_url_projects: TypaTypeThumb2x1,
        banner_url: TypaTypeBanner,
        link: "/work/typa-type",
        keywords: ["HTML", "CSS", "JavaScript"],
        live_site: "https://typa-type.seojeongkim.com",
        source_code: "https://github.com/jennysujukim/typa-type-2023"
        },
        {
        id: "004",
        title: "Portfolio Build",
        description: "Write and organize your personal notes.",
        image_url: TypaTypeBanner,
        image_url_placeholder: dailyProteinThumbPlaceholder,
        image_url_projects: dailyProteinThumb2x1,
        link: "/work/portfolio-build",
        keywords: ["PHP", "JavaScript", "React.js", "SASS"],
        live_site: "https://portfolio-v1.seojeongkim.com/",
        source_code: "https://github.com/jennysujukim/"
        },
        {
        id: "005",
        title: "My Notes",
        description: "Write and organize your personal notes.",
        image_url: RefineBanner,
        image_url_placeholder: dailyProteinThumbPlaceholder,
        image_url_projects: dailyProteinThumb2x1,
        link: "/work/my-notes",
        keywords: ["PHP", "MySQL", "Bootstrap"],
        live_site: "https://my-notes.seojeongkim.com/",
        source_code: "https://github.com/jennysujukim/my-notes-2023"
        },
        // {
        // id: "006",
        // title: "Jade Bookmark Manager",
        // description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        // image_url: placeholder,
        // image_url_projects: dailyProteinThumb2x1,
        // link: "/work/jade-bookmark-manager",
        // keywords: ["MERN", "Group Project"],
        // live_site: "https://jade.seojeongkim.com/",
        // source_code: "https://github.com/jennysujukim/"
        // }
    ]

}




