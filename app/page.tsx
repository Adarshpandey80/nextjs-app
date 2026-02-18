import Image from "next/image";
import Card from "./Card";


import style from './layout.module.css'

export default function Home() {
  return (
   <>
    <Card/>
    <h1 className={style.h1}>welcome next app</h1>
    {/* <img className={style.img} src="/images/pumaw1.avif" alt="shoes photo" /> */}
    <div>
        <Image src="/images/pumaw1.avif"
        width={400}
        height={400}
        
         alt="my photo"/>
    </div>
  
   </>
  );
}
