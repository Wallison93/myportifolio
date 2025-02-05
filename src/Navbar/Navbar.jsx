
import './Navbar.css';
import Foto from '../imagens/image 42.png'
import { useState, useEffect } from "react";



export default function Navbar() {
    
    const [activeSection, setActiveSection] = useState("");

    useEffect(() => {
      const sections = document.querySelectorAll("section");
      
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(entry.target.id);
            }
          });
        },
        { threshold: 0.8 } 
      );
  
      sections.forEach((section) => observer.observe(section));
  
      return () => sections.forEach((section) => observer.unobserve(section));
    }, []);


return (
    <div className="corDaNavbar text-center col-md-2 ">
    <div className='container-fluid '>
        
    <img className="foto " src={Foto} alt="foto" />
      <ul className="list-unstyled marginUI ">
        <li className={`p-2  ${activeSection === "inicio" ? "active-link" : ""}`}>
          <a href="#inicio" className="text-decoration-none fontkanit">
            Início
          </a>
        </li>
        <li className={`p-2  ${activeSection === "sobremim" ? "active-link" : ""}`}>
          <a href="#sobremim" className="text-decoration-none fontkanit">
            Sobre mim
          </a>
        </li>
        <li className={`p-2  ${activeSection === "experiencia" ? "active-link" : ""}`}>
          <a href="#experiencia" className="text-decoration-none fontkanit">
            Experiências
        </a>
        </li>
        <li className={`p-2  ${activeSection === "portifolio" ? "active-link" : ""}`}>
          <a href="#portifolio" className="text-decoration-none fontkanit">
            Portfólio
          </a>
        </li>
        <li className={`p-2  ${activeSection === "skills" ? "active-link" : ""}`}>
          <a href="#skills" className="text-decoration-none fontkanit">
            Skill's
          </a>
        </li>
        <li className={`p-2  ${activeSection === "contato" ? "active-link" : ""}`}>
          <a href="#contato" className="text-decoration-none fontkanit">
            Contato
          </a>
        </li>
      </ul>
    </div>
  </div>
    );
}