import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Layout from '../components/layout'
import MainHeader_Train from '../components/mainheader_train'
import MediaItem from '../components/mediaitem'

function Photofolia(props) {
  return (
	<Link href=""><a>
		<div className="flex w-full h-full relative border-2 border-fore rounded-tl-3xl rounded-br-3xl overflow-hidden">
				<div className="z-0 flex">
					<Image priority	src={props.src}	width={props.width}	height={props.height} />
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

function CourseInfo() {
	return (
		<div className="flex flex-col -mt-8">
			<div top className="flex flex-col items-center md:w-40 text-white">
				<Link href="/your_course"><a>
				<div media className="flex w-40 h-32 md:h-60">
					<Photofolia src="/images/training_2.png" width="185" height="259" />
					<div className="absolute flex items-center w-40 h-32 md:h-60">
						<div className="flex w-40 flex-col items-center">
							<div className="flex">
								<Image src="/images/play.png" width="76" height="76" />
							</div>
						</div>
					</div>
				</div>
				</a></Link>
				<div star className="flex pt-4">
					{[1, 2, 3, 4, 5].map((num) => (
						<div className="flex px-1">
							<Image
								priority
								src="/images/star.png"
								width="21"
								height="22"
							/>
						</div>
					))}
				</div>
				<div review className="flex items-center justify-between pt-4 text-sm">
					<div className="pr-4">( 36 reviews )</div>
					<Image priority src="/images/bucket.png" width="22" height="20" />
				</div>
				<div button className="flex md:flex-col items-center pt-4">
					<Link href="/course_purchased">
						<a>
							<div className="px-4 py-1 mx-4 my-2 text-sm md:text-md rounded-full bg-green-500 md:bg-yellow-500 md:bg-fore">
								Buy Now $10
							</div>
						</a>
					</Link>
				</div>
			</div>
			<div bottom className="hidden md:flex w-40 h-48 mt-16">
				<Photofolia src="/images/fitness.png" width="346" height="425" />
				<div className="absolute flex items-center w-40 h-48">
					<div className="flex flex-col items-center w-full">
						<div className="flex px-2 py-1 bg-blue-500 rounded-full text-xs text-white">
							More Courses
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

function CourseItem() {
	return (
		<div className="flex flex-col">
			<p className="font-bold text-sm">Lesson1</p>
			<div className="flex flex-row justify-between text-xs">
				<p>Lorem ipsum dolor sit amet</p>
				<div className="flex items-center">
					<div imageWrapper className="flex pr-2">
						<Image src="/images/clock.png" width="9" height="8" />
					</div>
					<p>5min 30sec</p>
				</div>
			</div>
		</div>
	)
}

function CourseList() {
	return (
		<div className="flex flex-col w-full p-4 bg-fore rounded-xl">
			{[1, 2, 3, 4, 5].map((num) => (
				<div wrapper className="flex flex-col">
					<CourseItem />
					{num<5 && <div className="flex w-full h-px bg-gray-500 mt-1 mb-2"></div>}
				</div>
			))}
		</div>
	)
}

function CommentItem(props) {
	return (
		<div className="flex items-center py-1">
			<div imageWrapper className="flex pr-4">
				<Image src="/images/ellipse.png" width="10" height="10" />
			</div>
			<p>{props.content}</p>
		</div>
	)
}

function CourseComment() {
	return (
		<div className="flex flex-col w-full bg-fore p-4 rounded-xl">
			<div className="flex flex-col items-center pb-2 text-xl font-bold">
				This course includes:
			</div>
			<div className="flex flex-col px-4 text-lg">
				<CommentItem content="11 hours on-demand video" />
				<CommentItem content="5 articles" />
				<CommentItem content="4 downloadable resources" />
				<CommentItem content="Full lifetime access" />
				<CommentItem content="Access on mobile and TV" />
				<CommentItem content="Certificate of completion" />
			</div>
		</div>
	)
}

export default function Course_Discription() {
  return (
    <Layout>
      <Head>
        <title>Instructors</title>
      </Head>

			<MainHeader_Train nobutton src="/images/course.png" width="1656" height="1104" title="Fitness Training" comment="Lorem ipsum dolor sit amet adipiscing elit." />
		
			<div className="w-full flex flex-col md:flex-row md:px-44">
				<CourseInfo />
				<div rightSect className="flex flex-col w-full px-6 md:px-0 mt-8 md:pl-16 text-white">
					<div courseContent className="order-2 md:order-1">
						<p title className="mt-8 md:mt-0 font-bold text-lg">Course Content</p>
						<div splitter className="flex w-8 h-0.5 mt-1 mb-4 bg-yellow-500 md:bg-blue-500"></div>
						<div content className="flex flex-col md:flex-row">
							<div className="md:w-1/2 mt-4 md:mt-0 md:pr-8">
								<CourseList />
							</div>
							<div className="md:w-1/2 mt-8 md:mt-0 md:pl-8">
								<CourseComment />
							</div>
						</div>
					</div>
					<div discription className="order-1 md:order-2 md:mt-4">
						<p className="font-bold text-lg">Description</p>
						<div splitter className="flex w-8 h-0.5 mt-1 mb-4 bg-yellow-500 md:bg-blue-500"></div>
						<div className="text-sm md:text-lg">
							<p className="pb-4"> 
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Senectus nibh aliquam nullam purus fames. Odio ultrices tristique amet in amet, odio habitasse felis. Pharetra molestie at et id orci vitae commodo. Tincidunt venenatis dui pretium, augue rutrum.
							</p>
							<p> 
								Nulla amet a nulla purus metus sed. Hac egestas ullamcorper aliquet condimentum et. Et faucibus bibendum dolor sit enim, augue mauris. In tellus dictumst in lectus urna. Erat pharetra nibh tincidunt scelerisque eget lacus. Habitant volutpat montes eu.
							</p>
						</div>
					</div>
				</div>
				<p className="md:hidden px-6 py-4 pb-2 mt-4 font-bold text-lg text-white">More courses</p>
				<div splitter className="flex md:hidden w-8 h-0.5 mx-6 mt-1 mb-4 bg-yellow-500"></div>
				<div className="flex md:hidden flex-row overflow-x-auto mx-6 pb-2 text-white">
					<div className="flex w-20 h-full">
						{[1, 2, 3, 4, 5, 6].map((num) => (
						<div className="flex md:w-1/3 mr-4">
							<MediaItem />
						</div>
						))}
					</div>
				</div>
			</div>
			<div className="h-4 md:h-12"></div>
		</Layout>
  )
}