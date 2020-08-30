import React from "react";
import { AppTheme } from "../styles/themeColor";

export default function Footer() {
  return (
    <footer className="px-4 py-8" style={{color:AppTheme.mainDarkBlue}}>
      <div>
        {new Date().getFullYear()} -{" "}
        <a href="https://sujalgoel.ml" target="_blank" className="font-bold underline">
          Sujal Goel
        </a>&nbsp;||&nbsp;
        <a href="https://gatsbyjs.org" target="_blank" className="font-bold underline">
          Gatsby
        </a>&nbsp;||&nbsp;
        <a href="https://github.com/mathdroid/covid-19-api" target="_blank" className="font-bold underline">
          Mathdroid Covid API
        </a>
      </div>
    </footer>
  );
}