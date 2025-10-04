"use client"

import Image from "next/image";

import loadingGif from "../../../public/loading.gif";

import { FiChevronRight } from "react-icons/fi";
import { FiGithub } from "react-icons/fi";

import { useState, useEffect } from "react";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import { useTranslation } from "@/context/TranslationContext";
import { Button } from "../ui/button";
import Link from "next/link";

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
        <div className="w-full flex flex-col items-center justify-center gap-8 md:gap-11">
            <h1 className="font-bold text-3xl mt-8 md:mt-0 md:text-4xl text-[var(--textoPrincipal)]">{t("projetos.title")}</h1>

            {loading && (
                <div className="flex flex-col items-center justify-center gap-3 mt-4">
                    <h2 className="text-[var(--textoSecundario)]">{t("projetos.loading")}</h2>
                    <Image src={loadingGif} alt="Gif loading" height={70} width={70} />
                </div>
            )}

            <div className="flex flex-col md:grid grid-cols-2 gap-[40px] xl:gap-[80px]">
                {projetos.map((projeto) => (
                    <div className="flex flex-col items-center justify-center shadow-purple rounded-2xl transition-transform duration-300 ease-in-out md:hover:scale-105 md:hover:shadow-purple" key={projeto.id}>

                        {/* 1 bloco */}
                        <div className="relative inline-block cursor-pointer group" onClick={() => abrirLightbox(projeto.imagensDetalhes, 0)}>

                            <Image src={projeto.capa} alt="capa" height={280} width={520} className="block transition duration-300 ease-in-out rounded-t-2xl h-[200px] w-[360px] lg:h-[260px] lg:w-[460px] xl:h-[280px] xl:w-[520px] md:group-hover:brightness-75 object-cover"/>

                            <div className="absolute bottom-0 left-0 right-0 bg-[rgba(167,139,250,0.38)] text-gray-400 flex items-center justify-center transition-opacity duration-300 ease-in-out text-center md:group-hover:opacity-100 md:p-2 opacity-100 text-sm
                            
                            md:inset-0 md:bg-black/50 md:rounded-t-2xl md:text-xl md:opacity-0
                            ">
                                <span>{t("projetos.clickToView")}</span> 
                            </div>

                        </div>

                        {/* 2 bloco */}
                        <div className="flex flex-col items-center justify-center gap-1 lg:gap-5 bg-[#f4f6fb] py-3 rounded-b-2xl">

                            <p className="max-w-[360px] lg:max-w-[460px] xl:max-w-[480px] text-center font-bold lg:text-xl lg:font-semibold text-[var(--textoSecundario)] flex items-center">{projeto.nome}</p>

                            <span className="max-w-[360px] lg:max-w-[460px] xl:max-w-[480px] flex items-center md:h-[74px] text-[var(--textoSecundario)] text-center text-[14px] leading-[16px] lg:text-base px-1">{projeto.descricao}</span>

                            <span className="text-[var(--textoPrincipal)] font-bold lg:font-semibold text-center w-[320px] lg:w-[420px] xl:w-[504px] md:h-[48px] flex items-center justify-center text-sm lg:text-base">{projeto.tecnologias}</span>

                            <div className="flex items-center gap-1 lg:gap-5">
                                <Button asChild className="bg-[var(--primaria)] rounded-lg hover:bg-[var(--botaoHover)]">
                                    <Link href={projeto.vercel}target="_blank" className="text-[var(--textoPrincipal)] text-base font-semibold">
                                        {t("projetos.viewDetails")}

                                        <FiChevronRight size={15} className="text-[var(--textoPrincipal)]"/>

                                    </Link>
                                </Button>

                                <Button asChild className="bg-[var(--primaria)] p-1 rounded-lg  hover:bg-[var(--botaoHover)]">
                                    <Link href={projeto.github} target="_blank" className="text-[var(--textoPrincipal)] text-base font-semibold">
                                        {t("projetos.viewCode")}

                                        <FiGithub size={15} className="text-[var(--textoPrincipal)]"/>
                                    </Link>
                                </Button>

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