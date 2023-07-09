import placeholder from "../images/placeholder/p-projects-3x2.jpg"
import dailyProteinBanner from '../images/work/daily-protein/banner.jpg'
import dailyProteinThumb from '../images/work/daily-protein/overview.jpg'
import dailyProteinThumb2x1 from '../images/work/daily-protein/thumb-projects-2x1.jpg'
import TypaTypeBanner from '../images/work/typa-type/banner.jpg'
import TypaTypeThumb2x1 from '../images/work/typa-type/thumb-projects-2x1.jpg'

export const FetchProjectData = () => {
    
    return [
        {
        id: "001",
        title: "Daily Protein",
        description: "Sign up, calculate, track your daily protein intake.",
        image_url: dailyProteinThumb,
        image_url_projects: dailyProteinThumb2x1,
        banner_url: dailyProteinBanner,
        link: "/work/daily-protein",
        keywords: ["React.js", "Firebase", "Sass"],
        live_site: "https://daily-protein.seojeongkim.com/",
        source_code: "https://github.com/jennysujukim/daily-protein-2023"
        },
        {
        id: "002",
        title: "It was awesome!",
        description: "Lorem ipsum dolor sit amet.",
        image_url: dailyProteinThumb,
        image_url_projects: dailyProteinThumb2x1,
        link: "/work/it-was-awesome",
        keywords: ["React Native", "Typescript", "Sass"],
        live_site: "https://it-was-awesome.seojeongkim.com/",
        source_code: "https://github.com/jennysujukim/"
        },
        {
        id: "003",
        title: "LinkOn",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        image_url: placeholder,
        image_url_projects: dailyProteinThumb2x1,
        link: "/work/linkon",
        keywords: ["JavaScript", "Node.js", "WebRTC", "WebSocket"],
        live_site: "https://linkon.seojeongkim.com/",
        source_code: "https://github.com/jennysujukim/"
        },
        {
        id: "004",
        title: "Typa Type",
        description: "Discover a curated collection of unique typography.",
        image_url: TypaTypeBanner,
        image_url_projects: TypaTypeThumb2x1,
        banner_url: TypaTypeBanner,
        link: "/work/typa-type",
        keywords: ["HTML", "CSS", "JavaScript"],
        live_site: "https://typa-type.seojeongkim.com",
        source_code: "https://github.com/jennysujukim/typa-type-2023"
        },
        {
        id: "005",
        title: "My Notes",
        description: "Write and organize your personal notes.",
        image_url: placeholder,
        image_url_projects: dailyProteinThumb2x1,
        link: "/work/my-notes",
        keywords: ["PHP", "MySQL", "Bootstrap"],
        live_site: "https://my-notes.seojeongkim.com/",
        source_code: "https://github.com/jennysujukim/my-notes-2023"
        },
        {
        id: "006",
        title: "Jade Bookmark Manager",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        image_url: placeholder,
        image_url_projects: dailyProteinThumb2x1,
        link: "/work/jade-bookmark-manager",
        keywords: ["MERN", "Group Project"],
        live_site: "https://jade.seojeongkim.com/",
        source_code: "https://github.com/jennysujukim/"
        }
    ]

}




