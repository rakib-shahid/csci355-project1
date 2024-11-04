"use client";

import "./wildlife_styles.css";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Wildlife() {
  const [activeFaq, setActiveFaq] = useState(null);

  const handleFaqClick = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <div>
      <Navbar />
      <div className="wildlife-container">
        <div className="grid">
          <header className="text-6xl">FAQ</header>
          <aside>
            <div className="report-container">
              <form className="report-form">
                <h3 className="text-4xl font-extrabold">
                  Report Wildlife Sighting
                </h3>
                <p>Help us track and protect wildlife in your area!</p>

                <div className="form-group">
                  <label htmlFor="species">Species</label>
                  <input
                    type="text"
                    id="species"
                    placeholder="Animal Species"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="location">Location</label>
                  <input
                    type="text"
                    id="location"
                    placeholder="City, State or Area"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="date">Date Seen</label>
                  <input type="date" id="date" required />
                </div>

                <div className="form-group">
                  <label htmlFor="time">Time Seen</label>
                  <input type="time" id="time" required />
                </div>

                <div className="form-group">
                  <label htmlFor="count">Number of Animals</label>
                  <select id="count" required>
                    <option value="">Select number</option>
                    <option value="1">1</option>
                    <option value="2-5">2-5</option>
                    <option value="6-10">6-10</option>
                    <option value="10+">More than 10</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="description">Description</label>
                  <textarea
                    id="description"
                    placeholder="Describe the sighting (behavior, condition, etc.)"
                    rows="3"
                  ></textarea>
                </div>

                <div className="form-group">
                  <label htmlFor="contact">Your Email (optional)</label>
                  <input
                    type="email"
                    id="contact"
                    placeholder="For follow-up questions"
                  />
                </div>

                <button type="submit" className="submit-btn">
                  Submit Report
                </button>
              </form>
            </div>
          </aside>
          <article>
            <div className="center-content">
              <h1 className="text-4xl m-6">Wildlife Conservation FAQ</h1>
              <div className="faq-container">
                {[
                  "What is Wildlife Conservation?",
                  "Why is Wildlife Conservation Important?",
                  "How Can I Contribute to Wildlife Conservation?",
                  "What Are the Biggest Threats to Wildlife Today?",
                ].map((title, index) => (
                  <div
                    key={index}
                    className={`faq ${activeFaq === index ? "faq-active" : ""}`}
                    onClick={() => handleFaqClick(index)}
                  >
                    <h3 className="faq-title text-4xl font-bold">{title}</h3>
                    <p className="faq-text">
                      {index === 0 &&
                        "Wildlife conservation is the practice of protecting wild species and their habitats. It involves preserving, protecting, and restoring the natural environment to ensure the survival of wildlife species and their ecosystems. This includes efforts to prevent species extinction, maintain biodiversity, and protect natural resources that wildlife depends on."}
                      {index === 1 &&
                        "Wildlife conservation is crucial for several reasons: - Maintains biodiversity and ecosystem balance - Protects endangered species from extinction - Ensures food chain stability - Preserves natural resources for future generations - Contributes to medical research and discoveries - Supports economic activities like tourism - Helps combat climate change through habitat preservation"}
                      {index === 2 &&
                        "There are many ways to support wildlife conservation: - Reduce, reuse, and recycle to minimize environmental impact - Support conservation organizations through donations or volunteering - Make sustainable consumer choices - Avoid products made from endangered species - Educate others about wildlife conservation - Participate in local conservation initiatives - Use eco-friendly products"}
                      {index === 3 &&
                        "Wildlife faces numerous challenges in today's world: - Habitat loss and fragmentation due to human development - Climate change affecting ecosystems - Poaching and illegal wildlife trade - Pollution of air, water, and soil - Deforestation and agricultural expansion - Invasive species disrupting natural ecosystems - Ocean acidification and overfishing"}
                    </p>
                    {/* <button className="faq-toggle">
                      <i className="fas fa-chevron-down"></i>
                      <i className="fas fa-times"></i>
                    </button> */}
                  </div>
                ))}
              </div>
            </div>
          </article>
          <aside>
            <div className="newsletter-container">
              <form className="newsletter-form">
                <h3>Stay Updated</h3>
                <p>Join our newsletter for wildlife conservation updates!</p>

                <div className="form-group">
                  <input
                    type="text"
                    id="name"
                    placeholder="Your Name"
                    required
                  />
                </div>

                <div className="form-group">
                  <input
                    type="email"
                    id="email"
                    placeholder="Your Email"
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="checkbox-label">
                    <input type="checkbox" required />
                    <span>I agree to receive emails</span>
                  </label>
                </div>

                <button type="submit" className="subscribe-btn">
                  Subscribe
                </button>
              </form>
            </div>
          </aside>
        </div>
      </div>
      <Footer />
    </div>
  );
}
