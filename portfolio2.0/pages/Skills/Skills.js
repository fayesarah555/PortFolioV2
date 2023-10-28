import React from 'react'
import Image from "next/image";
import code from "../../public/code.png";
import design from "../../public/design.png";
import consulting from "../../public/consulting.png";

function Skills() {

  return (
    <div>
        <div>
            <h3 className="text-3xl py-1 dark:text-white ">COMPETENCES</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
            Depuis le début de mon parcours en tant que développeuse autodidacte et en alternance, j ai fait du travail pour
              <span className="text-teal-500"> Okayo </span>
              J ai pu collaborer avec des personnes talentueuses pour créer des produits numériques destinés à la fois aux entreprises et aux consommateurs.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
            J offre une large gamme de services, y compris le développement front, le développement back et la gestion de bases de données.
            </p>
          </div>
          <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1">
              <Image src={design} width={100} height={100} alt="design" />
              <h3 className="text-lg font-medium pt-8 pb-2  ">
                Le développement front
              </h3>
              <p className="py-2">
              Créer des designs élégants adaptés à vos besoins.
              </p>
              <h4 className="py-4 text-teal-600">Outils côter front</h4>
              <p className="text-gray-800 py-1">Next Js</p>
              <p className="text-gray-800 py-1">Bootstrap 4</p>
              <p className="text-gray-800 py-1">tailwindcss</p>
              <p className="text-gray-800 py-1">Figma</p>
              <p className="text-gray-800 py-1">HTML5 / CSS3</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <Image src={code} width={100} height={100} alt="code"/>
              <h3 className="text-lg font-medium pt-8 pb-2 ">
              Le développement back
              </h3>
              <p className="py-2">
              Avez-vous une idée pour votre prochain site Web génial? Faisons-en une réalité.
              </p>
              <h4 className="py-4 text-teal-600">Outils côter back</h4>
              <p className="text-gray-800 py-1">Laravel</p>
              <p className="text-gray-800 py-1">PHP 7</p>
              <p className="text-gray-800 py-1">NodeJS</p>
              <p className="text-gray-800 py-1">JavaScript</p>
              <p className="text-gray-800 py-1">Python</p>
              <p className="text-gray-800 py-1">Ruby</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <Image src={consulting} width={100} height={100} alt="code"/>
              <h3 className="text-lg font-medium pt-8 pb-2 ">la gestion de bases de données</h3>
              <p className="py-2">
              Du mal a géré votre base de données ?
              </p>
              <h4 className="py-4 text-teal-600">Outils côter base de donnée</h4>
              <p className="text-gray-800 py-1">MongoDB</p>
              <p className="text-gray-800 py-1">SQL Server</p>
              <p className="text-gray-800 py-1">MySQL</p>
              <p className="text-gray-800 py-1">Firebase</p>
            </div>
          </div>
    </div>
  )
}

export default Skills