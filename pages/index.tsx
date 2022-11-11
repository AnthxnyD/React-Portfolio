import Head from 'next/head';
import {BsFillMoonStarsFill} from 'react-icons/bs';
import{AiFillTwitterCircle,AiFillLinkedin,AiFillGithub,} from "react-icons/ai";
import Image from 'next/image';
import deved from "../public/home-main.svg";
import design from "../public/design.png";
import code from "../public/code.png";
import consulting from "../public/consulting.png";
import web1 from "../public/web1.png";
import web2 from "../public/web2.png";
import web3 from "../public/web3.png";
import web4 from "../public/web4.png";
import web5 from "../public/web5.png";
import web6 from "../public/web6.png";
import { useState } from "react";



export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Anthony portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='bg-purpleverylight px-10 md:px-20 lg:px-40 dark:bg-purpleverydark'>
        <section className=" bg-purpleverylight min-h-screen dark:bg-purpleverydark">
          <nav className='py-10 mb-12 flex justify-between'>
            <h1 className='text-xl font-burtons'> Developed by Anthxny </h1>
            <ul className='flex items-center'>
              <li>
                <BsFillMoonStarsFill  onClick={() => setDarkMode(!darkMode)} 
                className='cursor-pointer text-2xl'/>
              </li>
              <li><a className='bg-gradient-to-t from-Blue to-purplelight hover:from-Blue hover:to-purpleverydark text-white px-4 py-2 rounded-md ml-8' href="#">Resume</a></li>
            </ul>
          </nav>
          <div className='text-center p-10'>
            <h2 className='text-5xl py-2 text-surligner dark:text-purpleverylight font-medium md:text-6xl'>Anthony Denis</h2>
            <h3 className='text-2xl py-2 md:text-3xl'>Developer and designer.</h3>
            <p className='text-md py-5 md:text-xl max-w-xl mx-auto leading-8 text-Gris dark:text-purpleverylight'>Freelancer provinding services for programming and design content needs. Join me down below and let's get cracking !</p>
          </div>
          <div className='text-5xl flex justify-center gap-16 py-3 text-Gris dark:text-purpleverylight'>
          <AiFillTwitterCircle />
          <AiFillLinkedin />
          <AiFillGithub />
          </div>
          <div className='relative mx-auto bg-gradient-to-b from-beige to-purplelight  rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96'>
          <Image className='m-auto' src={deved} layout="fill" objectFit='cover'/>
          </div>
        </section>

        <section>
          <div>
            <h3 className='text-3xl py-1 pt-20 pb-10'>Services I offer</h3>
            <p className='text-md py-2 leading-8 text-teal-200 md:text-xl'>
              Since the beginning of my journey as a freel developer ,
              I've done remote work for
              <span className='text-bleubasic'> agencies </span>consulted for
              <span className='text-bleubasic'> startups </span>and collaborated with talanted people to create digital contents for both business and consumer use.
            </p>
            <p className='text-md py-2 leading-8 text-Gris'>
              I offer from a wide range of services , including brand design , programming and teaching.
            </p>
          </div>
          <div className='lg:flex gap-10'>
            <div className='text-center shadow-xl p-10 rounded-xl my-10 bg-beige dark:bg-bleuclair'>
              <Image className='m-auto' src={design} width={100} height={100} />
              <h3 className='text-lg font-medium pt-8 pb-2'>Beautiful Designs</h3>
              <p className='py-2'>
                Creating elegent designs suited for your needs 
                following core design theory.
              </p>
              <h4 className='py-4 text-teal200'>Design tools I use</h4>
              <p className='text-Gris py-1'>Photoshop</p>
              <p className='text-Gris py-1'>Figma</p>
              <p className='text-Gris py-1'>illustrator</p>
            </div>


            <div className='text-center shadow-lg p-10 rounded-xl my-10 bg-beige dark:bg-bleuclair'>
              <Image className='m-auto' src={code} width={100} height={100}  />
              <h3 className='text-lg font-medium pt-8 pb-2'>Beautiful Designs</h3>
              <p className='py-2'>
                Creating elegent designs suited for your needs 
                following core design theory.
              </p>
              <h4 className='py-4 text-teal200'>Design tools I use</h4>
              <p className='text-Gris py-1'>Photoshop</p>
              <p className='text-Gris py-1'>Figma</p>
              <p className='text-Gris py-1'>illustrator</p>
            </div>


            <div className='text-center shadow-lg p-10 rounded-xl my-10 bg-beige dark:bg-bleuclair'>
              <Image className='m-auto' src={consulting} width={100} height={100} />
              <h3 className='text-lg font-medium pt-8 pb-2'>Beautiful Designs</h3>
              <p className='py-2'>
                Creating elegent designs suited for your needs 
                following core design theory.
              </p>
              <h4 className='py-4 text-teal200'>Design tools I use</h4>
              <p className='text-Gris py-1'>Photoshop</p>
              <p className='text-Gris py-1'>Figma</p>
              <p className='text-Gris py-1'>illustrator</p>
            </div>
          </div>
        </section>
        <section>
          <div>
            <h3 className='text-3xl py-1'>Portfolio</h3>
            <p className='text-md py-2 leading-8 text-teal200'>
              Since the beginning of my journey as a freel developer ,
              I've done remote work for
              <span className='text-bleubasic'> agencies </span>consulted for
              <span className='text-bleubasic'> startups </span>and collaborated with talanted people to create digital contents for both business and consumer use.
            </p>
            <p className='text-md py-2 leading-8 text-gray-800'>
              I offer from a wide range of services , including brand design , programming and teaching.
            </p>
          </div>
          <div className='flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap'>
            <div className='basis-1/3 flex-1'>
              <Image src={web1} className="rounded-lg object-cover" width={'100%'} height={'100%'} layout="responsive" />
            </div>
            <div className='basis-1/3 flex-1'>
              <Image src={web2} className="rounded-lg object-cover" width={'100%'} height={'100%'} layout="responsive" />
            </div>
            <div className='basis-1/3 flex-1'>
              <Image src={web3} className="rounded-lg object-cover" width={'100%'} height={'100%'} layout="responsive" />
            </div>
            <div className='basis-1/3 flex-1'>
              <Image src={web4} className="rounded-lg object-cover" width={'100%'} height={'100%'} layout="responsive" />
            </div>
            <div className='basis-1/3 flex-1'>
              <Image src={web5} className="rounded-lg object-cover" width={'100%'} height={'100%'} layout="responsive" />
            </div>
            <div className='basis-1/3 flex-1'>
              <Image src={web6} className="rounded-lg object-cover" width={'100%'} height={'100%'} layout="responsive" />
            </div>


          </div>
        </section>
      </main>
    </div>
  )
}
