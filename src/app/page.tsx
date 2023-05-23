'use client'; 

import './page.css'
import NavigationBar from '../components/home/NavigationBar/NavigationBar'
import BannerSection from '../components/home/BannerSection/BannerSection'
import { ParallaxProvider } from 'react-scroll-parallax';
import AboutSection from '@/components/home/AboutSection/AboutSection';
import SkillsSection from '@/components/home/SkillsSection/SkillsSection';

export default function Home() {
  return (
    <main className={"main"}>
      <ParallaxProvider>
      <NavigationBar/>
      <BannerSection/>
      <AboutSection/>
      <SkillsSection/>
      {/* <BannerSection/> */}
      </ParallaxProvider>
    </main>
  )
}
