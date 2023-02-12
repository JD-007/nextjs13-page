import Link from "next/link"




export default function Home({ params }: { params: { products: string } }) {


    return (
        <>

            <h1> HOME </h1>
            <Link href={"/about"}> About </Link>

            <div> The Products name is: {params.products} </div>

        </>

    )
}

