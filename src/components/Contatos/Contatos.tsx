import iconCafe from "../../../public/iconCafe.png";
import Image from "next/image";

import { FiGithub } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi";
import { FiMail } from "react-icons/fi";

import { useTranslation } from "@/context/TranslationContext";

export default function Contatos(){
    const {t} = useTranslation();

    return (
        <div className="w-full flex flex-col items-start justify-start lg:justify-between p-5 lg:px-[50px] xl:px-[120px] xl:pt-[50px] lg:pb-8 mt-[70px] bg-[var(--botaoHover)] lg:flex-row lg:items-center gap-5">
            <div className="flex flex-col items-start justify-center gap-1 font-bold lg:font-semibold">
                <span className="text-[#f4f6fb] text-sm lg:text-base">{t("contatos.likeWhatYouSee")}</span>
                <span className="text-[#f4f6fb] text-sm lg:text-base">{t("contatos.contactMe")}</span>

                <div className="p-1 lg:p-3 rounded-lg border-none text-sm lg:text-base font-semibold cursor-pointer bg-[var(--primaria)] flex items-center justify-center gap-1 mt-2 lg:mt-3 hover:bg-[var(--realceLinkHover)]">
                    <Image src={iconCafe} width={25} height={25} alt="Icon coffee" />
                    <a href="mailto:nathalliavieiradepadua@gmail.com?subject=Contato via portfólio&body=Olá Nathallia, gostaria de falar sobre..." className="text-[var(--textoPrincipal)] -mb-1">{t("contatos.linkEmail")}</a>
                </div>
            </div>

            <div className="flex gap-3">
                <a href="https://github.com/nathalliavieira" target="_blank" rel="noopener noreferrer">
                    <FiGithub size={25} className="text-[#333333] hover:text-[var(--realceLinkHover)]"/>
                </a>
                <a href="https://www.linkedin.com/in/nathallia-vieira-1147781aa" target="_blank" rel="noopener noreferrer">
                    <FiLinkedin size={25} className="text-[#333333] hover:text-[var(--realceLinkHover)]"/>
                </a>
                <a href="mailto:nathalliavieiradepadua@gmail.com?subject=Contato via portfólio&body=Olá Nathallia, gostaria de falar sobre...">
                    <FiMail size={25} className="text-[#333333] hover:text-[var(--realceLinkHover)]"/>
                </a>
            </div>
        </div>
    );
}