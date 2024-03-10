import Image from "next/image"
import { Marhey, Caveat } from "next/font/google"

const marhey = Marhey({
    weight: '400',
    subsets: ['latin']
})

const caveat = Caveat({
    weight: '400',
    subsets: ['latin']
})

export default function Home() {
    return (<div className="flex flex-col">
        <div id="home-image-wrapper" className="flex items-center justify-center">
            <Image src="/background.jpg" alt="Beutiful sunset Image" width={1920} height={600} />
            <div id="home-image-text" className="absolute top-[200px]">
                <h1 className={`text-8xl ${caveat.className} text-wrap text-center text-slate-100`}>
                    <span className="text-[10rem]">Manzily</span><br /> Game Farm</h1>
            </div>
        </div>
        <section className="grid">
            
        </section>
    </div>)
}