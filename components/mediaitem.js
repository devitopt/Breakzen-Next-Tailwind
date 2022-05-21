import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

export default function MediaItem(props) {
    return (
      <Link href="/your_course"><a>
        <div className="flex flex-col w-36 md:w-full bg-fore rounded-xl border border-white overflow-hidden">
          <Image priority src={"/images/media" + (props.num ? props.num%2 : 0) + ".png"} width="640" height="520" />
          <div className="flex flex-col py-1 px-2 text-white">
            <p className="text-black text-md font-bold">Fitness Training</p>
            <p className="font-bold text-md">7 Videos</p>
            <div className="flex w-16 h-px bg-yellow-500"></div>
            <div className="py-1 flex justify-between">
              <p>Enrolled now</p>
              <p>$10</p>
            </div>
          </div>
        </div>
      </a></Link>
    )
  }