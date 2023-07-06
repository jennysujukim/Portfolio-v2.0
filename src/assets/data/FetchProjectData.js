import placeholder from "../images/placeholder/p-projects-3x2.jpg"
import dailyProteinBanner from '../images/work/daily-protein/banner.jpg'
import dailyProteinThumb from '../images/work/daily-protein/overview.jpg'
import dailyProteinThumb2x1 from '../images/work/daily-protein/thumb-projects-2x1.jpg'
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
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        image_url: placeholder,
        image_url_projects: dailyProteinThumb2x1,
        link: "/work/typa-type",
        keywords: ["JavaScript", "Tailwind CSS"],
        live_site: "https://font-vogue.seojeongkim.com/",
        source_code: "https://github.com/jennysujukim/"
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




