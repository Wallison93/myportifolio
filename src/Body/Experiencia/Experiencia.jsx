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
                    Desenvolvedor Full-Stack
                </h3>
                <h5 className='mt-5 '>
                    Ingressei na <strong>uHLelo Tecnologia</strong> em janeiro de 2025, onde estou tendo a oportunidade de me envolver mais com o back-end, tendo como foco o Scriptcase frameWork de PHP, mas também usando o React em pontualidades. Desenvolvemos sistemas, API's e integradores. Além de estar incluido em projetos mobile utilizando React-Native.
                </h5>
            </div>
        </div>
        <h5 className='mt-5 text-center'>
            Stacks:  PHP, Scriptcase, React, React Native, Javascript, MySQL, MariaDB, NodeJS.
        </h5>
    </div>

    <div className='bordaExperiencia p-2 mt-5 '>
        <div className='d-flex text-center container flex-column flex-md-row '>
            <div className='col-md-3 mt-5'>
                <img className='logo' src={LogoSH} alt='SH'  />
            </div>
            <div className='col-md-8 text-center mt-4 container'>
                <h3>
                    Desenvolvedor Full-Stack
                </h3>
                <h5 className='mt-5'>
                    Desde Fevereiro de 2022 faço parte da <strong>SH Company Technology</strong>, onde tive a oportunidade de iniciar minha trajetória e colocar em prática meus aprendizados.
                </h5>
            </div>
        </div>
        <h5 className='mt-5 text-center'>
            Stacks:  React, React Native, Javascript, Typescript, PHP, VB.Net, MySQL, NodeJS, Figma.
        </h5>
    </div>

    <br/>
    <hr/>
</div>
);
}