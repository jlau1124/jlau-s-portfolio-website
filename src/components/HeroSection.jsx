import { ArrowDown } from "lucide-react"

export const HeroSection = () => {
    return <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
        <div className="container max-w-4xl mx-auto text-center z-10">
            <div className="space-y-6">
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                    <span className="opacity-0 animate-fade-in pixelify-sans-header"> Hi, I'm</span>
                    <span className=" opacity-0 animate-fade-in-delay-1 pixelify-sans-header text-blue-400"> Justin</span>
                    <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2 pixelify-sans-header"> Lau</span>
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-4 jetbrains-mono-body">
                    I’m a computer science student interested 
                    in full-stack and software engineering, 
                    currently exploring different areas as I expand my skills.
                </p>

                <div className="pt-4 opacity-0 animate-fade-in-delay-4">
                    <a href="#projects" className="cosmic-button jetbrains-mono-body bg-blue-400">
                        View My Work
                    </a>
                </div>
            </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
            <span className="text-sm text-muted-foreground mb-2 jetbrains-mono-body"> Scroll </span>
            <ArrowDown className="h-5 w-5 text-blue-400"/>
        </div>
    </section>
}