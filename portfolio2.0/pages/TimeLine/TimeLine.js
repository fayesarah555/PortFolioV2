import React from 'react'

function TimeLine() {
  return (
    <div className='py-10 mb-12 '>
        <h3 className="text-3xl py-1 dark:text-white ">EXPÉRIENCES</h3>
    <div class="max-w-7xl mx-auto w-full grid grid-cols-9 px-2 mg-20">
   {/* 1 */}
   
    <div class="col-span-4 w-full h-full ">
    
        <div class="w-full h-full bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white rounded-md p-2 md:pl-4">
            <h1 class="text-white text-xl font-medium py-2">Developpeuse web</h1>
            <h5>Okayo - Mars 2023 à août 2023 </h5>
            <ul>
                <li><p class="text-gray-100 sm:text-sm text-xs">Analyser les retours de tests du client et en décliner les corrections.</p></li>
                <li><p class="text-gray-100 sm:text-sm text-xs">Architecture technique, conception et développement.</p></li>
                <li><p class="text-gray-100 sm:text-sm text-xs">Parametrage</p></li>
                <li><p class="text-gray-100 sm:text-sm text-xs">Technologies: Ruby, SQL, Java et XML</p></li>
            </ul>
       </div>
    </div>
    <div class="relative col-span-1 w-full h-full flex justify-center items-center">
        <div class="h-full w-1 bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white"></div>
        <div class="absolute w-6 h-6 rounded-full bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white z-10 text-white text-center">1</div>
    </div>
    <div class="col-span-4 w-full h-full"></div>


    {/* 2 */}
    <div class="col-span-4 w-full h-full"></div>
    <div class="relative col-span-1 w-full h-full flex justify-center items-center">
        <div class="h-full w-1 bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white"></div>
        <div class="absolute w-6 h-6 rounded-full bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white z-10 text-white text-center">2</div>
    </div>
    <div class="col-span-4 w-full h-full ">
        <div class="w-full h-full bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white rounded-md p-2 md:pl-4">
            <h1 class="text-white text-xl font-medium py-2">Developpeuse web</h1>
            <h6>0 Papier</h6>
            <h5>Aforp - 2022 à 2023</h5>
            <ul>
                <li><p class="text-gray-100 sm:text-sm text-xs">Projet PHP Laravel avec base de données PhpMyAdmin via MAMP.</p></li>
                <li><p class="text-gray-100 sm:text-sm text-xs">Numérisation de la documentation et remise des devoirs scolaires.</p></li>
            </ul>
         </div>
    </div>


   {/* 3 */}
   
    <div class="col-span-4 w-full h-full ">
    <div class="w-full h-full bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white rounded-md p-2 md:pl-4">
            <h1 class="text-white text-xl font-medium py-2">Developpeuse web</h1>
            <h6>E-commerce</h6>
            <h5>Etna - 2021 à 2022</h5>
            <ul>
                <li><p class="text-gray-100 sm:text-sm text-xs">Création d un site e-commerce en PHP avec Laravel.</p></li>
                <li><p class="text-gray-100 sm:text-sm text-xs">CRUD (Créer, Lire, Mettre à jour et Supprimer) MVC (Modèle, Vue, Contrôleur) sur Laravel 8.</p></li>
                <li><p class="text-gray-100 sm:text-sm text-xs">Création de modèle avec le logiciel FIGMA.</p></li>
                <li><p class="text-gray-100 sm:text-sm text-xs">Modélisation et conception de données avec MySql Workbench et MySql.</p></li>
                <li><p class="text-gray-100 sm:text-sm text-xs">Catalogue de produits, une gestion des achats, des stocks et des paniers.</p></li>
            </ul>
         </div>
    </div>
    <div class="relative col-span-1 w-full h-full flex justify-center items-center">
        <div class="h-full w-1 bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white"></div>
        <div class="absolute w-6 h-6 rounded-full bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white z-10 text-white text-center">3</div>
    </div>
    <div class="col-span-4 w-full h-full"></div>
    
    <br/><br/><br/><br/>
    <br/><br/><br/><br/>
</div>
</div>
  )
}

export default TimeLine