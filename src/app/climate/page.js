"use client";

import { useState, useEffect } from "react";
import "./climate_styles.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Climate() {
  const [showFacts, setShowFacts] = useState(false);

  const toggleFacts = () => {
    setShowFacts((prevShowFacts) => !prevShowFacts);
  };

  useEffect(() => {
    const updateProgressBar = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrollPercentage = (scrollTop / scrollHeight) * 100;

      document.getElementById(
        "progress-bar"
      ).style.height = `${scrollPercentage}%`;
    };

    window.addEventListener("scroll", updateProgressBar);

    return () => {
      window.removeEventListener("scroll", updateProgressBar);
    };
  }, []);

  useEffect(() => {
    const images = document.querySelectorAll(".sliding-image");

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("slide-in");
          entry.target.classList.remove("slide-out");
        } else {
          if (entry.boundingClientRect.top > 0) {
            entry.target.classList.remove("slide-in");
            entry.target.classList.add("slide-out");
          }
        }
      });
    });

    images.forEach((img) => {
      observer.observe(img);
    });

    return () => {
      images.forEach((img) => {
        observer.unobserve(img);
      });
    };
  }, []);

  return (
    <div className="climate-body flex flex-col mainContainer">
      <Navbar />
      <div className="climate-container">
        <div id="progress-bar-container">
          <div id="progress-bar"></div>
        </div>

        <div className="title">
          <div className="title-image"></div>
          <h1 className="hover-title font-extrabold">Climate Change Impact</h1>
        </div>

        <div className="global-warming-section">
          <h2>Understanding Global Warming Trends</h2>
          <p>
            These two images illustrate the progression of global warming
            impacts over time, as predicted by the IPCC (Intergovernmental Panel
            on Climate Change) reports.
          </p>
          <div className="timeline-images">
            <div className="image-description">
              <img
                className="timeline-image sliding-image"
                src="https://files.worldwildlife.org/wwfcmsprod/images/IPCC_report_timeline_before_2020/original/z1mobdp00_WWF_IPCC_Timeline_for_web_before_2020.png"
                alt="IPCC Timeline Before 2020"
              />
              <p>
                <strong>Before 2020:</strong> This timeline showcases the
                initial impacts of global warming, focusing on the period up to
                2020. It highlights a gradual increase in global temperatures,
                affecting ecosystems such as forests, coral reefs, and various
                animal species. Key points include:
              </p>
              <ul>
                <li>Rising temperatures leading to habitat changes.</li>
                <li>
                  Early signs of coral bleaching and species adaptation
                  challenges.
                </li>
                <li>Moderate climate changes affecting biodiversity.</li>
              </ul>
            </div>
            <div className="image-description">
              <img
                className="timeline-image sliding-image"
                src="https://files.worldwildlife.org/wwfcmsprod/images/IPCC_report_graphic_after_2020/original/92cr3sl6fv_IPCC_timeline_2020_on_1_.png"
                alt="IPCC Timeline After 2020"
              />
              <p>
                <strong>After 2020:</strong> This image provides projections for
                the period after 2020, highlighting the increasingly severe
                effects of climate change. It underscores critical warming
                thresholds and their cascading effects on global biodiversity.
                Key points include:
              </p>
              <ul>
                <li>
                  Significant warming after 2020, leading to extreme heatwaves.
                </li>
                <li>
                  Accelerated coral reef degradation and species extinction
                  risks.
                </li>
                <li>
                  High-impact events like droughts, floods, and wildfires
                  becoming more common.
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="interactive-section">
          <button onClick={toggleFacts}>
            {showFacts ? "Hide Facts" : "Click to Reveal Facts"}
          </button>
          <div className={`facts-section ${showFacts ? "expanded" : ""}`}>
            <h3>Climate Change Facts</h3>
            <ul>
              <li>Climate change affects more than 60% of all species.</li>
              <li>
                Rising temperatures are melting polar ice caps, affecting polar
                bears, seals, and other arctic animals.
              </li>
              <li>
                Coral reefs are dying due to ocean warming, impacting marine
                biodiversity.
              </li>
              <li>
                Forest fires, intensified by climate change, destroy habitats
                for countless species.
              </li>
            </ul>
            <button onClick={toggleFacts}>Close</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
