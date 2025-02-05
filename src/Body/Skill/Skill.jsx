import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiTypescript } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaNode } from "react-icons/fa";
import { SiVite } from "react-icons/si";
import { FaPhp } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import scriptcase from '../../imagens/scriptcasebranco.png'


export default function Skill() {




return (
<div className="divBody container-fluid p-3 ">  

    <h1 className="titulos fontKanit">
        Skill's
    </h1>

<div className=" d-flex flex-column flex-md-row justify-content-center col-5 mt-5 ">

    <div className="col-md-6  DivSkills"  >
        <div className="d-flex p-2">
            <FaReact className="iconesDasSkill"/>
            <h4 className="ms-2 mt-2">React</h4>
        </div>
        <div className="d-flex p-2">
            <IoLogoJavascript className="iconesDasSkill"/>
            <h4 className="ms-2 mt-2">Javascript</h4>
        </div>
        <div className="d-flex p-2">
            <FaHtml5 className="iconesDasSkill"/>
            <h4 className="ms-2 mt-2">HTML</h4>
        </div>
        <div className="d-flex p-2">
            <FaNode className="iconesDasSkill"/>
            <h4 className="ms-2 mt-2">NodeJS</h4>
        </div>
        <div className="d-flex p-2">
            <FaPhp className="iconesDasSkill"/>
            <h4 className="ms-2 mt-2">PHP</h4>
        </div>
        <div className="d-flex p-2">
            <FaGitAlt className="iconesDasSkill"/>
            <h4 className="ms-2 mt-2">Git</h4>
        </div>
        <div className="d-flex p-2">
            <SiMysql className="iconesDasSkill"/>
            <h4 className="ms-2 mt-3">MySQL</h4>
        </div>
    </div>

    <div className="col-md-6 DivSkills d-flex flex-column justify-content-center align-items-end">
        <div className="d-flex p-2">
            <h4 className="mt-2">React-native</h4>
            <FaReact className="ms-2 iconesDasSkill"/>
        </div>
        <div className="d-flex p-2">
            <h4 className="mt-2">Typescript</h4>
            <SiTypescript className="ms-2 iconesDasSkill"/>
        </div>
        <div className="d-flex p-2">
                <h4 className="mt-2">CSS</h4>
                <FaCss3Alt className="ms-2 iconesDasSkill"/>
            </div>
            <div className="d-flex p-2">
                <h4 className="mt-2">Vite</h4>
                <SiVite  className="ms-2 iconesDasSkill"/>
            </div>
            <div className="d-flex p-2">
                <h4 className="mt-2">Scriptcase</h4>
                <img className='iconesDasSkill  ms-2' src={scriptcase} alt='scriptcase'  />
            </div>
            <div className="d-flex p-2">
                <h4 className="mt-2">Github</h4>
                <FaGithub className="ms-2 iconesDasSkill"/>
            </div>       
            <div className="d-flex p-2">
                <h4 className="mt-2">Bootstrap</h4>
                <FaBootstrap className="ms-2 iconesDasSkill"/>
            </div>
       
    </div>
</div>
    <br/>
    <hr/>

</div>
);
}