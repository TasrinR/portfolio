import Head from "next/head";
import Image from "next/image";
// import "../styles/Home.scss";
import MainNav from "../Components/MainNav/MainNav";
import HeroSection from "../Components/HeroSection/HeroSection";
import PortfolioSection from "../Components/PortfolioSection/PortfolioSection";
import CVSection from "../Components/AboutSection/CVSection";
import BlogSection from "../Components/BlogSection/BlogSection";
import LastSection from "../Components/LastSection/LastSection";
import SocialBar from "../Components/SocialBar/SocialBar";

export default function Home() {
  return (
    <>
      <Head>
        <title>Kanij Tasrin's Portfolio</title>
        <meta name="description" content="Web Developer Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={"main"}>
        <MainNav />
        <div className="wrapper">
          <div className="heroImg">
            <div></div>
          </div>
          <div className="mainContent">
            <HeroSection />
            <PortfolioSection />
            <CVSection />
            <BlogSection />
            <LastSection />
          </div>
          <div className="socialSideBar">
            <SocialBar />
          </div>
        </div>
      </main>
    </>
  );
}
