import dailyProteinBanner from '../images/work/daily-protein/banner.jpg'
import dailyProteinBannerPlaceholder from '../images/work/daily-protein/banner-placeholder.jpg'
import dailyProteinThumb from '../images/work/daily-protein/overview.jpg'
import dailyProteinThumbPlaceholder from '../images/work/daily-protein/overview-placeholder.jpg'
import dailyProteinThumb2x1 from '../images/work/daily-protein/thumb-projects-2x1.jpg'
import dailyProteinThumb2x1Placeholder from '../images/work/daily-protein/thumb-projects-2x1-placeholder.jpg'

import RefineBanner from '../images/work/re-fine/banner.jpg'
import RefineBannerPlaceholder from '../images/work/re-fine/banner-placeholder.jpg'
import Refinethumb2x1 from '../images/work/re-fine/thumb-projects-2x1.jpg'
import RefineThumb2x1Placeholder from '../images/work/re-fine/thumb-projects-2x1-placeholder.jpg'

import TypaTypeBanner from '../images/work/typa-type/banner.jpg'
import TypaTypeBannerPlaceholder from '../images/work/typa-type/banner-placeholder.jpg'
import TypaTypeThumb2x1 from '../images/work/typa-type/thumb-projects-2x1.jpg'
import TypaTypeThumb2x1Placeholder from '../images/work/typa-type/thumb-projects-2x1-placeholder.jpg'

import PortfolioBanner from '../images/work/portfolio-build/banner.jpg'
import PortfolioBannerPlaceholder from '../images/work/portfolio-build/banner-placeholder.jpg'
import PortfolioThumb2x1 from '../images/work/portfolio-build/thumb-projects-2x1.jpg'
import PortfolioThumb2x1Placeholder from '../images/work/portfolio-build/thumb-projects-2x1-placeholder.jpg'

import MyNotesBanner from '../images/work/my-notes/banner.jpg'
import MyNotesBannerPlaceholder from '../images/work/my-notes/banner-placeholder.jpg'
import MyNotesThumb2x1 from '../images/work/my-notes/thumb-projects-2x1.jpg'
import MyNotesThumb2x1Placeholder from '../images/work/my-notes/thumb-projects-2x1-placeholder.jpg'

export const FetchProjectData = () => {
    
    return [
        {
        id: "001",
        title: "Daily Protein",
        description: "Sign up, calculate, track your daily protein intake.",
        image_url: dailyProteinThumb,
        image_url_placeholder: dailyProteinThumbPlaceholder,
        image_url_projects: dailyProteinThumb2x1,
        image_url_projects_placeholder: dailyProteinThumb2x1Placeholder,
        banner_url: dailyProteinBanner,
        banner_url_placeholder: dailyProteinBannerPlaceholder,
        link: "/work/daily-protein",
        keywords: ["MERN", "TypeScript", "Redux", "Firebase Auth", "MUI" ],
        live_site: "https://daily-protein.seojeongkim.com/",
        source_code: "https://github.com/jennysujukim/DailyProtein2.0_MERN"
        },
        {
        id: "002",
        title: "RE:FINE",
        description: "Correct grammar and refine your sentences using Open AI.",
        image_url: RefineBanner,
        image_url_placeholder: RefineBannerPlaceholder,
        image_url_projects: Refinethumb2x1,
        image_url_projects_placeholder: RefineThumb2x1Placeholder,
        banner_url: RefineBanner,
        banner_url_placeholder: RefineBannerPlaceholder,
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
        image_url_placeholder: TypaTypeBannerPlaceholder,
        image_url_projects: TypaTypeThumb2x1,
        image_url_projects_placeholder: TypaTypeThumb2x1Placeholder,
        banner_url: TypaTypeBanner,
        banner_url_placeholder: TypaTypeBannerPlaceholder,
        link: "/work/typa-type",
        keywords: ["HTML", "CSS", "JavaScript"],
        live_site: "https://typa-type.seojeongkim.com",
        source_code: "https://github.com/jennysujukim/typa-type-2023"
        },
        {
        id: "004",
        title: "Portfolio Build",
        description: "Roadmap of learning and developing portfolio with ReactJS.",
        image_url: PortfolioBanner,
        image_url_placeholder: PortfolioBannerPlaceholder,
        image_url_projects: PortfolioThumb2x1,
        image_url_projects_placeholder: PortfolioThumb2x1Placeholder,
        banner_url: PortfolioBanner,
        banner_url_placeholder: PortfolioBannerPlaceholder,
        link: "/work/portfolio-build",
        keywords: ["PHP", "JavaScript", "React.js", "SASS"],
        live_site: "https://portfolio-v1.seojeongkim.com/",
        source_code: "https://github.com/jennysujukim/Portfolio-v1.0"
        },
        {
        id: "005",
        title: "My Notes",
        description: "Write and organize your personal notes.",
        image_url: MyNotesBanner,
        image_url_placeholder: MyNotesBannerPlaceholder,
        image_url_projects: MyNotesThumb2x1,
        image_url_projects_placeholder: MyNotesThumb2x1Placeholder,
        banner_url: MyNotesBanner,
        banner_url_placeholder: MyNotesBannerPlaceholder,
        link: "/work/my-notes",
        keywords: ["PHP", "MySQL", "Bootstrap"],
        live_site: "https://my-notes.seojeongkim.com/",
        source_code: "https://github.com/jennysujukim/my-notes-2023"
        },
        // {
        // id: "006",
        // title: "Saegim Tattoo Website",
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




