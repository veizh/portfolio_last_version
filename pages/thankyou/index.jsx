import { NavBar } from '../../components/navBar'
import Link from 'next/link'
import Image from 'next/image'
 const thankyou = () => {
    
    return (
        <>
            <NavBar />
            <div className="layoutTy ">
                <div className='containerTop'>
                    <h1>Merci pour votre message !</h1>
                    <p>Je reviens vers vous dès que possible !</p>
                    <Link href="/">Retournez à l&apos;acceuil <Image width='100' height="30" alt="home icon" src='./home.svg' /></Link>
                </div>
                
            </div>
        
        </>
        
    )
}
export default thankyou