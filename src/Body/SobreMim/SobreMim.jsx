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
          Wallison Guedes dos Santos | Desenvolvedor Full Stack
            </h2>

        <h4 className="mt-5 text-center">
          Atuo com desenvolvimento web e mobile, com experiencia pratica em React, React Native, Node.js, Express, TypeScript e MySQL, participando de entregas ponta a ponta em produtos SaaS, APIs REST e integracoes entre sistemas.
        </h4>

        <h4 className="mt-4 text-center">
          Tambem tenho vivencia com autenticacao segura (JWT e bcrypt), rotas protegidas, upload e processamento de arquivos e automacoes com OCR/IA.
        </h4>

        <h4 className="mt-4 text-center">
          Nos ultimos anos, venho contribuindo para evolucao de sistemas com foco em estabilidade, performance e qualidade de entrega, sempre mantendo colaboracao proxima com areas tecnicas e de negocio.
        </h4>

        <h4 className="mt-4 text-center">
          Tenho perfil analitico, senso de responsabilidade e aprendizado continuo, buscando gerar valor real para o produto e para os usuarios.
        </h4>

        <div className="d-flex flex-wrap justify-content-center gap-2 mt-5">
          <span className="bordaExperiencia px-3 py-2">Front-end</span>
          <span className="bordaExperiencia px-3 py-2">Back-end</span>
          <span className="bordaExperiencia px-3 py-2">Full Stack</span>
          <span className="bordaExperiencia px-3 py-2">React e React Native</span>
          <span className="bordaExperiencia px-3 py-2">Node.js e Express</span>
          <span className="bordaExperiencia px-3 py-2">MySQL e APIs REST</span>
        </div>

        <h5 className="mt-5 mb-2 text-center">
          Ficarei muito satisfeito em conversar sobre como posso contribuir com os desafios da sua equipe.
        </h5>
        <h5 className="mb-5 text-center">
          Ibirite/MG | (31) 98921-2039 | wallisonguedes93@gmail.com
        </h5>
             <br/>
             <hr/>



        </div>
    );
}