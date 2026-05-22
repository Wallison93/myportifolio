import Geo from '../../imagens/Geo+.png';
import PortifolioSH from '../../imagens/PortifolioSH.png';
import DudaGomes from '../../imagens/portifolioEduardaGomes.png';
import './Portifolio.css';

const projetos = [
    {
        titulo: 'Geo+',
        descricao: 'Um completo software de aplicacao real desenvolvido sob medida para uma grande multinacional portuguesa.',
        stacks: 'React, JS, NodeJS, Bootstrap, MySQL, PHP, GoogleCharts',
        imagem: Geo,
        alt: 'Geo+'
    },
    {
        titulo: 'Portifolio SH',
        descricao: 'Portifolio da empresa SH Company Technology Ltda.',
        stacks: 'React, JS, Bootstrap, EmailJS',
        imagem: PortifolioSH,
        alt: 'Portifolio SH'
    },
    {
        titulo: 'Portifolio Eduarda Gomes',
        descricao: 'Site profissional, altamente responsivo, da modelo Eduarda Gomes.',
        stacks: 'React, CSS, pdf-lib, Vite',
        imagem: DudaGomes,
        alt: 'Portifolio Eduarda Gomes',
        link: 'https://dudagomes.com',
        linkTexto: 'dudagomes.com'
    }
];

export default function Portfolio() {
    return (
        <div className="portfolio-section container-fluid p-3 text-center divBody2">
            <h1 className="titulos fontKanit">Portifolio</h1>

            <p className="portfolio-subtitle mt-3 mx-auto">
                Projetos reais que unem desenvolvimento full-stack, performance e foco em experiencia do usuario.
            </p>

            <div className="portfolio-grid mt-5">
                {projetos.map((projeto) => (
                    <article className="portfolio-card" key={projeto.titulo}>
                        <div className="portfolio-image-wrapper">
                            <img className="portfolio-image" src={projeto.imagem} alt={projeto.alt} />
                        </div>

                        <div className="portfolio-content">
                            <h3 className="portfolio-title">{projeto.titulo}</h3>
                            <p className="portfolio-description">{projeto.descricao}</p>

                            {projeto.link && (
                                <a
                                    className="portfolio-link"
                                    href={projeto.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {projeto.linkTexto}
                                </a>
                            )}

                            <p className="portfolio-stack-label">Stacks</p>
                            <p className="portfolio-stack">{projeto.stacks}</p>
                        </div>
                    </article>
                ))}
            </div>

            <br />
            <hr />
        </div>
    );
}
