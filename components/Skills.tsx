const skillsData: string[] = [
    "HTML",
    "CSS",
    "JavaScript",
    "SQL",
    "Core Java",
    "Python",
    "Django",
    "Networking Concepts",
    "ReactJS",
    "NextJS",
    "TailWind CSS"
];

const Skills = () => {
    return <div className="flex flex-col gap-4">
        <h1 className="text-2xl font-bold">Skills </h1>
        <div className="flex flex-wrap gap-2">
            {skillsData.map((skill, index) => (
                <div key={index} className="flex-border border-gray-200 dark:border-gray-800 rounded-md px-2 py-1 text-sm bg-gray-500 text-white">
                    {skill}
                </div>
            ))}
        </div>
    </div>
};

export default Skills;