import React from 'react'
// import { useState } from "react";
// import CV from '../../public/Faye-Sarah-CV-WEB_DEV.pdf'
function NavBar() {
    // const [darkMode, setDarkMode] = useState(false);
  return (
    <div>
        <nav className="py-10 mb-12 flex justify-between dark:text-white">
            <h1 className="font-burtons text-xl">Sarah Faye</h1>
            <ul className="flex items-center">
              <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
                  // href={CV} download="Sarah_Faye_CV.pdf"
                >CV
                </a>
              </li>
            </ul>
          </nav>
    </div>
  )
}

export default NavBar