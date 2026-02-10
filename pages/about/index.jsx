
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
                                Développeur front-end spécialisé en React et JavaScript, je conçois des interfaces web modernes, performantes et centrées utilisateur.<br/>
                                 J&apos;interviens sur l&apos;intégration front, la gestion d&apos;état, la creation d&apos;APIs et la gestion de données.

Attentif à la qualité du code, à l&apos;UX et aux bonnes pratiques, j&apos;aime transformer des besoins métiers en expériences digitales efficaces et maintenables.<br/>
                                
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