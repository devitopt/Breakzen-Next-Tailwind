import React from "react"
import Image from "next/image"
import Link from "next/link"
import Calendar from "react-calendar"
import Head from "next/head"
import TopMenu from "../components/topmenu"

function MenuItem(props) {
	return (
		<Link href={props.href}>
			<a>
				<div className={"flex items-center px-4 " + (props.selected ? " py-2 mb-2 text-blue-500 bg-white rounded-full md:rounded-lg" : " py-4")}>
					
					<Image
						priority
						src={props.src}
						alt=""
						width={props.width}
						height={props.height}
					/>
					<div className="hidden md:flex pl-4">
						<p> {props.title} </p>
					</div>
				</div>
			</a>
		</Link>
	)
}

function LeftSide() {
	return (
		<div className="hidden md:flex flex-none w-64 py-10 bg-blue-500 flex-wrap">
		
		<div className="mx-auto">
			<Link href="/homepage_web"><a>
				<p className="text-2xl font-bold text-white">BREAKZEN</p>
			</a></Link>
		</div>
		
		<div className="ml-8 mt-8 text-white">
			<MenuItem href="" src="/images/item (1).png" width="22" height="21" title="Dashboard" selected />
			<MenuItem href="/user_profile" src="/images/item (2).png" width="19" height="21" title="Account" />
			<MenuItem href="/invoice" src="/images/item (3).png" width="24" height="24" title="Finance" />
			<MenuItem href="" src="/images/item (4).png" width="27" height="20" title="Invite Friends" />
			<MenuItem href="/" src="/images/item (5).png" width="22" height="21" title="Log Out" />
		</div>
		<div className="self-end mx-auto">
			<div className="w-full mb-2 flex items-center">
				<div className="flex items-center mx-auto text-white font-bold text-md">
					<Link href="">
						<a>
							<Image src="/images/pos.png" alt="" width="24" height="24" />
						</a>
					</Link>
					<div className="px-4"> My Location </div>
					<Link href="">
						<a>
							<Image src="/images/edit.png" alt="" width="16"	height="16" />
						</a>
					</Link>
				</div>
			</div>
			<div className="flex rounded-xl overflow-hidden">
				<Image src="/images/googlemap.png" alt=""	width="206"	height="281" />
			</div>
		</div>
	</div>
	)
}

function Header() {
	return (
		<div className="flex-none h-28 w-full flex items-center">
			<div className="">
				<p className="text-2xl font-bold text-white">Dashboard</p>
			</div>
			<div className="w-full h-full">
				<div className="float-right h-full flex items-center">
					<div className="px-6 flex items-center">
						<Image
							priority
							src="/images/Group (1).png"
							alt=""
							width="20"
							height="20"
						/>
					</div>
					<div className="px-6 flex items-center">
						<Image
							priority
							src="/images/Group (2).png"
							alt=""
							width="24"
							height="24"
						/>
					</div>
					<div className="px-6 flex items-center">
						<Image
							priority
							src="/images/Group (3).png"
							alt=""
							width="20"
							height="20"
						/>
					</div>
					<div className="pl-6 flex items-center">
						<p className="text-lg text-white font-bold"> Mr Smith </p>
					</div>
					<div className="pl-2 flex items-center relative">
						<Image
							priority
							src="/images/avatar.png"
							alt=""
							width="52"
							height="52"
						/>
						<div className="absolute w-2 h-2 left-12 top-1 rounded-md bg-green-400">
							{" "}
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

function Appointment() {
	return (
		<div>
			<div className="flex-grow w-full flex items-center">
				<div className="w-full">
					<p className="text-md font-bold text-white">My Appointments</p>
				</div>
				<div className="w-full h-full">
					<div className="float-right h-full flex items-center">
						<div className="py-1 px-2 rounded bg-blue-500 flex items-center">
							<Image
								priority
								src="/images/leftarrow.png"
								alt=""
								width="15"
								height="14"
							/>
						</div>
						<div className="ml-6 py-1 px-2 rounded bg-blue-500 flex items-center">
							<Image
								priority
								src="/images/rightarrow.png"
								alt=""
								width="15"
								height="14"
							/>
						</div>
					</div>
				</div>
			</div>
			<div className="flex-grow py-4 flex justify-between text-sm h-2/12">
				<div className="bg-blue-300 px-4 py-2 rounded-xl flex items-center justify-between w-1/2 mr-4 text-sm">
					<div>
						<p> From </p>
						<p> 3:30 PM </p>
					</div>
					<div className="flex items-center">
						<Image
							priority
							src="/images/cancel.png"
							alt=""
							width="10"
							height="10"
						/>
					</div>
				</div>
				<div className="bg-blue-300 px-4 py-2 rounded-xl flex items-center justify-between w-1/2 text-sm">
					<div>
						<p> To </p>
						<p> 4:30 PM </p>
					</div>
					<div className="flex items-center">
						<Image
							priority
							src="/images/cancel.png"
							alt=""
							width="10"
							height="10"
						/>
					</div>
				</div>
			</div>
		</div>
	)
}

function UserProfile() {
	return (
		<div className="flex-grow bg-white rounded-lg p-4 px-8 flex flex-col items-center">
			<Image
				priority
				src="/images/Rectangle 19.png"
				alt=""
				width="114"
				height="114"
			/>
			<div className="flex items-center mx-auto text-black font-bold text-md">
				<div className="pr-4 py-2"> Wilson Smith </div>
				<Link href="">
					<a>
						<Image
							priority
							src="/images/edit-black.png"
							alt=""
							width="16"
							height="16"
						/>
					</a>
				</Link>
			</div>
			<div className="w-full py-2  flex justify-around font-medium">
				<div>Balance</div>
				<div>$0.00USD</div>
			</div>
			<div className="w-full flex items-center text-sm text-center">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget eros
				dignissim sit sit sapien. Pellentesque libero aliquam platea sit.
				Velit integer condimentum tellus sit enim.
			</div>
		</div>
	)
}

function Gallery() {
	return (
		<div gallery className="pt-8 md:py-8 flex flex-col md:flex-row justify-between">
			<div className="bg-blue-100 p-4 pt-2 rounded-xl md:mr-2">
				<p className=""> My Gallery </p>
				<div className="flex items-center pt-2">
					<div wrapper classname="flex">
						<Image priority	src="/images/Rectangle 15.png" width="240" height="148"/>
					</div>
					<div className="px-4">
						<Image priority src="/images/Rectangle 16.png" alt="" width="240" height="148"	/>
					</div>
					<div className="p-1 bg-blue-200 rounded-full flex items-center">
						<Image priority src="/images/plus.png" alt="" width="12" height="12" />
					</div>
				</div>
			</div>
			<div className="bg-blue-100 mt-4 md:mt-0 p-4 pt-2 rounded-xl md:ml-2">
				<p className=""> My Online Training </p>
				<div className="flex items-center pt-2">
					<div className="flex">
						<Image priority src="/images/Rectangle 17.png" alt="" width="240" height="148" />
					</div>
					<div className="flex px-4">
						<Image priority src="/images/Rectangle 18.png" alt="" width="240" height="148" />
					</div>
					<div className="p-1 bg-blue-200 rounded-full flex items-center">
						<Image priority src="/images/plus.png" alt="" width="12" height="12" />
					</div>
				</div>
			</div>
		</div>
	)
}

export default function Instructor_Dashboard() {
  return (
		<div className="flex w-full flex-col md:flex-row">
			<div className="w-full md:hidden">
				<TopMenu />
			</div>
			<LeftSide />
			<div className="flex-grow flex flex-col md:px-8 pb-10 bg-back">
				<div className="hidden md:flex">
					<Header />
				</div>
				<div mainContent className="flex-grow w-full flex flex-col md:flex-row">
					<div leftContent className="w-full md:w-4/6">
						<div introBar className="md:hidden relative flex flex-col flex-grow bg-fore md:rounded-xl overflow-hidden">
							<div className="relative flex self-end">
								<Image src="/images/intro.png" width="375" height="185" />
							</div>
							<div className="absolute top-4 left-4 flex flex-col justify-between">
								<p className="text-xl md:text-white font-bold"> Hello! Mr Smith </p>
								<div className="hidden md:flex md:w-2/5 md:text-white font-bold text-xs pr-4 md:pr-0 py-4">
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim
									congue pulvinar nisl netus sed arcu et nibh viverra lacus magna
									scelerisque.
								</div>
								<div className="hidden md:flex">
									<Link href="">
										<a>
											<div className="flex items-center px-4 py-1 text-leftside bg-yellow-500 rounded-lg">
												<p className="text-white text-sm"> Read More... </p>
											</div>
										</a>
									</Link>
								</div>
							</div>
						</div>
						<div className="hidden md:flex flex-col md:flex-row px-6 md:px-0">
							<div className="flex md:w-3/5 md:pr-8">
								<UserProfile />
							</div>
							<div className="flex flex-col md:w-2/5 font-medium rounded-lg bg-white p-4">
								<p className="text-lg text-center font-bold pb-3">
									Availability
								</p>
								<div className="flex justify-between w-full py-1">
									<p>Monday</p>
									<p>8.00am-5.00pm</p>
								</div>
								<div className="flex justify-between w-full py-1">
									<p>Tuesday</p>
									<p>8.00am-5.00pm</p>
								</div>
								<div className="flex justify-between w-full py-1">
									<p>Wednesday</p>
									<p>8.00am-5.00pm</p>
								</div>
								<div className="flex justify-between w-full py-1">
									<p>Thursday</p>
									<p>8.00am-5.00pm</p>
								</div>
								<div className="flex justify-between w-full py-1">
									<p>Friday</p>
									<p>8.00am-5.00pm</p>
								</div>
								<div className="flex justify-between w-full py-1">
									<p>Saturday</p>
									<p>8.00am-5.00pm</p>
								</div>
							</div>
						</div>
						<div className="flex md:hidden items-center justify-between mx-6 my-4">
							<MenuItem href="" src="/images/item (1).png" width="22" height="21" title="Dashboard" selected />
							<MenuItem href="/user_profile" src="/images/item (2).png" width="19" height="21" title="Account" />
							<MenuItem href="/invoice" src="/images/item (3).png" width="24" height="24" title="Finance" />
							<MenuItem href="" src="/images/item (4).png" width="27" height="20" title="Invite Friends" />
							<MenuItem href="/" src="/images/item (5).png" width="22" height="21" title="Log Out" />
						</div>
						<div className="flex md:hidden mx-6 mb-6">
							<UserProfile />
						</div>
						<div className="hidden md:flex">
							<Gallery />
						</div>
						<div discription className="flex-grow">
							<p className="mb-2 px-6 md:px-4 text-md text-white font-bold">
								My Discription
							</p>
							<div className="md:p-4 mx-6 md:mx-0 flex flex-col md:flex-row md:bg-blue-100 rounded-xl">
								<div className="md:w-4/6 md:mr-8 p-4 md:p-0 flex items-center bg-blue-100 rounded-xl">
									<p>
										Lorem ipsum dolor sit amet, consectetur adipiscing elit.
										Feugiat sed maecenas dui sagittis aliquam volutpat pulvinar.
										Enim, massa tellus sagittis pulvinar in luctus nisl varius
										justo. Tempor ac laoreet amet vitae viverra sed hendrerit at.
										Leo aenean vitae eu eget eu egestas cras massa cras.
									</p>
								</div>
								<div className="md:hidden">
									<Gallery />
								</div>
								<div className="md:ml-4 flex flex-col w-1/2 md:w-2/6">
									<div className="w-full">
										<p className="mb-2 mt-4 md:mt-0 text-white md:text-black md:text-sm">My Services</p>
										<div className="p-2 w-full flex flex-col bg-blue-300 rounded-lg md:text-xs">
											<div className="flex items-center">
												<div className="w-1 h-1 bg-white rounded"> </div>
												<div className="px-2 pb-1"> Personal Diets </div>
											</div>
											<div className="flex items-center">
												<div className="w-1 h-1 bg-white rounded"> </div>
												<div className="px-2 pb-1"> Personal Diets </div>
											</div>
											<div className="flex items-center">
												<div className="w-1 h-1 bg-white rounded"> </div>
												<div className="px-2 pb-1"> Personal Diets </div>
											</div>
										</div>
									</div>
									<div className="mt-2">
										<p className="mb-2 text-white md:text-black md:text-sm"> My Certificates </p>
										<div className="p-2 w-full flex flex-col bg-blue-300 rounded-lg md:text-xs">
											<div className="flex items-center">
												<div className="w-1 h-1 bg-white rounded"> </div>
												<div className="px-2 pb-1"> Personal Diets </div>
											</div>
											<div className="flex items-center">
												<div className="w-1 h-1 bg-white rounded"> </div>
												<div className="px-2 pb-1"> Personal Diets </div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="md:w-2/6 md:ml-8 px-6 mt-4 md:mt-0 md:px-0 flex flex-col">
						<Appointment />
						<div className="bg-white rounded-lg p-4 py-8 mt-4 md:mt-0 mb-4 text-sm">
							<Calendar value={new Date()} calendarType="US" />
						</div>
						<div className="hidden">
							<UserProfile />
						</div>
						<p className="text-lg font-bold text-white text-center py-4 md:py-8">
							Work Offers
						</p>
						<div className="flex flex-col mx-auto rounded-lg w-64 bg-blue-500 text-white font-medium text-lg p-4 mb-8 md:mb-0">
							<li className="py-2">Nutritionist</li>
							<li className="py-2">Yoga Instructor</li>
							<li className="py-2">Personal Trainer</li>
							<p className="text-center py-2 font-bold">See more</p>
						</div>
					</div>
					<div className="flex md:hidden px-6 w-full h-64 flex-col">
						<div className="w-full mb-2 flex items-center">
							<div className="flex items-center mx-auto text-white font-bold text-md">
								<Link href="">
									<a>
										<Image src="/images/pos.png" alt="" width="24" height="24" />
									</a>
								</Link>
								<div className="px-4"> My Location </div>
								<Link href="">
									<a>
										<Image src="/images/edit.png" alt="" width="16"	height="16" />
									</a>
								</Link>
							</div>
						</div>
						<div className="flex rounded-xl overflow-hidden">
							<Image src="/images/googlemap.png" alt=""	width="412"	height="562" />
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}