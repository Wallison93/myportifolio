import { useEffect, useState } from "react";

export default function SobreMim() {

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
        <div className="divBody mt-5 container p-5"> 
            <br/>
            <h1 className="fontKanit titulos">
                Sobre Mim
            </h1>
             <br/>
            <h2 className={`mt-5 text-center ${activeSection === "sobremim" ? "effect-sub-titulo " : ""}`}>
                Olá! Sou Wallison, um full-stack developer.  
            </h2>
             <br/>
            <h4 className="mt-5 text-center">
                Iniciei minha trajetória na programação, como autodidata, e hoje curso análise e desenvolvimento de sistemas para aprimorar meus conhecimentos e adquirir outros novos. Sempre buscando crescer e aprender um pouco mais a cada dia.
            </h4>
          
            <h4 className="mt-5 mb-5 text-center">
                Tenho 31 anos de idade e atualmente resido em Ibirité no estado Minas Gerais.
            </h4>
             <br/>
             <hr/>



        </div>
    );
}