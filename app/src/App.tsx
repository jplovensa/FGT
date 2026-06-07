import Navbar from './sections/Navbar';
import HeroB2B from './sections/HeroB2B';
import TheMuscle from './sections/TheMuscle';
import Philosophy from './sections/Philosophy';
import ROIMetrics from './sections/ROIMetrics';
import CoreTechnology from './sections/CoreTechnology';
import Products from './sections/Products';
import MassScaleSolutions from './sections/MassScaleSolutions';
import DeliveryPipeline from './sections/DeliveryPipeline';
import ProjectGrid from './sections/ProjectGrid';
import LeadGenFooter from './sections/LeadGenFooter';

function App() {
  return (
    <div className="min-h-screen bg-neutral-950">
      <Navbar />
      <HeroB2B />
      <TheMuscle />
      <Philosophy />
      <ROIMetrics />
      <CoreTechnology />
      <Products />
      <MassScaleSolutions />
      <DeliveryPipeline />
      <ProjectGrid />
      <LeadGenFooter />
    </div>
  );
}

export default App;
