

export const Layout = (props)=>{
   
    return (
        <div className="layoutContainer">
            <section className={'backgroundSecond noShadow ' + props.name}>
            <div className='first' />
            <div className='second' />
            <img src="./waves.svg" className="waves" />
            </section>
        </div>
    )
}