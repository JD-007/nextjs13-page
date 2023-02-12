import Link from "next/link"
import Image from "next/image";



export default function Home() {
    return (
        <>

            <h1> About </h1>
            <Link href={"/"}> Home </Link>
            <img src="/DUBAI.jpeg" alt="About Image" width="1500" height="700" />


        </>

    )
}
