import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

function MenuItem(props) {
	return (
		<Link href="">
			<a>
				<div className="px-5 text-white">
					{ props.title }
				</div>
			</a>
		</Link>
	)
}

function LinkMenuItem(props) {
	return (
		<Link href="">
			<a>
				<div className="flex items-center w-8 h-8 mx-4 border-2 border-fore rounded-full overflow-hidden">
					<div imageWrapper className="flex mx-auto">
						<Image
							priority
							src={props.src}
							width={props.width}
							height={props.height}
						/>
					</div>
				</div>
			</a>
		</Link>
	)
}

export default function MainFooter(props) {
	return (
		<div className={"hidden md:flex flex-col items-center w-full " + (props.transparent ? " bg-transparent" : " bg-black") }>
		<div className="flex items-center text-md text-white font-medium pt-24">
			<MenuItem title="Policy" />
			<MenuItem title="Features" />
			<MenuItem title="Resources" />
			<Link href="">
				<a>
					<div className="px-8 flex">
						<Image priority	src="/images/Breakzen Elevate.png" width="186"	height="52"	/>
					</div>
				</a>
			</Link>
			<MenuItem title="About" />
			<MenuItem title="Blog" />
			<MenuItem title="Support" />
		</div>
		<div className="flex-col items-center w-full px-56 pt-8">
			<div className="w-full h-1 bg-gray-500 rounded-full"></div>
		</div>
		<div className="flex items-center text-md text-white font-medium pt-12">
			<LinkMenuItem src="/images/linkItem1.png" width="13" height="22" />
			<LinkMenuItem src="/images/linkItem2.png" width="27" height="26" />
			<LinkMenuItem src="/images/linkItem3.png" width="24" height="24" />
		</div>
		<div className="pt-16 pb-8 text-white">
			&copy; 2010 - 2020 Privacy - Terms
		</div>
	</div>
	)
}