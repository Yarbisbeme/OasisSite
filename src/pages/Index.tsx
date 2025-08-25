import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ScheduleSection from "@/components/ScheduleSection";
import SananosSection from "@/components/SananosSection";
import CongressSection from "@/components/CongressSection";
import MissionVisionSection from "@/components/MissionVisionSection";
import MissionsSection from "@/components/MissionsSection";
import MinistriesSection from "@/components/MinistriesSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  const openWhatsApp = () => {
    // Logic to open WhatsApp
    console.log("Opening WhatsApp...");
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <div id="hero">
        <HeroSection />
      </div>
      <div id="schedule">
        <ScheduleSection />
      </div>
      <div id="mission">
        <MissionVisionSection />
      </div>
      <div id="sananos">
        <SananosSection />
      </div>
      <div id="congress">
        <CongressSection />
      </div>
      <div id="missions">
        <MissionsSection />
      </div>
      <div id="ministries">
        <MinistriesSection />
      </div>
      <div>
        <Footer openWhatsApp={openWhatsApp} />
      </div>
    </div>
  );
};

export default Index;