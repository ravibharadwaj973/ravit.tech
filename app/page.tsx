"use client"
import Experiences from "./_components/Exerpences";
import Navbar from "./_components/Navbar";

import WhyHireMe from "./_components/whyme";
import Hero from "./_components/hero";
import Sayhello from "./_components/sayhello";
import Footer from "./_components/footer";




export default function Home() {

  return (
    <main className="min-h-screen relative">
      <Navbar/>
        <Hero/>
      <Experiences/>
      <WhyHireMe/>
      <Sayhello/>
      <Footer/>
    </main>
  )
}
