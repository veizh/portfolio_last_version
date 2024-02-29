import Link from "next/link"
import { useRouter } from "next/router"
import { useState } from "react"
export const NavBar = () =>{
    const [toggle,setToggle]  =useState(false)
    const router = useRouter()
    return(
        <header className="sticky">
            <div className="navContainer">
                <div className="nav">
                    <img className="logo" onClick={()=>router.push("./")} src="logo.svg"></img>
                    <div className="menu" onClick={()=>setToggle(!toggle)}><img src="./menu.svg" className={toggle?"active":""} /></div>
                </div>
                <div className={toggle?"dropContainer active":"dropContainer"}>
                    <div className="drop">
                        <Link  onClick={()=>setToggle(false)}href="./">Acceuil</Link>
                        <Link  onClick={()=>setToggle(false)}href="./#projets">Projets</Link>
                        <Link  onClick={()=>setToggle(false)}href="./about">A propos</Link>
                        <Link  onClick={()=>setToggle(false)}href="./#contact">Contact</Link>
                    </div>
                </div>    
            </div>
           
          
        </header>
        
    )
}