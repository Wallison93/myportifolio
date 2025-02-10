
import './inicio.css';

export default function Inicio() {

return (
    <div className="background-inicio text-center w-100 container-fluid">  
        <h1 className='fontanallop'  >
            Wallison Guedes,
        </h1>
        <h1 className='fontanallop' id="text">
            DESENVOLVEDOR FULL-STACK
        </h1>

        <button className='botaoContato mt-5' onClick={()=>window.scroll(0, document.body.scrollHeight)}>Entre em contato</button>
    </div>
);
}
