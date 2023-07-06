import placeholder from "../images/placeholder/p-projects-3x2.jpg"
import thumbnail from '../images/placeholder/cafeLayered-thumbnail.jpg'
import dailyProteinBanner from '../images/work/daily-protein/banner.jpg'
import dailyProteinThumb from '../images/work/daily-protein/overview.jpg'
import dailyProteinThumb3x4 from '../images/work/daily-protein/thumb-projects.jpg'

export const FetchProjectData = () => {
    
    return [
        {
        id: "001",
        title: "Daily Protein",
        description: "Single Page Application designed to track daily protein intake. Sign up to calculate your ideal protein intake and log your meals for easy monitoring.",
        image_url: dailyProteinThumb,
        image_url_projects: dailyProteinThumb3x4,
        banner_url: dailyProteinBanner,
        link: "/work/daily-protein",
        keywords: ["React.js", "Firebase", "Sass"],
        live_site: "https://daily-protein.seojeongkim.com/",
        source_code: "https://github.com/jennysujukim/"
        },
        {
        id: "002",
        title: "It was awesome!",
        description: "Coming Soon...",
        image_url: dailyProteinThumb,
        image_url_projects: thumbnail,
        link: "/work/it-was-awesome",
        keywords: ["React Native", "Typescript", "Sass"],
        live_site: "https://it-was-awesome.seojeongkim.com/",
        source_code: "https://github.com/jennysujukim/"
        },
        {
        id: "003",
        title: "LinkOn",
        description: "Coming soon...",
        image_url: placeholder,
        image_url_projects: thumbnail,
        link: "/work/linkon",
        keywords: ["JavaScript", "Node.js", "WebRTC", "WebSocket"],
        live_site: "https://linkon.seojeongkim.com/",
        source_code: "https://github.com/jennysujukim/"
        },
        {
        id: "004",
        title: "Typa Type",
        description: "Coming soon...",
        image_url: placeholder,
        image_url_projects: thumbnail,
        link: "/work/typa-type",
        keywords: ["JavaScript", "Tailwind CSS"],
        live_site: "https://font-vogue.seojeongkim.com/",
        source_code: "https://github.com/jennysujukim/"
        },
        {
        id: "005",
        title: "My Notes",
        description: "An app that provides users with a personal dashboard for managing notes. CRUD database operations with PHP and MySQL.",
        image_url: placeholder,
        image_url_projects: thumbnail,
        link: "/work/my-notes",
        keywords: ["PHP", "MySQL", "Bootstrap"],
        live_site: "https://my-notes.seojeongkim.com/",
        source_code: "https://github.com/jennysujukim/my-notes-2023"
        },
        {
        id: "006",
        title: "Jade Bookmark Manager",
        description: "Coming soon...",
        image_url: placeholder,
        image_url_projects: thumbnail,
        link: "/work/jade-bookmark-manager",
        keywords: ["MERN", "Group Project"],
        live_site: "https://jade.seojeongkim.com/",
        source_code: "https://github.com/jennysujukim/"
        }
    ]

}




