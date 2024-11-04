"use client";
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./donate_styles.css";

export default function Donate() {
  useEffect(() => {
    const searchElement = document.querySelector(".search");
    const buttonElement = document.querySelector(".btn");
    const inputElement = document.querySelector(".form-control input");

    const handleButtonClick = () => {
      searchElement.classList.toggle("active");
      inputElement.focus();
    };

    buttonElement.addEventListener("click", handleButtonClick);

    const labelElements = document.querySelectorAll(".form-control label");
    const moneyButtons = document.querySelectorAll(".donate-btn");

    moneyButtons.forEach((button) => {
      button.addEventListener("click", (event) => {
        event.preventDefault();
        const amount = button.textContent.replace("$", "");
        inputElement.value = amount;
      });
    });

    const transformLabelText = (label) => {
      const originalText = label.innerText;
      const splitCharacters = originalText.split("");
      const wrappedCharacters = splitCharacters.map((char, idx) => {
        const displayChar = char === " " ? "&nbsp;" : char;
        return `<span style="transition-delay:${
          idx * 50
        }ms">${displayChar}</span>`;
      });
      return wrappedCharacters.join("");
    };

    labelElements.forEach((label) => {
      label.innerHTML = transformLabelText(label);
    });

    return () => {
      buttonElement.removeEventListener("click", handleButtonClick);
      moneyButtons.forEach((button) => {
        button.removeEventListener("click", () => {});
      });
    };
  }, []);

  return (
    <div className="full-height-container">
      <Navbar />
      <div className="flex flex-col min-h-screen">
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
      </div>
      <Footer />
    </div>
  );
}
