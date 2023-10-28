import Head from "next/head";
import NavBar from "./NavBar/NavBar";
import HomePage from "./Home/Home";
import TimeLine from "./TimeLine/TimeLine";
import Skills from "./Skills/Skills";
import Education from "./Education/Education";
export default function Home() {
 

  return (
    // className={darkMode ? "dark" : ""}
    <div >
      <Head>
        <title>Sarah Faye Portofolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/FAYESs.ico" />
      </Head>
      <main className=" bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40">
        <section className="min-h-screen max-w-[960px] mx-auto">
          <NavBar />
          <HomePage />
        </section>
        <section>
          <TimeLine />
        </section>
        <section>
          <Skills />
        </section>
        <section>
          <Education />
        </section>

      </main>
    </div>
  );
}
