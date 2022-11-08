import Head from 'next/head';
import {BsFillMoonStarsFill} from 'react-icons/bs';
import{AiFillTwitterCircle,AiFillLinkedin,AiFillGithub,} from "react-icons/ai";
import Image from 'next/image';
import deved from "../public/home-main.svg";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Anthony portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='bg-purple-700 px-10 '>
        <section className=" bg-purple-700 min-h-screen">
          <nav className='py-10 mb-12 flex justify-between'>
            <h1 className='text-xl font-burtons'> Developed by Anthxny </h1>
            <ul className='flex items-center'>
              <li>
                <BsFillMoonStarsFill className='cursor-pointer text-2xl'/>
              </li>
              <li><a className='bg-gradient-to-r from-cyan-500 to-teal-400 text-white px-4 py-2 rounded-md ml-8' href="#">Resume</a></li>
            </ul>
          </nav>
          <div className='text-center p-10'>
            <h2 className='text-5xl py-2 text-teal-200 font-medium'>Anthony Denis</h2>
            <h3 className='text-2xl py-2'>Developer and designer.</h3>
            <p className='text-md py-5 leading-8 text-gray-800'>Freelancer provinding services for programming and design content needs. Join me down below and let's get cracking !</p>
          </div>
          <div className='text-5xl flex justify-center gap-16 py-3 text-gray-800'>
          <AiFillTwitterCircle />
          <AiFillLinkedin />
          <AiFillGithub />
          </div>
          <div className='relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden'>
          <Image src={deved} layout="fill" objectFit='cover'/>
          </div>
        </section>
      </main>
    </div>
  )
}
