import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Layout from '../components/layout'
import MainFooter from '../components/mainfooter'
import TopMenu from '../components/topmenu'
import DemoButton from '../components/demobutton'

function TopbarJoin() {
	return (
		<div className="relative flex flex-col md:flex-row items-center w-full">
			<Image src="/images/main_top.png" width="2880" height="1800" />
			<div className="absolute w-full h-full bg-black bg-opacity-30" />
			<div className="z-10 absolute top-0 w-full">
				<TopMenu transparent />
			</div>
			<div className="z-0 absolute flex flex-col md:flex-row bottom-10 md:bottom-auto md:-mt-24">
				<div className="md:order-2 md:w-1/2 pt-20">
					<DemoButton />
				</div>
				<div className="md:order-1 flex flex-col items-center md:w-1/2 md:items-start md:ml-16 text-white">
					<div className="hidden md:flex">
						<Image src="/images/logo2.png" width="1280" height="380" />
					</div>
					<p className="md:hidden py-2 md:py-4 text-2xl md:text-5xl">- ELEVATE YOURSELF -</p>
					<Link href="/your_courses"><a>
						<div className="md:pt-32 flex">
							<div className="flex items-center px-4 md:px-8 py-1 md:py-2 bg-blue-500 rounded-full">
								<p className="pr-4 text-xs md:text-lg">JOIN NOW</p>
								<Image src="/images/right.png" width="15" height="14" />
							</div>
						</div>
					</a></Link>
				</div>
			</div>
			<div pagination className="hidden absolute md:flex flex-col items-center w-full bottom-40">
				<div wrapper className="flex">
					<div className="w-3 h-3 mx-3 rounded-full bg-white"></div>
					<div className="w-3 h-3 mx-3 rounded-full bg-gray-500"></div>
					<div className="w-3 h-3 mx-3 rounded-full bg-gray-500"></div>
					<div className="w-3 h-3 mx-3 rounded-full bg-gray-500"></div>
				</div>
			</div>
		</div>
	)
}

function Li(props) {
	return (
		<div className="flex items-center">
			<div className="flex mr-2 w-2 h-2 bg-white rounded-full"></div>
			<p>{props.title}</p>
		</div>
	)
}

function TopbarDetail() {
	return (
		<div className="relative flex items-center w-full">
			<Image src="/images/main_top_detail.png" width="2880" height="1280" />
			<div demoButton className="absolute flex md:hidden flex-col w-full items-center">
				<div className="flex h-full items-center">
					<DemoButton />
				</div>
			</div>
			<div className="absolute hidden md:flex flex-col w-2/5 right-28 items-center text-white">
				<div className="flex w-full px-20 pb-10">
					<Image src="/images/logo2.png" width="1280" height="380" />
				</div>
				<div className="flex flex-col items-center p-6 text-center text-base font-bold bg-blue-500 rounded-xl">
					<p className="text-lg">
						BREAKZEN is an online marketplace platform for licensed wellness professionals such as certified massage therapists, personal trainers, holistic healers, and Nutritionists.  
					</p>
					<p className="py-4">
						Out top-of-the-line software provides professionals the latest marketing services including:
					</p>
					<div className="flex flex-col items-center">
						<Li title="24/7 Advertisement" />
						<Li title="Client interaction" />
						<Li title="Photos and videos access" />
						<Li title="Customer Reviews" />
						<Li title="and More" />
					</div>
					<div className="pt-4 font-bold"> Read More </div>
				</div>
				</div>
		</div>
	)
}

function TrainItem(props) {
	return (
		<div className="relative flex items-center w-full rounded-md md:rounded-xl overflow-hidden">
			<div className="flex">
				<Image src={props.src} width={props.width} height={props.height} />
			</div>
			<div className="hidden">
				<Image src={props.src} layout="fill" objectFit="cover" />
			</div>
			<div className="absolute w-full h-full bg-blue-500 bg-opacity-30"></div>
			<div className="md:px-4 absolute w-full">
				<p className="text-xs md:text-2xl text-center text-white font-bold">	{props.title} </p>
			</div>
		</div>
	)
}

function InstructorItem(props) {
	return (
		<div className="relative flex items-center w-48 px-2 md:px-0 md:w-full rounded-xl overflow-hidden">
			<Image src={props.src} width={props.width} height={props.height} />
			{props.title &&
			<div className="absolute flex h-full w-full">
				<div className="w-full h-2/5 self-end flex flex-col justify-between py-8 bg-blue-500 bg-opacity-50">
					<p className="text-2xl text-center text-white font-bold">	{props.title} </p>
					<p className="text-lg text-center text-white font-bold">	{props.comment} </p>
				</div>
			</div>
			}
		</div>
	)
}

function TrainDetail(props) {
	return (
		<div className="flex flex-col md:flex-row md:py-12">
			<div picture className={"flex-none flex flex-col w-64 md:w-1/2 md:h-full p-1 md:p-8 " + (props.right ? " md:order-1" : " md:order-2")}>
				<div className={"relative flex rounded-xl overflow-hidden" + (props.right ? " self-start md:ml-16" :" self-end md:mr-16" )}>
					<Image src={props.src} width={props.width} height={props.height} />
					<div button className="absolute hidden md:flex items-center w-full h-full bg-black bg-opacity-30">
						<div className="flex flex-col items-center w-full">
							<DemoButton />
						</div>
					</div>
				</div>
			</div>
			<div content className={"text-white px-2 md:px-8 " + (props.right ? " md:order-2 md:text-right" : " md:order-1")}>
				<p className="text-lg md:text-3xl">
					{props.title}
				</p>
				<p className="text-sm md:text-lg pr-4 md:pr-0 py-2 md:py-4">
					{props.content}
				</p>
				<Link href={props.href}><a>
				<div className="hidden md:flex flex-col">
					<div className={"flex px-6 py-2 bg-blue-500 rounded-full " + (props.right ? " self-end" : "self-start")}>
						Learn More
					</div>
				</div>
				</a></Link>
			</div>
		</div>
	)
}

function BottomBar() {
	return (
		<div className="md:relative flex flex-col md:flex-row items-center w-full">
			<Image src="/images/main_bottom.png" width="2880" height="1300" />
			<div className="hidden absolute md:flex w-1/3 left-28 flex flex-col text-white">
				<div className="flex flex-col items-center md:items-start mt-6 px-12 py-8 bg-blue-600 rounded-3xl md:text-5xl font-bold">
					<p className="leading-tight">FOR EVERYSPACE, AT ANY PACE</p>
					<div className="hidden md:flex w-48 h-1 mt-4 bg-white"></div>
				</div>
				<div className="flex flex-col items-center pt-16">
					<Image src="/images/other_site.png" width="244" height="170" />
				</div>
			</div>
			<div className="md:hidden w-full md:w-2/5 md:left-28 flex flex-col text-white">
				<div className="flex flex-col items-center md:items-start pt-6 text-lg md:text-5xl font-bold">
					FOR EVERYSPACE, AT ANY PACE
				</div>
				<div className="hidden md:flex w-48 h-1 mt-4 mb-10 bg-white"></div>
				<div className="flex flex-col items-center pt-4 text-center md:p-10 text-sm md:text-lg md:bg-fore rounded-xl">
					<p className="px-16 md:px-0">
						A adipiscing pulvinar ipsum, id amet amet. Neque, ipsum et eu donec id urna aliquam. Duis amet aliquet sollicitudin arcu feugiat felis. Tellus vel massa ut suspendisse aliquam dui pretium. 
					</p>
					<div className="flex px-6 md:px-0 mt-6 md:mt-8">
						<div className="px-4">
							<Image src="/images/other_site_1.png" width="198" height="52" />
						</div>
						<div className="px-4">
							<Image src="/images/other_site_2.png" width="198" height="52" />
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default function Homepage_Web() {
	return (
		<div className="bg-back">
			<Head>
				<title> Homepage Web </title>
			</Head>

			<TopbarJoin />

			<div className="flex flex-wrap px-6 md:px-40 -mt-8 md:-mt-24 mb-4 md:mb-20">
				<div className="flex w-1/4 md:w-1/4 p-1 md:p-4">
					<Link href="/instructors_personal"><a>
						<TrainItem src="/images/bottoms_top/trainer.jpg" width="484" height="562" title="PERSONAL TRAINERS" />
					</a></Link>
				</div>
				<div className="flex w-1/4 md:w-1/4 p-1 md:p-4">
					<Link href="/instructors_massage"><a>
						<TrainItem src="/images/bottoms_top/massage.jpg" width="484" height="562" title="MASSAGE THERAPISTS" />
					</a></Link>
				</div>
				<div className="flex w-1/4 md:w-1/4 p-1 md:p-4">
					<Link href="/instructors_healer"><a>
						<TrainItem src="/images/bottoms_top/holistic.jpg" width="484" height="562" title="HOLISTIC HEALERS" />
					</a></Link>
				</div>
				<div className="flex w-1/4 md:w-1/4 p-1 md:p-4">
					<Link href="/instructors_nutrition"><a>
						<TrainItem src="/images/bottoms_top/nutrition.jpg" width="484" height="562" title="NUTRITION ISTS" />
					</a></Link>
				</div>
			</div>

			<TopbarDetail />

			<div className="md:hidden px-6 py-4 pb-10 text-center">
				<p className="pb-4 text-white text-lg font-bold">- FIND WHAT MOVES YOU -</p>
				<p className="px-6 text-white text-sm">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis venenatis facilisi nam consectetur pellentesque non neque aenean. Duis id sem felis leo vitae ipsum.
				</p>
			</div>

			<div className="px-6 md:pt-12 -mx-2 md:px-44">
				<div className="flex overflow-x-auto">
					<div className="flex md:flex-col w-20 md:w-full">
						<TrainDetail title="PERSONAL TRAINER"
							href="/yoga_page"
							content="Search for perosnal trainers near you online, and identify the ones with the hightest ratings. Read their customer testimonials,
								and look at customer's before-and-after photos (if available). It's also important to find out whether the trainers sought professional training
								and certification, if they can adhere to your schedule and if they can train you at a location that works for both of you."
							src="/images/train_1.jpg" width="400" height="233" />
						<TrainDetail right title="MASSAGE THERAPIST" 
							href="/massage_page"
							content="Search for massage therapists near you online, and identify the ones with the hightest ratings. Read their customer testimonials. 
								It's also important to find out whether the massage therapists sought professional training and certification, 
								if they can adhere to your schedule and if they can train you at a location that works for both of you."
							src="/images/train_2.png" width="400" height="233" />
						<TrainDetail title="HOLISTIC HEALER" 
							href="/healing_page"
							content="Search for holistic healers near you online, and identify the ones with the hightest ratings. Read their customer testimonials and look
								at customers' before-and-after pohotos (if available). It's also important to find out whether the coachs sought professional training and certification, 
								if they can adhere to your schedule and if they can train you at a location that works for both of you."
							src="/images/train_3.png" width="400" height="233" />
						<TrainDetail right title="NUTRITIONIST" 
							href="/nutrition_page"
							content="Search for Nutritionists near you online, and identify the ones with the hightest ratings. Read their customer testimonials and look at
								customers' before-and-after photos (if available). It's also important to find out whether the massage therapists sought professional training and certification, 
								if they can adhere to your schedule and if they can train you at a location that works for both of you."
							src="/images/train_4.png" width="400" height="233" />
					</div>
				</div>

				<div className="flex md:hidden flex-col items-center">
						<div className="flex my-8 px-8 py-1 bg-blue-500 text-white text-sm rounded-full">
							EXPLORE CLASSES
						</div>
				</div>

				<div className="flex flex-col items-center md:py-20 px-6 md:px-20 text-white text-center">
					<p className="pb-4 md:pb-0 text-lg md:text-5xl font-bold">MEET OUR INSTRUCTORS</p>
					<p className="px-6 md:px-0 text-sm md:text-lg md:py-10">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac, nec massa felis sem lacus habitant nec. Pulvinar quam pellentesque elit rutrum lacus. Nec in lobortis auctor placerat.
					</p>
					<Link href="/instructors"><a>
					<div className="hidden md:flex">
						<div className="flex px-8 py-1 bg-transparent border border-4 border-fore rounded-full">
							VIEW INSTRUCTORS
						</div>
					</div>
					</a></Link>
				</div>
			</div>

			<div className="flex px-6 pt-6 md:pt-0 md:px-0">
				<div className="flex w-full pb-2 md:pb-0 overflow-x-auto">
					<div instructors className="flex w-20 md:w-full md:px-40">
						<div className="flex md:w-1/4 md:p-4">
							<Link href="/user_profile"><a>
							<InstructorItem src="/images/professionals profiles/0.jpg" width="484" height="628" />
							</a></Link>
						</div>
						<div className="flex md:w-1/4 md:p-4">
							<Link href="/instructor_profile"><a>
							<InstructorItem src="/images/professionals profiles/2.jpg" width="484" height="628" title="JHON CARTER" comment="PERSONAL TRAINER" />
							</a></Link>
						</div>
						<div className="flex md:w-1/4 md:p-4">
							<InstructorItem src="/images/professionals profiles/4.jpg" width="484" height="628" />
						</div>
						<div className="flex md:w-1/4 md:p-4">
							<InstructorItem src="/images/professionals profiles/3.jpg" width="484" height="628" />
						</div>
					</div>
				</div>
			</div>

			<div className="flex md:hidden flex-col items-center">
				<div className="flex my-8 px-8 py-1 bg-blue-500 text-white text-sm rounded-full">
					VIEW INSTRUCTORS
				</div>
			</div>

			<div className="hidden md:flex flex-col items-center pt-10 py-20">
				<Image src="/images/line_gradient.png" width="704" height="3" />
			</div>

			<BottomBar />

			<div className="w-full h-60 mt-6 md:mt-20 flex items-center bg-fore">
				<div className="flex flex-col md:flex-row w-full px-6 md:px-44 items-center justify-between">
					<div className="flex flex-col text-xl md:text-2xl font-bold">
						<p className="text-white md:pb-4"> Ready to get started? </p>
						<p className="text-black"> Sign up or contact us </p>
					</div>
					<div className="flex flex-col md:flex-row pt-6 md:pt-0 text-base md:text-lg font-bold">
						<div className="px-8 py-1 md:mr-8 bg-white rounded-lg">
							Start free trial
						</div>
						<div className="px-8 py-1 mt-2 md:mt-0 bg-transparent border border-black rounded-lg text-center">
							Contact Us
						</div>
					</div>
				</div>
			</div>
			
			<MainFooter transparent />

		</div>
	)
}