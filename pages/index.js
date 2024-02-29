import Head from "next/head"
import Link from "next/link"
import { useEffect, useState } from "react"
import { Card } from "../components/card"
import { NavBar } from "../components/navBar"
import { Project } from "../components/Project"
import { useRouter } from "next/router"

const projects = [
  {
    source:"./projects/projet_ag.webp",
    name:"Ag-WorldCup"
  },
  {
    source:"./projects/projet_kasa.webp",
    name:"Kasa"
  },
  {
    source:"./projects/xAdventure.webp",
    name:"xAdventure",
    link:"https://studiecase.vercel.app/"
  }
  
]
export default function Home() {
  const navigate = useRouter()
  const [array,setArray] = useState(Array.from("MAXIME DURVILLE"))
  const [opa,setOpa] = useState(false)
  
  useEffect(()=>{
    const video = document.querySelector("video")
    video.playbackRate = 0.75
    setInterval(() => {
      const crt =video.currentTime;
      if(crt>5){
        setOpa(true)
      }
      else{
        setOpa(false)
      }
    }, 10);
  },[])

  useEffect(()=>{
    const canvas = document.querySelector(".deco");
    console.log(canvas);
  })
  return (
    <>
      <Head>
        <title>Maxime Durville</title>
        <meta name="description" content="Voici mon portfolio de développeur web, n&apos;hesitez pas a me contacter !" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.ico" />
      </Head>
      <NavBar />
      <div className="layout">
        <div className="background" />
        <div className="content">
          {array&&array.map((e,i)=>{
            return <p key={i} style={{animationDelay:i*0.075+"s"} }>{e}</p>
          })}
        </div>
        
        <div className="slogan"><div className="container">Bienvenue sur mon portfolio ! <br/>Je suis <a> développeur full-stack, </a> J&apos;aprrécie devoir être créatif afin de trouver des solutions aussi viables que maintenables avec les outils que j&apos;ai à ma disposition.</div><Link href="./about" className="button">A propos de moi <img src="arrowWhite.svg"/></Link></div>
        <img className="waves" src="./waves.svg"/>
        <video muted loop autoPlay playsInline preload="auto" className={opa? "opacity":""}> <source src="./fume.mp4" type="video/mp4" /></video>

      </div>
      <div className="presentation">
        <Card title="Database" content="Je construis des systèmes qui ont pour but d&apos;organiser et stocker les données tout en faisant en sorte que  les celles-ci soient exploitable de manière simple et efficace." source="./database.svg" />
        <Card title="S.E.O" content="Je m&apos;occupe d'ameliorer le SEO des sites dans le but d'obtenir une meilleur visibilité. Faire des backlinks ou optimiser les perfomances font parti des outils que je peux utiliser." source="./SEO.svg" />
        <Card title="Intégration" content="Je m&apos;applique à intégrer un site depuis un design donné. De la version mobile à la version desktop je mets un point d&apos;honneur à ce que l&apos;experience reste agréable pour l&apos;utilisateur. " source="./code.svg" />

      </div>
      <section id="projets">
      <div  className="projectsContainer" >
        <h1>Mes Projets</h1>
        {projects.map((e,i)=><Project key={i} source={e.source} name={e.name} />)}
      </div>
      </section>
      
      <section id="contact" className="backgroundSecond"><div className="first"></div><div className="second"></div></section>
      
      <section className="contactContainer" >
        <h1>Contact</h1>
        <p>Envie de mettre en place un projet ? Besoin d&apos;informations supplémentaires ? Contactez-moi</p>
        <form action="https://formsubmit.co/b1746bc762ff65488f5934623a38038d"  method="POST">
          <input type="hidden" name="_captcha" value="false"></input>
          <input type="hidden" name="_next" value="https://www.maxime-durville.fr/thankyou" />
          <div className="containerInput email">
            <label htmlFor="email">Adresse Email*</label>
            <input type="email" name="email"  required/>
          </div>
          
          <div className="containerInput firstName">
            <label htmlFor="firstName">Nom ou Marque*</label>
            <input type="text" name="firstName"  required/>
          </div>
          
          <div className="containerInput lastName">
            <label htmlFor="lastName">Prénom*</label>
            <input type="text" name="lastName" required/>
          </div>

          <div className="containerInput phone">
            <label  htmlFor="phone">Numéro de Téléphone</label>
            <input type="tel" name="phone" />
          </div>

          <div className="containerInput message">
            <label  htmlFor="message">Votre Message*</label>
            <textarea type="text" name="message" required/>
          </div>
          <button type="submit"  >Envoyer</button>
        </form>
      </section>
    </>
  )

}
