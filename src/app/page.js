// "use client";

// import "../styles/styles.css";
import Script from "next/script";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="header">
        <nav className="backdrop-blur-sm">
          <div className="site-logo">
            <a href="">
              <img src="assets/logo.png" alt="logo" />
            </a>
          </div>
          <ul>
            <li>
              <a href="#wildlife">Wildlife</a>
            </li>
            <li>
              <a href="/climate">Climate</a>
            </li>
            <li>
              <a href="#forests">Forests</a>
            </li>
            <li>
              <a href="#oceans">Oceans</a>
            </li>
            <li>
              <a href="#about">About Us</a>
            </li>
          </ul>
          <div className="search">
            <input type="text" className="input" placeholder="Search..." />
            <button className="btn">
              <img src="assets/search-alt-1-svgrepo-com.svg" alt="search" />
            </button>
          </div>
        </nav>

        <section className="mainImg"></section>
        <div class="hero-div">Environmental Awareness</div>
      </div>

      <div className="card-container flex-1">
        <h2>Sample</h2>
        <div className="content-grid">
          <div className="content" id="example1">
            <img src="assets/pexels-pixabay-46540.jpg" alt="hippo" />
            <h3
              className="text-4xl font-extrabold"
              style={{ paddingTop: "1rem", paddingBottom: "1rem" }}
            >
              Example 1
            </h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              euismod odio a nisl condimentum fringilla. Pellentesque at magna
              ut elit molestie tristique. Sed dapibus pretium risus sit amet
              tempor. Morbi a facilisis turpis. Duis dolor ante, euismod ut
              lectus sed, cursus facilisis nisl. Curabitur sagittis enim in eros
              imperdiet ornare. Vivamus efficitur ex enim, quis finibus purus
              faucibus in. Nulla aliquam vehicula metus, congue mattis odio
              hendrerit condimentum. Quisque venenatis est sed nulla tincidunt
              scelerisque. Praesent scelerisque, felis et vulputate tincidunt,
              ligula odio semper enim, sit amet consequat ex odio id nibh.
              Aenean vestibulum sagittis nisi.
            </p>
          </div>
          <div className="content" id="example2">
            <img src="assets/pexels-belle-co-99483-847393.jpg" alt="turtle" />
            <h3
              className="text-4xl font-extrabold"
              style={{ paddingTop: "1rem", paddingBottom: "1rem" }}
            >
              Example 2
            </h3>
            <p>
              Lorem ipsum dolor sit amet crecusandaeonsectetur adipisicing elit.
              Perferendis id deleniti aperiam velit voluptas
            </p>
            <br />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              euismod odio a nisl condimentum fringilla. Pellentesque at magna
              ut elit molestie tristique. Sed dapibus pretium risus sit amet
              tempor. Morbi a facilisis turpis. Duis dolor ante, euismod ut
              lectus sed, cursus facilisis nisl. Curabitur sagittis enim in eros
              imperdiet ornare. Vivamus efficitur ex enim, quis finibus purus
              faucibus in.
            </p>
          </div>
          <div className="content" id="example3">
            <img src="assets/pexels-aulsh99-2860705.jpg" alt="ocean" />
            <h3
              className="text-4xl font-extrabold"
              style={{ paddingTop: "1rem", paddingBottom: "1rem" }}
            >
              Example 3
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis id deleniti aperiam velit voluptas recusandae
            </p>
            <br />

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              euismod odio a nisl condimentum fringilla. Pellentesque at magna
              ut elit molestie tristique. Sed dapibus pretium risus sit amet
              tempor. Morbi a facilisis turpis. Duis dolor ante, euismod ut
              lectus sed, cursus facilisis nisl. Curabitur sagittis enim in eros
              imperdiet ornare. Vivamus efficitur ex enim, quis finibus purus
              faucibus in.
            </p>
          </div>
        </div>
      </div>

      <div className="footer">
        <p>&copy; 2024 Sample. All Rights Reserved.</p>
      </div>
      <Script src="script.js" strategy="afterInteractive"></Script>
    </div>
  );
}
