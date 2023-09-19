import HomeSectionVideo from '../components/HomeSectionVideo/HomeSectionVideo';
import ImageBackgroundSection from '../components/ImageBackgroundSection/ImageBackgroundSection';
import modelSImage from '../assets/model-s.jpg';
import modelXImage from '../assets/model-x.jpg';
import cybertruckImage from '../assets/cybertruck.jpg';

export default function HomePage() {
  return (
    <div className="container">
      <section className="section">
        <HomeSectionVideo />
      </section>
      <section className="section">
        <ImageBackgroundSection
          header="Model S"
          description="View inventory"
          backgroundImage={modelSImage}
        />
      </section>
      <section className="section">
        <ImageBackgroundSection
          header="Model X"
          description="View inventory"
          backgroundImage={modelXImage}
        />
      </section>
      <section className="section">
        <ImageBackgroundSection
          header="Cybertruck"
          description="View inventory"
          backgroundImage={cybertruckImage}
        />
      </section>
    </div>
  );
}
