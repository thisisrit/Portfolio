interface EducationItem {
    collegeName?: string,
    schoolName?: string,
    courseName: string,
    address: string;
};

const educationData: EducationItem[] = [
    {
        collegeName: "Kingston School of Management and Science",
        courseName: "Bachelors of Computer Application",
        address: "Kolkata, West Bengal"
    },
    {
        schoolName: "Bholananda National Vidyala",
        courseName: "Commerce",
        address: "Kolkata, West Bengal"
    }
];

const Education = () => {
    return <div className="flex flex-col gap-4">
        <h1 className="text-2xl font-bold">Education</h1>
        <div className="p-1">
            <ol className="relative border-s border-gray-200 dark:border-gray-700">
                {educationData.map((item, index) => (<li key={index} className="mb-10 ms-4">
                    <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{item.courseName} at {item?.collegeName || item?.schoolName}</h3>
                    <p className="text-base text-gray-700 dark:text-gray-300">{item.address}</p>
                </li>))}
            </ol>
        </div>
    </div>
};

export default Education;