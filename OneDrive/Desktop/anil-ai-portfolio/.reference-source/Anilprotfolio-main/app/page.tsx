"use client";

import Navbar from "@/components/Navbar";
import HeroPremium from "@/components/HeroPremium";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Timeline from "@/components/Timeline";
import Research from "@/components/Research";
import Blog from "@/components/Blog";
import Testimonials from "@/components/Testimonials";
import Achievements from "@/components/Achievements";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ChatAssistant from "@/components/ChatAssistant";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="space-y-28 pb-24">
        <HeroPremium />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Timeline />
        <Research />
        <Blog />
        <Testimonials />
        <Achievements />
        <Certifications />
        <Contact />
        <Footer />
      </div>
      <ChatAssistant />
    </>
  );
}
