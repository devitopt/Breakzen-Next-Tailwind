import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react';

export default function Photofolia(props) {
	const [linkAddr, setLinkAddr]=useState(["/instructors_personal", "/instructors_healer", "/instructors_massage", "/instructors_nutrition"]);
  return (
	<Link href={(props.id==7) ? linkAddr[props.num] : ""}><a>
		<div className="flex w-full h-full relative border-2 border-fore rounded-tl-3xl rounded-br-3xl overflow-hidden">
				<div className="z-0 flex">
					<Image priority	src={"/images/Professionals Profiles/" + props.id + ".jpg"}	width={props.width}	height={props.height} />
				</div>
				{props.name &&
					<div className="z-10 flex items-center self-end absolute w-full h-2/5 rounded-tl-3xl bg-fore bg-opacity-80">
						<p className="w-full text-base text-center text-white font-bold">
							{props.name}
						</p>
					</div>
				}
		</div>
	</a></Link>
  )
}