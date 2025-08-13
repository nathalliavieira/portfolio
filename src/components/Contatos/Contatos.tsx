import styles from "./styles.module.scss";
import iconCafe from "../../../public/iconCafe.png";
import Image from "next/image";

import { FiGithub } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi";
import { FiMail } from "react-icons/fi";

import { useTranslation } from "@/context/TranslationContext";

export default function Contatos(){
    const {t} = useTranslation();

    return (
        <div className={styles.container}>
            <div className={styles.contato}>
                <span>{t("contatos.likeWhatYouSee")}</span>
                <span>{t("contatos.contactMe")}</span>
                <div className={styles.link}>
                    <Image src={iconCafe} width={25} height={25} alt="Icon coffee" />
                    <a href="mailto:nathalliavieiradepadua@gmail.com?subject=Contato via portfólio&body=Olá Nathallia, gostaria de falar sobre...">{t("contatos.linkEmail")}</a>
                </div>
            </div>

            <div className={styles.sociais}>
                <a href="https://github.com/nathalliavieira" target="_blank" rel="noopener noreferrer">
                    <FiGithub size={25} className={styles.icon}/>
                </a>
                <a href="https://www.linkedin.com/in/nathallia-vieira-1147781aa" target="_blank" rel="noopener noreferrer">
                    <FiLinkedin size={25} className={styles.icon}/>
                </a>
                <a href="mailto:nathalliavieiradepadua@gmail.com?subject=Contato via portfólio&body=Olá Nathallia, gostaria de falar sobre...">
                    <FiMail size={25} className={styles.icon}/>
                </a>
            </div>
        </div>
    );
}