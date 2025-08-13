"use client"

import styles from "./styles.module.scss";
import Image from "next/image";

import loadingGif from "../../../public/loading.gif";

import { FiChevronRight } from "react-icons/fi";
import { FiGithub } from "react-icons/fi";

import { useState, useEffect } from "react";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import { useTranslation } from "@/context/TranslationContext";
import { LiaAngleLeftSolid } from "react-icons/lia";

interface ProjectProps{
    id: number;
    nome: string;
    descricao: string;
    tecnologias: string;
    capa: string;
    imagensDetalhes: {
        src: string;
        title: string
    }[];
    vercel: string;
    github: string;
}

export default function Projetos(){
    const [projetos, setProjetos] = useState<ProjectProps[]>([]);

    const [loading, setLoading] = useState(false);

    const [index, setIndex] = useState<number>(-1);
    const [slides, setSlides] = useState<{ src: string }[]>([]);

    const {t, lang} = useTranslation();

    useEffect(() => {
        async function carregarProjetos(){
            try{
                setLoading(true);
                const res = await fetch(`/api/projetos?lang=${lang}`);

                if(!res.ok){
                    throw new Error(`Erro na requisição: ${res.status}`);
                }

                const data = await res.json();
                setProjetos(data);
            }catch(err){
                console.log("Erro ao carregar projetos:", err);
                setLoading(false);
            }finally{
                setLoading(false);
            }
        };

        carregarProjetos();
    },[lang]);

    function abrirLightbox(imagens: { src: string }[], i: number) {
        setSlides(imagens);
        setIndex(i);
    }

    return (
        <div className={styles.container}>
            <h1>{t("projetos.title")}</h1>

            {loading && (
                <div className={styles.loading}>
                    <h2>{t("projetos.loading")}</h2>
                    <Image src={loadingGif} alt="Gif loading" height={70} width={70} />
                </div>
            )}

            <div className={styles.projetos}>
                {projetos.map((projeto) => (
                    <div className={styles.infos} key={projeto.id}>

                        <div className={styles.capaContainer} onClick={() => abrirLightbox(projeto.imagensDetalhes, 0)}>
                            <Image src={projeto.capa} alt="capa" height={280} width={520} className={styles.capa}/>
                            <div className={styles.overlay}>
                                <span>{t("projetos.clickToView")}</span>
                            </div>
                        </div>

                        <div className={styles.projeto}>
                            <p>{projeto.nome}</p>
                            <span className={styles.descricao}>{projeto.descricao}</span>
                            <span className={styles.tecnologias}>{projeto.tecnologias}</span>

                            <div className={styles.links}>
                                <a href={projeto.vercel} target="_blank" rel="noopener noreferrer">{t("projetos.viewDetails")} <FiChevronRight size={15} className={styles.icon}/></a>
                                <a href={projeto.github} target="_blank" rel="noopener noreferrer">{t("projetos.viewCode")} <FiGithub size={15} className={styles.icon}/></a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Lightbox */}
            <Lightbox
                open={index >= 0}
                index={index}
                close={() => setIndex(-1)}
                slides={slides}
            />

        </div>
    );
}