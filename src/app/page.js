import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col mainContainer">
      <div className="header">
        <Navbar />

        <section className="mainImg"></section>
        <div className="hero-div">Environmental Awareness</div>
      </div>
      <div className="card-container flex-1">
        <h2>Protecting Our Planet</h2>
        <div className="content-grid">
          <div className="content" id="example1">
            <img src="assets/pexels-pixabay-46540.jpg" alt="hippo" />
            <h3 className="text-4xl m-10">Wildlife Conservation</h3>
            <p>
              Our planet&apos;s biodiversity is essential for maintaining
              balanced ecosystems. From majestic hippos to the tiniest insects,
              every creature plays a vital role in our world. However,
              deforestation, habitat loss, and poaching have pushed countless
              species toward extinction. It&apos;s time to take action, not only
              to preserve these incredible animals but also to protect the
              future of our environment.
            </p>
          </div>
          <div className="content" id="example2">
            <img src="assets/pexels-belle-co-99483-847393.jpg" alt="turtle" />
            <h3 className="text-4xl m-10">Preserving Our Oceans</h3>
            <p>
              The oceans cover over 70% of our planet and are home to a variety
              of marine life. However, pollution, overfishing, and climate
              change are destroying these fragile ecosystems. Marine creatures
              such as sea turtles face threats from plastic waste, which can
              cause injury or death when eaten.
            </p>
          </div>
          <div className="content" id="example3">
            <img src="assets/pexels-aulsh99-2860705.jpg" alt="ocean" />
            <h3 className="text-4xl m-10">Addressing Climate Change</h3>
            <p>
              Addressing climate change requires immediate action. This involves
              transitioning to renewable energy sources, rethinking waste
              management, and advocating for green policies. By educating
              ourselves and others, we can build momentum for meaningful change
              that protects both our environment and future generations.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
