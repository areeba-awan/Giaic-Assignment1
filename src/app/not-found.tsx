import Link from 'next/link';

export default function notfound(){
  return(
    <main className="bg-slate-400 h-screen">
        <h2 className="text-xl text-neutral-900 font-extrabold text-center p-5"><i>404</i></h2>
        <p className="text-neutral-900 text-center ">We could not find the page you were looking for :/ </p>
        <p className='text-orange-950  text-xl text-center hover:placeholder:'>Go Back to <Link href='./'>Home</Link></p>

    </main>

  )
}