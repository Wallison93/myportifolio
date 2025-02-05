import { useEffect, useState } from "react";
import { RiWhatsappFill } from "react-icons/ri";
import { BsInstagram } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { SiGmail } from "react-icons/si";
import { FaGithub } from "react-icons/fa";




export default function Contato() {
    const irParaWhatsapp = () => {
        window.open(
          "https://api.whatsapp.com/send?phone=5531989212039&text=Ol%C3%A1%2C%20gostaria%20de%20fazer%20um%20or%C3%A7amento!", "_blank"
        );
      };

      function IrParaOInstagram(){
        window.open('https://www.instagram.com/wallison_guedes/', '_blank');
    }

    function IrParaOLinkedin(){
        window.open('https://www.linkedin.com/in/wallison-guedes-a78a32138/', '_blank');
    }

    function IrParaOGithub(){
        window.open('https://github.com/Wallison93', '_blank');
    }
  


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
<div className="divBody container-fluid p-3 ">  

    <h1 className="titulos fontKanit">
        Contato
    </h1>

    <div className="d-flex align-items-center p-5">
        <SiGmail className="iconeRedes"/>
        <h4 className="ms-3">wallisonguedes93@gmail.com</h4>
    </div>

    <div className='container-fluid background-imageContato'>
       
       <h2 className={`text-center fontKanit  titulos  ${activeSection === "contato" ? "effect-sub-titulo " : ""}`}> 
            Siga-me nas redes-sociais
       </h2>

        <div className='d-flex text-center mt-4 container justify-content-center'>   
            <button onClick={()=>IrParaOInstagram()} className='buttonRedesSociais'> 
                    <BsInstagram className="  "/>
            </button>   
            <button onClick={()=>IrParaOLinkedin()} className='buttonRedesSociais'> 
                    <BsLinkedin className=" "/>
            </button>   
            <button onClick={()=>IrParaOGithub()} className='buttonRedesSociais'> 
                    <FaGithub className=" "/>
            </button>                     
        </div>
       <br/> 
   </div>

<br/><br/>
   <a className="contato-a">Copyright © 2025 à <strong>Wallison Guedes</strong>. Todos os direitos reservados.</a>
   <br/>
    <button onClick={()=>irParaWhatsapp()} className='botaoWpp'> 
        <RiWhatsappFill  className="iconesWhatsapp"/>
    </button>   


</div>
);
}