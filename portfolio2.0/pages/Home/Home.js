import React from 'react'
import { AiFillLinkedin, AiFillGithub, AiFillLayout } from 'react-icons/ai'
import fayes from '../../public/FAYES.png'
import Image from 'next/image'
function HomePage() {
  return (
    <div>
      <div className="text-center p-10 py-10">
        <h2 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl">
          Sarah Faye
        </h2>
        <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
          Developeuse Web Full Stack .
        </h3>
        <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
          Codeur en herbe à la recherche d un stage à fort impact en
          développement web. Maîtrise émergente, créativité sans limite, prête à
          laisser mon empreinte sur votre équipe dès maintenant !
        </p>
        <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
          <a href="http://localhost:3000/" target="blank">
            <AiFillLayout />
          </a>
          <a href="https://www.linkedin.com/in/faye-sarah/" target="blank">
            <AiFillLinkedin />
          </a>
          <a href="https://github.com/fayesarah555" target="blank">
            <AiFillGithub />
          </a>
        </div>
        <div className="mx-auto rounded-full w-80 h-80 relative overflow-hidden mt-20 md:h-96 md:w-96">
          <Image src={fayes} layout="fill" objectFit="cover" alt="Faye logo" />
        </div>
      </div>
    </div>
  )
}

export default HomePage
