import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import Image from "next/image";

export function Main() {
    return (
        <main className="flex-1 p-6">
        <div className='flex items-center gap-4'>
          <button className='rounded-full bg-black/20 p-1'>
            <ChevronLeft />
          </button>

          <button className='rounded-full bg-black/20 p-1'>
              <ChevronRight />
          </button>
        </div>

        <h1 className='font-semibold text-3xl mt-10'>Good Afeternoon</h1>

        <div className='grid grid-cols-3 gap-4 mt-4'>
           <a href='#' className='bg-white/5 group flex items-center gap-4 rounded overflow-hidden hover:bg-white/20'>
            <Image width={104} height={104} src={"/img/FFLogo.png"}  alt='logo'/>
            <strong>Wasting Light</strong>

            <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
               <Play />
            </button>
           </a>
           <a href='#' className='bg-white/5 group flex items-center gap-4 rounded overflow-hidden hover:bg-white/20'>
            <Image width={104} height={104} src={"/img/FFLogo.png"}  alt='logo'/>
            <strong>Wasting Light</strong>

            <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
               <Play />
            </button>
           </a>
           <a href="#" className='bg-white/5 group flex items-center gap-4 rounded overflow-hidden hover:bg-white/20'>
            <Image width={104} height={104} src={"/img/FFLogo.png"}  alt='logo'/>
            <strong>Wasting Light</strong>

            <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
               <Play />
            </button>
           </a>
           <a href='#' className='bg-white/5 group flex items-center gap-4 rounded overflow-hidden hover:bg-white/20'>
            <Image width={104} height={104} src={"/img/FFLogo.png"}  alt='logo'/>
            <strong>Wasting Light</strong>

            <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
               <Play />
            </button>
           </a>
           <a href='#' className='bg-white/5 group flex items-center gap-4 rounded overflow-hidden hover:bg-white/20'>
            <Image width={104} height={104} src={"/img/FFLogo.png"}  alt='logo'/>
            <strong>Wasting Light</strong>

            <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
               <Play />
            </button>
           </a>
           <a href='#' className='bg-white/5 group flex items-center gap-4 rounded overflow-hidden hover:bg-white/20'>
            <Image width={104} height={104} src={"/img/FFLogo.png"}  alt='logo'/>
            <strong>Wasting Light</strong>

            <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
               <Play />
            </button>
           </a>
        </div>

        <h2 className='font-semibold text-2xl mt-10'>Made for Lucas Silva</h2>

        <div className='grid grid-cols-8 gap-4 mt-4'>

          <a href='#' className='bg-white/5 flex flex-col gap-2 p-3 rounded-md hover:bg-white/10'>
            <Image className='w-full' width={120} height={120} src={"/img/capa-2.jpg"}  alt='logo'/>
            <strong className='font-semibold'>Daily Mix 1</strong>
            <span className='text-sm text-zinc-400'>Wallows , COIN, girl in red and more</span>
          </a>

          <a href='#' className='bg-white/5 flex flex-col gap-2 p-3 rounded-md hover:bg-white/10'>
            <Image className='w-full' width={120} height={120} src={"/img/capa-2.jpg"}  alt='logo'/>
            <strong className='font-semibold'>Daily Mix 1</strong>
            <span className='text-sm text-zinc-400'>Wallows , COIN, girl in red and more</span>
          </a>

          <a href='#' className='bg-white/5 flex flex-col gap-2 p-3 rounded-md hover:bg-white/10'>
            <Image className='w-full' width={120} height={120} src={"/img/capa-2.jpg"}  alt='logo'/>
            <strong className='font-semibold'>Daily Mix 1</strong>
            <span className='text-sm text-zinc-400'>Wallows , COIN, girl in red and more</span>
          </a>

          <a href='#' className='bg-white/5 flex flex-col gap-2 p-3 rounded-md hover:bg-white/10'>
            <Image className='w-full' width={120} height={120} src={"/img/capa-2.jpg"}  alt='logo'/>
            <strong className='font-semibold'>Daily Mix 1</strong>
            <span className='text-sm text-zinc-400'>Wallows , COIN, girl in red and more</span>
          </a>

          <a href='#' className='bg-white/5 flex flex-col gap-2 p-3 rounded-md hover:bg-white/10'>
            <Image className='w-full' width={120} height={120} src={"/img/capa-2.jpg"}  alt='logo'/>
            <strong className='font-semibold'>Daily Mix 1</strong>
            <span className='text-sm text-zinc-400'>Wallows , COIN, girl in red and more</span>
          </a>


        </div>
      </main>
    )
}