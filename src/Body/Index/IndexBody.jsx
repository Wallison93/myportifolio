
import Contato from "../Contato/Contato";
import Experiencia from "../Experiencia/Experiencia";
import Inicio from "../Inicio/Inicio";
import Portfolio from "../Portfolio/Portifolio";
import Skill from "../Skill/Skill";
import SobreMim from "../SobreMim/SobreMim";




export default function IndexBody() {

return (
    <div className="w-100 d-flex flex-column">
        <section id="inicio">
          <Inicio />
        </section>
        <section id="sobremim">
          <SobreMim />
        </section>
        <section id="experiencia">
          <Experiencia />
        </section>
        <section id="portifolio">
          <Portfolio />
        </section>
        <section id="skills">
          <Skill />
        </section>
        <section id="contato">
          <Contato />
        </section>
    </div>
);
}
