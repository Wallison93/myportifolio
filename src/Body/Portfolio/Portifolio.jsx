import ShLAb from '../../imagens/ShLab.png';
import Geo from '../../imagens/Geo+.png';
import PortifolioSH from '../../imagens/PortifolioSH.png';
import ShTransport from '../../imagens/ShTransport.png';
import DudaGomes from '../../imagens/portifolioEduardaGomes.png';


export default function Portfolio() {

    return (
        <div className=" p-3 text-center divBody2  ">

            <h1 className="titulos fontKanit">
                Portifólio
            </h1>

            <div className='d-flex flex-column flex-md-row justify-content-evenly container-fluid mt-5 '>
                <div class="card mt-4">
                    <img className='w-100 h-100' src={ShLAb} alt='ShLAb' />
                    <div class="card__content p-3">
                        <p class="card__title ">
                            SH Lab
                        </p>
                        <p class="card__description mt-5">
                            Um completo software para laboratórios de sondagens e estudos de solos.
                        </p>
                        <p class="card__footer mt-4">
                            Stacks: React, Js, NodeJS, Bootstrap, MySQL, PHP.
                        </p>
                    </div>
                </div>
                <div class="card mt-4">
                    <img className='w-100 h-100' src={Geo} alt='Geo' />
                    <div class="card__content p-3">
                        <p class="card__title ">
                            Geo+
                        </p>
                        <p class="card__description mt-4">
                            Um completo software de aplicação real desenvolvido sob medida para uma grande multinacional portuguesa.
                        </p>
                        <p class="card__footer mt-4">
                            Stacks: React, Js, NodeJS, Bootstrap, MySQL, PHP, GoogleCharts.
                        </p>
                    </div>
                </div>
            </div>



            <div className='d-flex flex-column flex-md-row justify-content-evenly container-fluid mt-4'>
                <div class="card mt-4">
                    <img className='w-100 h-100' src={PortifolioSH} alt='PortifolioSH' />
                    <div class="card__content p-3">
                        <p class="card__title ">
                            Portifólio SH
                        </p>
                        <p class="card__description mt-5">
                            Portifólio da empresa SH Company Technology Ltda.
                        </p>
                        <p class="card__footer mt-4">
                            Stacks: React, Js, Bootstrap, EmailJS.
                        </p>
                    </div>
                </div>
                <div class="card mt-4">
                    <img className='w-100 h-100' src={ShTransport} alt='ShTransport' />
                    <div class="card__content p-3">
                        <p class="card__title ">
                            SH Transport
                        </p>
                        <p class="card__description mt-4">
                            Software para controle de frotas, acompanhamento de carga/descarga e toda documentação para transportadoras.
                        </p>
                        <p class="card__footer mt-4">
                            Stacks: React, Ts, NodeJS, Bootstrap, MySQL, Vite.
                        </p>
                    </div>
                </div>
            </div>

            <div className='d-flex flex-column flex-md-row justify-content-evenly container-fluid mt-4'>
                <div class="card mt-4">
                    <img className='w-100 h-100' src={DudaGomes} alt='ShTransport' />
                    <div class="card__content p-3">
                        <p class="card__title ">
                            Portifólio
                        </p>
                        <p class="card__description mt-4">
                            Site profissional, altamente responsivo, da modelo Eduarda Gomes.
                        </p>
                        <a class="card__footer-site  mt-4" href="https://dudagomes.com" target="_blank" rel="noopener noreferrer">
                           dudagomes.com
                        </a>
                        <p class="card__footer mt-4">
                            Stacks: React, CSS, pdf-lib, Vite.
                        </p>
                    </div>
                </div>
            </div>

            <br />
            <hr />
        </div>
    );
}