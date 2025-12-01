import Hero from "@/home/hero/hero";
import ReadyToShare from "@/home/ReadyToShare/ReadyToShare";
import StatsSection from "@/home/StatsSection/StatsSection";
import WhyChoose from "@/home/WhyChoose/WhyChoose";


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
