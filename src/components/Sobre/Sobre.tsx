import styles from "./styles.module.scss";
import Image from "next/image";

// import bootstrap from "../../../public/bootstrap.png";
// import c from "../../../public/c++.png";
// import css from "../../../public/css.png";
// import git from "../../../public/git.png";
// import github from "../../../public/github.png";
// import html from "../../../public/html.png";
// import java from "../../../public/java.png";
// import nextjs from "../../../public/nextjs.png";
// import nodejs from "../../../public/node js.png";
// import python from "../../../public/python.png";
// import r from "../../../public/r.png";
// import react from "../../../public/react.png";
// import sass from "../../../public/sass.png";
// import tailwind from "../../../public/tailwind.png";
// import typescript from "../../../public/typescript.png";

import fundo1 from "../../../public/1.png";

import { useTranslation } from "@/context/TranslationContext";

export default function Sobre(){
    const {t} = useTranslation();

    return (
        <div className={styles.container}>
            <Image src={fundo1} alt="Image Code" quality={100} className={styles.img}/>

            <div className={styles.infos}>
                <h1>{t("sobre.title")}</h1>

                <p>{t("sobre.description1")}</p>
                <br/>
                <p>{t("sobre.description2")}</p>
            </div>

            <div className={styles.tecnologiasContainer}>
                <h1>{t("sobre.techTitle")}</h1>
                <div className={styles.tecnologias}>
                    <span>HTML</span>
                    <span>CSS</span>
                    <span>JavaScript</span>
                    <span>Next.js</span>
                    <span>NodeJS</span>
                    <span>ReactJS</span>
                    <span>TypeScript</span>
                    <span>Sass</span>
                    <span>Tailwind</span>
                    <span>Bootstrap</span>
                    <span>Git</span>
                    <span>GitHub</span>
                    <span>Python</span>
                    <span>C++</span>
                    <span>R</span>
                </div>
            </div>

            {/* <div className={styles.carouselWrapper}>
                <div className={styles.carouselTrack}>
                    {[...Array(2)].map((_, i) => (
                        <div key={i} className={styles.images}>
                            <Image src={html} alt="Logo html" height={50} width={50}/>
                            <Image src={css} alt="Logo css" height={50} width={50}/>
                            <Image src={java} alt="Logo java" height={50} width={50}/>
                            <Image src={nextjs} alt="Logo nextjs" height={50} width={50}/>
                            <Image src={nodejs} alt="Logo nodejs" height={50} width={50}/>
                            <Image src={react} alt="Logo react" height={50} width={50}/>
                            <Image src={typescript} alt="Logo typescript" height={50} width={50}/>
                            <Image src={sass} alt="Logo sass" height={50} width={50}/>
                            <Image src={tailwind} alt="Logo tailwind" height={50} width={50}/>
                            <Image src={bootstrap} alt="Logo bootstrap" height={50} width={50}/>
                            <Image src={git} alt="Logo git" height={50} width={50}/>
                            <Image src={github} alt="Logo github" height={50} width={50}/>
                            <Image src={python} alt="Logo python" height={50} width={50}/>
                            <Image src={r} alt="Logo r" height={50} width={50}/>
                            <Image src={c} alt="Logo c" height={50} width={50} className={styles.imgC}/>
                        </div>
                    ))}
                </div>
            </div> */}
        </div>
    );
}