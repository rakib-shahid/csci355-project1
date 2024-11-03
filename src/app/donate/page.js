"use client";
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./donate_styles.css";

export default function Donate() {
  useEffect(() => {
    const search = document.querySelector(".search");
    const btn = document.querySelector(".btn");
    const input = document.querySelector(".input");

    btn.addEventListener("click", () => {
      search.classList.toggle("active");
      input.focus();
    });

    const labels = document.querySelectorAll(".form-control label");
    labels.forEach((label) => {
      label.innerHTML = label.innerText
        .split("")
        .map(
          (letter, idx) =>
            `<span style="transition-delay:${idx * 50}ms">${letter}</span>`
        )
        .join("");
    });
  }, []);

  return (
    <div className="full-height-container">
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="main-container">
          <div className="donate-image">
            <img
              src="/assets/pexels-pixabay-86405.jpg"
              alt="background image"
            />
          </div>
          <div className="message">
            <h2 className="text-4xl font-extrabold text-white">Donate!</h2>
            <p className="text-2xl">
              Be a part of the change and help us make a difference{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-700 to-purple-900 font-extrabold">
                today.
              </span>
            </p>
          </div>

          <div className="donate-container flex flex-col justify-center">
            <h1 className="text-4xl font-extrabold text-black">
              Save the Planet!
            </h1>
            <form className="	">
              <div className="form-control">
                <input type="text" required />
                <label>Enter Amount!</label>
              </div>
              <table>
                <tbody>
                  <tr>
                    <td>
                      <button className="donate-btn">$10</button>
                    </td>
                    <td>
                      <button className="donate-btn">$25</button>
                    </td>
                    <td>
                      <button className="donate-btn">$50</button>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <button className="donate-btn">$100</button>
                    </td>
                    <td>
                      <button className="donate-btn">$250</button>
                    </td>
                    <td>
                      <button className="donate-btn">$500</button>
                    </td>
                  </tr>
                </tbody>
              </table>
              <button className="btn" id="donate-btn">
                Donate
              </button>
            </form>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
