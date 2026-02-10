import Head from "next/head"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import { Card } from "../components/card"
import { NavBar } from "../components/navBar"
import { Project } from "../components/Project"
import { useRouter } from "next/router"

const projects = [
 
  {
    source:"./projects/stock_AG.webp",
    name:"StockAG",
    stack:["React | Sass | Node | JavaScript | MongoDB"]
  },
  {
    source:"./projects/projet_kasa.webp",
    name:"Kasa",
    stack:["React | Sass "]

  },
  {
    source:"./projects/xAdventure.webp",
    name:"xAdventure",
    link:"https://studiecase.vercel.app/",
    stack:["Next | Sass | JavaScript "]

  },
  {
    source:"./projects/projet_ag.webp",
    name:"Ag-WorldCup",
    stack:["React | Sass | Node | JavaScript | MongoDB"]
  },
  {
    source:"./projects/music.png",
    name:"MusicPlayer",
    stack:["React | Sass | Node | JavaScript | ElectronJs"]
  },
  
]
export default function Home() {
  const navigate = useRouter()
  const [array,setArray] = useState(Array.from("MAXIME DURVILLE"))
  const [opa,setOpa] = useState(false)
  const [modal,setModal] = useState(null)
  const [mouseX,setMouseX] = useState(null)
  const [mouseY,setMouseY] = useState(null)
  const [datahover,setDatahover] = useState(null)
  let ref = useRef()

  //
  //IL FAUT FAIRE LA LOGIQUE DE LA MODALE POURE AVOIR LES INFORMATIONS LORS DU CLICK SUR UN PROJET !
  
  //IL FAUT FAIRE LA LOGIQUE DE LA MODALE POURE AVOIR LES INFORMATIONS LORS DU CLICK SUR UN PROJET !
  
  //
  //
  useEffect(()=>{
    setTimeout(() => {
      let tmp =  document.querySelectorAll('.subContainer')
      tmp.forEach((e)=>{
        e.addEventListener("mousemove",(event)=>{
          setMouseX(event.x)
          setMouseY(event.y)
        })
        e.addEventListener("mouseenter",()=>{
          setDatahover(e.getAttribute('data-stack'))
          ref.current.style.opacity=1

        })
        e.addEventListener("mouseleave",()=>{
          ref.current.style.opacity=0

        })
      })
    }, 200);
   
  },[])
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

  return (
    <>
    <div className="dataOnMouse" style={{transform:`translate(calc(${mouseX+30}px),calc(${mouseY-30}px - 50%)`}} ref={ref}>{datahover}</div>
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
        
        <div className="slogan"><div className="container">Bienvenue sur mon portfolio,<br/>Je suis <a> développeur full-stack, </a> J&apos;aprrécie devoir être créatif afin de trouver des solutions aussi viables que maintenables avec les outils que j&apos;ai à ma disposition.</div><Link href="./about" className="button">A propos de moi <img src="arrowWhite.svg"/></Link></div>
        <img className="waves" src="./waves.svg"/>
        <video muted loop autoPlay playsInline preload="auto" className={opa? "opacity":""}> <source src="./fume.mp4" type="video/mp4" /></video>

      </div>
      <div className="presentation">
        <Card title="Gestion de données" content="Je conçois des systèmes visant à organiser et stocker les données, tout en veillant à ce qu&apos;elles soient exploitables de manière simple, efficace et performante." source="./database.svg" />
        <Card title="S.E.O" content="J&apos;améliore le SEO des sites afin d&apos;augmenter leur visibilité. L&apos;optimisation des performances et l&apos;amélioration de l&apos;accessibilité font partie des leviers que j&apos;utilise pour atteindre ces objectifs." source="./SEO.svg" />
        <Card title="Intégration" content="Je veille à intégrer les designs avec rigueur, en respectant les bonnes pratiques du web. De la version mobile à la version desktop, je mets un point d&apos;honneur à garantir une expérience utilisateur fluide, cohérente et agréable." source="./code.svg" />

      </div>
      <section id="projets">
      <div  className="projectsContainer" >
        <h1>Mes Projets</h1>
        {projects.map((e,i)=><Project key={i} source={e.source} stack={e.stack} name={e.name} />)}
      </div>
      </section>
      
      <section id="contact" className="backgroundSecond"><div className="first"></div><div className="second"></div></section>
      
      <section className="contactContainer" >
        <h1>Contact</h1>
        <p>Envie de mettre en place un projet ? Besoin d&apos;informations complémentaires ? Contactez-moi</p>
        <form action="https://formsubmit.co/b1746bc762ff65488f5934623a38038d"  method="POST">
          <input type="hidden" name="_captcha" value="false"></input>
          <input type="hidden" name="_next" value="https://www.maxime-durville.fr/thankyou" />
          <div className="containerInput email">
            <label htmlFor="email">Adresse Email*</label>
            <input type="email" name="email"  required/>
          </div>
          
          <div className="containerInput firstName">
            <label htmlFor="firstName">Nom*</label>
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
          <button type="submit" onClick={(e)=>{
            
            setTimeout(() => {
              navigate.push("https://www.maxime-durville.fr/thankyou")
            }, 1500);
          }}  >Envoyer</button>
        </form>
      </section>
    </>
  )

}
