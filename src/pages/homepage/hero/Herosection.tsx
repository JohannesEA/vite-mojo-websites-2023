import React, { useState, useEffect } from "react";
import "./HeroSection.css";
import StandardButton from "../../../components/buttons/button/StandardButton";

const HeroSection = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <section className="hero">
      <div className="hero__container">
        <h1 className="hero__title">MOJO Nettsider</h1>
        <p className="hero__subtitle">
          Utvikler apper og nettsteder med ekspertise
        </p>
        <div className="hero__buttons">
          <StandardButton
            text="Lær Mer"
            onClick={() => console.log("Lær Mer clicked")}
          />
          <StandardButton
            text="Kom i Gang"
            onClick={() => console.log("Kom i Gang clicked")}
          />
          <StandardButton
            text={theme === "light" ? "Mørk Modus" : "Lys Modus"}
            onClick={toggleTheme}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
