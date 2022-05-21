import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Layout from '../components/layout'
import MediaItem from '../components/mediaitem'
import DemoButton from '../components/demobutton'

function LinkItem(props) {
	return (
		<Link href={props.href}>
			<a>
				<div className={"px-4 py-1 mx-4 md:mx-6 rounded-full " + (props.selected && " bg-yellow-500 md:bg-blue-600")}>
					{props.title}
				</div>
			</a>
		</Link>
	)
}

function MainHeader() {
	return (
		<div className="flex relative w-full md:h-96 overflow-hidden">
			<div className="z-0 w-full">
				<div className="hidden md:flex">
					<Image priority	src="/images/top/yoga.jpg" layout="fill" objectFit="cover" />
				</div>
				<div className="flex md:hidden">
					<Image priority	src="/images/top/yoga.jpg" width="7360" height="4912" />
					<div className="absolute w-full h-full bg-black bg-opacity-30" />
				</div>
			</div>
			<div className="z-10 flex flex-col items-center absolute w-full">
				<div className="px-9 pt-16 md:pt-28 text-center text-white">
					<p className="text-xl md:text-5xl font-black">
						ENERGIZE YOUR BODY WORKING OUT
					</p>
					<p className="pt-4 md:pt-8 text-center">
						
					</p>
				</div>
				<div className="flex md:hidden items-center pt-8 md:pt-20 text-sm md:text-lg text-white font-bold">
					<LinkItem href="" title="Personal Trainer" selected />
				</div>
				<div className="md:flex hidden items-center pt-8 md:pt-20 text-sm md:text-lg text-white font-bold">
					<LinkItem href="yoga_page" title="Personal Trainer" selected />
					<LinkItem href="healing_page" title="Holistic Healing" />
					<LinkItem href="massage_page" title="Massage Therapist" />
					<LinkItem href="nutrition_page" title="Nutritionist" />
				</div>
			</div>
		</div>
	)
}

function TopBar() {
	return (
		<div className="flex relative w-full md:h-96 mt-16 overflow-hidden">
			<div className="z-0 w-full">
				<div className="hidden md:flex">
					<Image priority	src="/images/instructor.png" layout="fill" objectFit="cover" />
				</div>
				<div className="flex md:hidden">
					<Image priority	src="/images/instructor.png" width="1656" height="1112" />
					<div className="absolute w-full h-full bg-black bg-opacity-30" />
				</div>
				<div className="absolute w-full h-full bg-black bg-opacity-20" />
			</div>
			<div className="z-10 absolute flex flex-col md:w-1/2 md:pl-24 text-center md:text-left">
				<div className="pt-6 text-white">
					<p className="text-xl md:text-5xl font-black">
						FLOW WITH TOP INSTRUCTORS
					</p>
					<p className="pt-4 md:pt-8">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					</p>
				</div>
				<div className="md:hidden">
					<DemoButton />	
				</div>
				<div className="flex flex-col md:flex-row items-center pt-2 md:pt-20 text-sm md:text-lg text-white font-bold">
					<Link href="">
						<a>
							<div className="px-4 py-1 rounded-full bg-yellow-500 md:bg-blue-600">
								Check Instructors
							</div>
						</a>
					</Link>
				</div>
			</div>
		</div>
	)
}

function SectItem(props) {
	return (
		<div className="flex w-56 pb-2 md:w-1/4 px-2 md:px-8">
			<div className="flex flex-col">
				<p className="text-base md:text-lg font-bold">
					{props.title}
				</p>
				<p className="text-sm md:text-base pt-4">
					{props.content}
				</p>
			</div>
		</div>
	)
}

function Demo() {
	return (
		<div className="flex px-0 md:px-24">
			<div className="relative flex w-full">
				<Image src="/images/demo.png" width="1726" height="918" />
				<div className="absolute flex items-center w-full h-full">
					<div className="flex flex-col w-full items-center">
						<DemoButton />
					</div>
				</div>
			</div>
		</div>
	)
}

function TrainDetail(props) {
	return (
		<div className="flex mr-4 md:mr-0">
			<div className="flex flex-col w-64 md:w-full md:flex-row md:py-20">
				<div picture className={"flex relative " + (props.right ? " md:order-1" : " md:order-2")}>
					<div className={"hidden md:block " + (props.right ? " pr-20" : " pl-20")}>
						<div className="flex w-96 h-60 bg-transparent"></div>
					</div>
					<div className={"md:absolute top-12 " + (props.right ? " left-10" : " right-10")}>
						<Image src={props.src} width={props.width} height={props.height} />
					</div>
				</div>
				<div detail className={"flex flex-col text-white " + (props.right ? " md:order-2 md:pl-40 md:items-end md:text-right" : " md:order-1 md:pr-40")}>
					<p className="text-lg md:text-3xl">{props.title}</p>
					<p className="text-sm md:text-base pr-4 md:pr-0 py-2 md:py-2">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
					</p>
					<p className="hidden m:block text-sm md:text-base pr-4 md:pr-0 md:py-2">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
					</p>
					<p className="hidden md:block py-2 text-sm text-gray-500">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
					</p>
					<div className="flex">
						<div className="flex px-4 py-1 my-2 text-sm md:text-base bg-blue-500 rounded-full">
							Learn More
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default function Yoga_Page() {
	return (
		<Layout>
			<Head>
				<title> Yoga Page </title>
			</Head>

			<MainHeader />

			<div yogaClasses className="px-6 md:px-16 pt-12">
				<div comment className="md:pr-96 text-white">
					<p className="text-3xl md:text-5xl font-bold">
						WORKING OUT CLASSES
					</p>
				</div>
				<div media className="flex w-full overflow-x-auto md:-mx-4 pt-4">
					{[1, 2, 3, 4, 5].map((num) => (
						<div className="flex w-1/2 md:w-1/5 pr-4 pb-4 md:p-4">
							<MediaItem num={num} />
						</div>
					))}
				</div>
			</div>

			<TopBar />

			<div mainContent className="px-6 md:px-44 pt-12 text-white">
				<div topComment className="md:w-1/3">
					<p className="text-2xl font-bold">
						HOW IT WORKS
					</p>
					<p className="pt-2">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas eu in ullamcorper eget. 
					</p>
				</div>
				<div sectOf4 className="flex md:-mx-8 pt-8 md:pt-20 overflow-x-auto">
					<div className="flex md:w-full">
						<SectItem title="Sign up to unlock live and on-demand classes" content="Choose a monthly or annual membership to get full access." />
						<SectItem title="Get custom workout recommendations" content="Choose a monthly or annual membership to get full access." />
						<SectItem title="Choose from 20+ styles of classes" content="Choose a monthly or annual membership to get full access." />
						<SectItem title="Connect with others in real time" content="Choose a monthly or annual membership to get full access." />
					</div>
				</div>

				<div className="w-1/2 h-0.5 mx-auto my-8 md:my-12 bg-yellow-500 md:bg-blue-600" />

				<Demo />

				<div detailTitle className="hidden md:flex flex-col w-full items-center pt-12 text-white">
					<p className="text-3xl font-black">
						YOUR STUDIO ON THE GO
					</p>
					<p className="pt-2">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					</p>
				</div>

				<div details className="mt-8 md:mt-0 flex overflow-x-auto">
					<div className="flex md:flex-col w-20 md:w-full">
						<TrainDetail title="Unlock classes designed for your practice" src="/images/train_1.png" width="400" height="233" />
						<TrainDetail right title="Access classes anytime, anywhere, form any device" src="/images/train_2.png" width="400" height="233" />
					</div>
				</div>
			</div>

		</Layout>
	)
}