import Image from "next/image"
import Link from "next/link"
import { useState,useEffect } from "react"
import { Layout } from "../../components/Layout"
import { NavBar } from "../../components/navBar"
const worldcup = {
    name:"AG-consulting WorldCup",
    src:["./projects/projet_ag.webp","./projects/projet_ag1.webp","./projects/projet_ag2.webp"],
    tags:["HTML","Sass","React","mongodb"],
    cadre:"Pojet réalisé en tant que freelance pour AG-consulting. Le commanditaire voulait un site de pari pour pouvoir organiser un jeu avec ses collaborateurs.",
    description:"L'idée etait de faire un site de pari pour la coupe du monde avec différentes fonctionnalités comme: Faire des comptes utilisateurs,  remplir ses grilles de paris et les sauvergarder, mettre en place un systeme qui permet de compter et mettre à jour les points en fonctions des résultats des matchs..."
}
const kasa = {
    name:"Kasa",
    src:["./projects/projet_kasa.webp","./projects/projet_kasa1.webp","./projects/projet_kasa2.webp"],
    tags:["HTML","Sass","React"],
    cadre:'Formation Open Classroom',
    link:"https://project-7-opc.vercel.app/home",
    description:"Il fallait faire l'intégration d'un site pour une plateforme d'hébergements en se basant sur une maquette figma. La technologie imposée était React et l'intérgation comprennais seulement la partie front-end du projet. "
}
const Projet = ()=>{
    const [params,setParam] = useState()
    const [ImageIndex,setImageIndex] = useState(0)
    const [thisOne,setThisOnes] = useState()
    useEffect(()=>{

        const param =  new URLSearchParams(window.location.search)
       
        console.log(param.get("name"));
        if(param.get("name")==='Kasa'){
            console.log("kasa");
            setThisOnes(kasa)
        }
        if(param.get("name")==='Ag-WorldCup'){
            console.log("ag");
            setThisOnes(worldcup)
        }
    },[])

    function changeImage(i){

        
        if(ImageIndex+i +1> thisOne.src.length){
            setImageIndex(0)
            
        }
        else if(ImageIndex+i<0){
            setImageIndex(thisOne.src.length - 1)
        }
        else{

            setImageIndex(ImageIndex+i)
        }

    }

    return(
        <>
        <NavBar />
        <Layout name="projet"/>
        <div className="colProject">
            <h1>{thisOne && thisOne.name}</h1>
            <div className="colDescription languages">
                <h2 className="label">Languages :</h2>
                {thisOne && thisOne.tags.map((w,i)=><div key={i} className="tag">{w}</div>)}
            </div>
            <div className="colDescription">
                <h2>Cadre:</h2>
                <p>{thisOne && thisOne.cadre}</p>
            </div>
            <div className="colDescription">
            <h2>Description:</h2>

            <p>{thisOne && thisOne.description}</p>
            </div>
            <div className="colDescription">
            <h2>lien:</h2>

            <p>{thisOne && thisOne.link?<Link href={thisOne.link}>cliquez pour aller voir</Link>:"Le lien de se site est privé."}</p>
            </div>
            <div className="colDescription ">
                <h2>images du projet:</h2>
                <div className="caroussel">
                    <img src={thisOne && thisOne.src[ImageIndex]}  alt="" />
                    
                </div>
                <div className="rowNav">
                    <div className="fleche gauche" onClick={()=>changeImage(-1)}/>
                <div className="count">{ImageIndex + 1} / {thisOne && thisOne.src.length}</div>
                <div className="fleche " onClick={()=>changeImage(1)}/>
                </div>
                
            </div>
            <Link href="./" className="backHome">Retourner à l&apos;acceuil</Link>
        </div>
        
        </>
    )
    
}
export default Projet