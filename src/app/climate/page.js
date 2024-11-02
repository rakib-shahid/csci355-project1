import "./climate_styles.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Climate() {
  return (
    <div className="climate-body">
      <Navbar />
      <header className="climate-header">
        <h1>Impact of Climate Change on Wildlife</h1>
      </header>
      <main>
        <section id="introduction">
          <h2>Introduction</h2>
          <p>
            Climate change significantly affects wildlife, leading to habitat
            loss, altered food sources, and increased vulnerability to diseases.
          </p>
        </section>
        <section id="effects">
          <h2>Effects on Wildlife</h2>
          <ul>
            <li>Habitat Destruction</li>
            <li>Migration Pattern Changes</li>
            <li>Altered Reproduction Cycles</li>
          </ul>
        </section>
        <section id="conservation">
          <h2>Conservation Efforts</h2>
          <p>
            Organizations worldwide are implementing strategies to mitigate the
            impact of climate change on wildlife.
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
}
