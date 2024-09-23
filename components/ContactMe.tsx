import Link from "next/link";

const ContactMe = () => {
    return (
        <div className="flex flex-col gap-4">
            <h1 className="text-2xl font-bold">Contact Me</h1>
            <p className="text-base text-gray-700 dark:text-gray-300">
                Email me at {" "}
                <Link className="text-blue-500" href="mailto:ritrai1998@gmail.com">
                    ritrai1998@gmail.com</Link>
            </p>

        </div>);
};

export default ContactMe;