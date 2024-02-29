import Link from "next/link"

export const Project = (props)=>{
    return(
        <Link href={"./projets?name="+props.name} className="subContainer">
            <img className="project" src={props.source} />
        </Link>
    )
}