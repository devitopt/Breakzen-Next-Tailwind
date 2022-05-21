import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

function MenuItem(props) {
	return (
		<Link href={props.href}>
			<a>
				<div className={"px-6 py-2 md:px-12 md:py-0" + (props.selected ? " text-fore" : "")}>
					{ props.title }
				</div>
			</a>
		</Link>
	)
}

function MainMenu() {
	return (
		<div className="flex flex-col md:flex-row md:items-center text-base md:text-lg text-white font-medium md:font-bold">
			<MenuItem title="Instructor" href="/instructors" selected />
			<MenuItem title="Online Tranining" href="/yoga_page" />
			<MenuItem title="Contact us" href="" />
		</div>
	)
}

const hamMenu =	[ {title:"EXPLORE", items:["YOGA", "HOLISTIC HEALING", "MEASSURE", "NUTRITIONIST"], href:"/your_course" },
									{title:"CONTACT US", items:[], href:"/instructor_dashboard" },
									{title:"COURSES", items:[], href:"/your_courses" },
									{title:"LOG OUT", items:[], href:"/" },
									{title:"FREE TRIAL", items:[], href:"/user_profile" }
								];

function HamburgerMenuItem(props) {
	return (
		<div className="flex flex-col">
			<Link href={props.href}>
				<a>
					<p className="py-3 text-lg font-medium"> {props.title} </p>
				</a>
			</Link>
			{props.items &&
				props.items.map((element, index) => (
					<Link href={props.href}>
						<a>
							<p className={"py-3 text-sm " + (index==0 && " text-fore")}> {element} </p>
						</a>
					</Link>
				))
			}
			<div className="w-full h-0.5 my-3 bg-gray-700"></div>
		</div>
	)
}

function HamburgerMenu() {
	return (
		<div className="flex flex-col px-6 text-white bg-back">
			{hamMenu.map((element) => (
				<HamburgerMenuItem {...element} />
			))}
		</div>
	)
}

export default function TopMenu(props) {
	const [navMenu, setNavMenu] = useState(false);
	const navMenuClick = () => {
		setNavMenu(navMenu ? false : true);
	}

  return (
    <div className={props.transparent ? "bg-transparent" : "bg-back"}>
        <div className="hidden md:flex justify-between h-24 pl-6 pr-16 z-40">
			<Link href="/homepage_web"><a>
				<div className="pt-6">
					<Image src="/images/logo.png"	width="39" height="38" />
				</div>
			</a></Link>
            <div className="flex items-center">
                <MainMenu />
                <Link href="/instructor_dashboard">
                    <a>
                        <div className="flex ml-52 border-2 border-fore rounded-full overflow-hidden">
                            <Image src="/images/logoUser.png"	width="40" height="40" />
                        </div>
                    </a>
                </Link>
            </div>
        </div>
        
        <div className="md:hidden flex items-center justify-between h-8 px-4">
			<Link href="/homepage_web"><a>
				<div className="flex items-center">
					<Image src="/images/breakzen elevate_.png" width="115" height="24" />
				</div>
			</a></Link>
            <a onClick={()=>navMenuClick()}>
                <div imageWrapper className="flex">
                    <Image 
                        src={ navMenu ? "/images/cancel.png" : "/images/ham-menu.png" } 
                        width="18"
                        height={ navMenu ? "18" : "12" } 
                    />
                </div>
            </a>
        </div>
        
        { navMenu && <HamburgerMenu /> }

    </div>
  )
}