import Hero from "@/sections/hero/hero";
import ReadyToShare from "@/sections/ReadyToShare/ReadyToShare";
import StatsSection from "@/sections/StatsSection/StatsSection";
import WhyChoose from "@/sections/WhyChoose/WhyChoose";


export default function Home() {
  return (
    <div>
     <Hero></Hero>
     <StatsSection></StatsSection>
     <WhyChoose></WhyChoose>
     <ReadyToShare></ReadyToShare>
    </div>
  );
}
