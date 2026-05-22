import Geo from '../../imagens/Geo+.png';
import PortifolioSH from '../../imagens/PortifolioSH.png';
import DudaGomes from '../../imagens/portifolioEduardaGomes.png';
import HoldLogo from '../../imagens/HoldLogo.png';
import './Portifolio.css';

const projetos = [
    {
        titulo: 'App HOLD',
        descricao: 'Aplicativo mobile para operacao de transportes pesados, com fluxo de servicos, historico de cargas, atualizacao de viagem, evidencias e notificacoes para motoristas.',
        stacks: 'Frontend: React Native, Expo Router, TypeScript, Axios | Backend: Node.js, Express, MySQL2, JWT, Multer, Google Vision, Gemini, Tesseract',
        imagem: HoldLogo,
        alt: 'Logo do App HOLD'
    },
    {
        titulo: 'Cartao Saude SISGEN',
        descricao: 'Sistema web de gestao do Cartao Saude com controle de acesso, painel administrativo, cadastro de titulares/dependentes, uploads e relatorios operacionais.',
        stacks: 'Frontend: React, Vite, React Router, Axios, React Toastify, jsPDF, XLSX | Backend: PHP, MySQL (mysqli), PDO (dblib/SQL Server), Smalot PDFParser',
        imagem: 'https://sisgen.fmrtecnologia.com.br:34593/cartaosaude/assets/logo_todos_saude-BF1sgVEu.png',
        alt: 'Logo Todos Saude',
        link: 'https://sisgen.fmrtecnologia.com.br:34593/cartaosaude/',
        linkTexto: 'sisgen.fmrtecnologia.com.br/cartaosaude'
    },
    {
        titulo: 'EVON Strategies',
        descricao: 'Plataforma web para gestao de trades com dashboard analitico, comparacao de estrategias, calendario de resultados e recursos para mentor-aluno.',
        stacks: 'React, Vite',
        imagem: 'https://evonstrategies.com/logo.png',
        alt: 'Logo EVON Strategies',
        link: 'https://evonstrategies.com/',
        linkTexto: 'evonstrategies.com'
    },
    {
        titulo: 'Pedra Menina',
        descricao: 'Site institucional da Mineracao Pedra Menina, com apresentacao da empresa, unidade operacional, informacoes ambientais, localizacao e area de contato.',
        stacks: 'React, Vite',
        imagem: 'https://pedramenina.com.br/assets/logo-navbar-C5V4FYDh.webp',
        alt: 'Logo Pedra Menina',
        link: 'https://pedramenina.com.br/',
        linkTexto: 'pedramenina.com.br'
    },
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
