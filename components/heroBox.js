export default function HeroBox({background, title}) {
    return(
        <div className={`${background} text-white bg-blend-multiply flex items-end justify-center pb-[4rem] bg-black/60 h-[20rem] min-h-[100vh] bg-cover bg-center w-full`}>
            <h2 className={`font-IBM text-center uppercase text-[2rem] font-[600]`}>
                {title}
            </h2>
        </div>
    )
}