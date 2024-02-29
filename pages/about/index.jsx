
import Image from "next/image"
import Link from "next/link"
import { Layout } from "../../components/Layout"
import { NavBar } from "../../components/navBar"
const About =()=>{
    return(
        <>
            <NavBar />
            <Layout > </Layout>
            <main id='about' className="aboutCol">
                <div className="bigCard">
                       <div className="top">
                            <div className="name">Maxime Durville</div>
                            <div className="containerImg">
                                <img src="pp.webp" alt="photo de profil" />
                            </div>
                       </div>
                       <div className="bot">
                            <div className="description">
                                Passionnée depuis toujours par le web et l&apos;informatique en général, j&apos;ai commencé en 2019 a faire des sites internets personnels.<br/><br/>
                                Deux années plus tard j&apos;obtien un diplome d&apos;intégrateur web full-stack de niveau Bac+2.<br/><br/>
                                Actuellement entrain de suivre une formation qui touche à sa fin dans le but d&apos;affiner mes compétences en ReactJs. J'aspire à rejoindre une entreprise qui pourra mettre mes compétences à profits et m'aidera à progresser.
                            </div>
                            <div className="containerContact">
                                <Link target="_blank" href="HTTPS://www.linkedin.com/in/maxime-durville"> <img src="lkd.svg" alt="navigation au profil linkedIn" /></Link>

                            </div>
                       </div>
                </div>
                <Link className="backHome"href="/">Retournez à l&apos;acceuil </Link>
            </main>
        </>
    )
}
export default About