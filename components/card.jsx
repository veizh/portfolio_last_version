import Link from "next/link"
import { useRouter } from "next/router"
export const Card = (props)=>{
    const navigate = useRouter() 
    return (
        <div  className="card" onClick={()=>navigate.push('http://localhost:3000/#contact')}>
            <img className="image" src={props.source} />
            <h1 className="title"> {props.title}</h1>
            <div className="content">{props.content}</div>
            
            
        </div>
    )
}