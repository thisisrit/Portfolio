"use client";

import Image from "next/image";

const Intro = () => {
  return (
    <div className="flex gap-14 flex-col-reverse lg:flex-row sm:flex-row justify-between items-center w-full">
      <div className="flex flex-col gap-4 md:w-9/12 sm:w-full">
        <h1 className="text-4xl font-bold">Hi! I am Rit.</h1>
        <p className="text-base text-gray-700 dark:text-gray-300">
          A dedicated Network Support Engineer with 1+ years of experience in
          troubleshooting, maintaining, and optimizing network infrastructure.
          Recently, expanded my technical expertise by developing skills in MERN
          (MongoDB, Express, React, Node.js) stack development, with a strong
          interest in transitioning into a full-stack developer role. I am
          passionate about building dynamic and scalable web applications. While
          I am eager to advance my career in MERN stack development, I remain
          open to opportunities in network support where I can leverage my
          problem-solving skills and technical knowledge.
        </p>
      </div>
      <div className="md:w-3/12 sm:w-full flex items-center justify-center">
        <Image
          src="/images/Rit_Rai.png"
          alt="Rit"
          width={120}
          height={120}
          className="border-2 border-gray-100 rounded-full object-cover"
        />
      </div>
    </div>
  );
};

export default Intro;
