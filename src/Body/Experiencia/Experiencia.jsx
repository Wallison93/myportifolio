import LogoSH from '../../imagens/SHVetor.png';
import LogoUHLelo from '../../imagens/logo_suporte_uhlelo.png';




export default function Experiencia() {

return (
<div className="divBody container-fluid p-3"> 
    <h1 className="titulos fontKanit">
        Experiências
    </h1>

    <div className='bordaExperiencia p-2 mt-5 '>
        <div className='d-flex text-center container flex-column flex-md-row justify-content-center '>
            <div className='col-md-3 mt-5'>
                <img className='logo logouhlelo' src={LogoUHLelo} alt='uHLelo'  />
            </div>
            <div className='col-md-8 mt-4 container'>
                <h3 className='text-center'>
                    uHLelo Tecnologia (Autônomo)
                </h3>
                <h5 className='mt-3 text-center'>Desenvolvedor de Software Full Stack | jan/2025 - atual</h5>

                <ul className='mt-4 text-start'>
                    <li>Desenvolvimento e manutenção de soluções web e mobile com React, React Native, Node.js e PHP.</li>
                    <li>Criação e evolução de APIs REST para integração entre app mobile, painel web e serviços externos.</li>
                    <li>Implementação de segurança com JWT, bcrypt e controle de sessão por dispositivo.</li>
                    <li>Entrega de fluxos com upload/processamento de arquivos e automações com OCR/IA.</li>
                </ul>
            </div>
        </div>
        <h5 className='mt-5 text-center'>
            Stacks: React, React Native, Node.js, Express, TypeScript, PHP, MySQL, JWT, bcrypt.
        </h5>
    </div>

    <div className='bordaExperiencia p-2 mt-5 '>
        <div className='d-flex text-center container flex-column flex-md-row '>
            <div className='col-md-3 mt-5'>
                <img className='logo' src={LogoSH} alt='SH'  />
            </div>
            <div className='col-md-8 text-center mt-4 container'>
                <h3>
                    SH Company Technology S.A.
                </h3>
                <h5 className='mt-3'>Desenvolvedor Full Stack | 2022 - atual</h5>

                <ul className='mt-4 text-start'>
                    <li>Desenvolvimento e manutenção do sistema Geo+ para gestão empresarial.</li>
                    <li>Atuação em projetos web e mobile com foco em estabilidade, usabilidade e performance.</li>
                    <li>Integração e sustentação de APIs RESTful para fluxo confiável e consistente de dados.</li>
                    <li>Colaboração contínua com áreas técnicas e de negócio para evolução do produto.</li>
                </ul>
            </div>
        </div>
        <h5 className='mt-5 text-center'>
            Stacks: React, React Native, JavaScript, TypeScript, PHP, MySQL, Node.js, APIs REST, Figma.
        </h5>
    </div>

    <h5 className='mt-5 text-center container'>
        Objetivo: atuar em oportunidades de Front-end, Back-end ou Full Stack, entregando soluções com foco em performance, qualidade de código e resultado de negócio.
    </h5>

    <br/>
    <hr/>
</div>
);
}