import { Button } from "./ui/button";

interface Project {
    title: string,
    description: string,
    link: string,
    code: string,
    previewVideo: string,
    technologies: string[]
}

const projectsData: Project[] = [
    {
        title: "Portfolio",
        description:
            "A Portfolio which is minimal with all the necessary things.",
        link: "https://form-vibe.vercel.app/",
        code: "https://github.com/yatharth1706/FormVibe",
        previewVideo: "/videos/PortfolioPreview.mp4",
        technologies: [
            "Next.js",
            "React",
            "Appwrite",
            "TypeScript",
            "Tailwind CSS",
        ],
    },
];

const Projects = () => {
    return (
        <div className="flex flex-col gap-4 w-full">
            <h1 className="text-2xl font-bold">Projects</h1>
            <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-4">
                {projectsData?.map((item, index) => (
                    <div key={index} className="flex flex-col border border-gray-100 dark:border-gray-800 rounded-md">
                        <video src={item.previewVideo} autoPlay muted loop className="w-full h-full rounded-t-md" />
                        <div className="flex flex-col gap-3 p-4 grow">
                            <h2 className="text-lg font-bold">{item.title}</h2>
                            <p className="text-base text-gray-500">{item.description}</p>
                            <div className="flex gap-1 flex-wrap">
                                {item.technologies.map((tech, techIndex) => (
                                    <div
                                        key={techIndex}
                                        className="flex border border-gray-200 dark:border-gray-800 rounded-md px-2 py-1 text-sm bg-gray-200 text-gray-800"
                                    >
                                        {tech}
                                    </div>
                                ))}
                            </div>
                            <div className="flex gap-2 mt-auto">
                                <Button variant="default">View</Button>
                                <Button variant="outline">Code</Button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
