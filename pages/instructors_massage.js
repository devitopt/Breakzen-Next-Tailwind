import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Layout from '../components/layout'
import Photofolia from '../components/photofolia'
import MainFooter from '../components/mainfooter'
import {useState} from 'react'

function MainHeader(props) {
	return (
		<div className="flex relative items-center w-full h-64">
			<div className="z-0">
				<Image src={props.src} layout="fill" objectFit="cover" />
			</div>
			<div className="z-10 flex flex-col items-center w-full">
				<div className="px-9 text-center text-white">
					<p className="text-3xl md:text-5xl font-black">
						{ props.title }
					</p>
					<p className="text-center md:text-xl pt-8">
						{ props.comment }
					</p>
				</div>
			</div>
		</div>
	)
}

const instructors = ["Personal Trainers", "Holistic Healers", "Massage Therapist", "Nutritionists"];

export default function Instructors() {
	const [users, setUsers] = useState([[{name: "JOHN CARTER", id: 1}, {id: 2}, {name: "JOHN CARTER", id: 3}, {id: 4}],
																			[{id: 3}, {id: 1}, {id: 2}, {id: 5}],
																			[{id: 6}, {name: "JOHN CARTER", id: 2}, {id: 3}, {id: 4}],
																			[{id: 4}, {name: "JOHN CARTER", id: 1}, {id: 3}, {id: 2}],]);

  return (
    <Layout>
      <Head>
        <title>Massage Therapists</title>
      </Head>
			
			<MainHeader src="/images/top/massage2.jpg" title="MASSAGE THERAPISTS" comment="Find your next professional" />
			
			<div className="flex flex-wrap px-4 md:px-40 py-4 md:mt-12 md:mb-8">
				{users.map((rows, index) => (
					<div className="flex flex-col">
						<p className="text-white text-3xl font-bold px-4">
							
						</p>
						<div className="flex flex-wrap">
							{rows.map((user, num) => (
								<div className="w-1/2 md:w-1/4 px-4 py-4">
									<Photofolia src="/images/user.jpg" width="480" height="480" num={index} id={user.id} name={user.name && user.name} />
								</div>
							))}
						</div>
					</div>
				))}
			</div>
			
			<MainFooter />
    
		</Layout>
  )
}
