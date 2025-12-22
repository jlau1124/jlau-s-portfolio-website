import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
    {
    id: 1,
    title: "MediHelper",
    description: "A web app that simplifies health insurance navigation & support for people with disabilities.",
    image: "/projects/medihelper.png", 
    tags: ["Figma", "OpenAI API", "Google Cloud"],
    demoUrl: "https://vercel.com/fuzionechos-projects/v0-medical-assistant-restart", //link to the website deployed 
    githubUrl: "https://github.com/FuzionEcho/MediHelper", //link to the github repo 
  },
  {
    id: 2,
    title: "Full Stack Spotify Clone",
    description: "A modern MERN stack music streaming app featuring real-time chat & user analytics.",
    image: "/projects/Full-Stack-Spotify-Clone.png",
    tags: ["React", "MongoDB", "Node.js"],
    demoUrl: "https://full-stack-spotify-clone-45uz.onrender.com/",
    githubUrl: "https://github.com/jlau1124/Spotify-Web-App-Clone.git",
  },
  {
    id: 3,
    title: "Flick Finder",
    description: "A React app using Appwrite and the TMDB API to search, browse, & explore trending movies.",
    image: "/projects/Flick-Finder.png",
    tags: ["React.js", "Tailwind CSS", "TMDB API"],
    demoUrl: "https://flick-finder-eunvqeq8x-jlau1124s-projects.vercel.app/",
    githubUrl: "https://github.com/jlau1124/FlickFinder",
  },
];

export const ProjectSection = () => {
    return <section id="projects" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                <span className="pixelify-sans-header text-5xl text-shadow-black">Latest</span>
                <span className="pixelify-sans-header text-5xl text-blue-400 text-shadow-black"> Projects</span>
            </h2>

            <p className="text-center text-muted-foreground jetbrains-mono-body mb-12 max-w-2xl mx-auto">
                Here are some of my recent projects. Each project was carefully
                crafted with attention to detail, performance, and user experience.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, key) => (
                    <div 
                        key={key} 
                        className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
                    >
                        <div className="h-48 overflow-hidden">
                            <img src={project.image} 
                            alt={project.title}  
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"/>
                        </div>
                        <div className="p-6">
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.tags.map((tag) => (
                                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                                    key={tag}>
                                        {tag}   
                                    </span>
                                ))}
                            </div>
                        <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                        <p className="text-muted-foreground text-sm mb-4 inter-body">
                            {project.description}
                        </p>
                        <div className="flex justify-between items-center"> 
                            <div className="flex space-x-3">
                                <a href={project.demoUrl} 
                                target="_blank"
                                className="text-foreground/80 hover:text-primary transition-colors duration-300">
                                    <ExternalLink size={20}/>
                                </a>
                                <a 
                                href={project.githubUrl}
                                target="_blank" 
                                className="text-foreground/80 hover:text-primary transition-colors duration-300">
                                    <Github size={20}/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                ))}
            </div>

            <div className="text-center mt-12">
                <a className="cosmic-button w-fit flex items-center mx-auto gap-2 jetbrains-mono-body bg-blue-400" 
                href="https://github.com/jlau1124"
                target="_blank">
                    Check My Github <ArrowRight size={16}/>
                </a>
            </div>
        </div>
    </section>
}
