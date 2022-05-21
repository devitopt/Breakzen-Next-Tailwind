import Image from 'next/image'

export default function DemoButton(){
	return (
		<div className="flex flex-col items-center">
			<div className="relative flex">
				<div className="hidden md:flex">
					<Image src="/images/circle.png" width="126" height="126" />
				</div>
				<div className="flex md:hidden">
					<Image src="/images/circle.png" width="63" height="63" />
				</div>
				<div className="absolute flex items-center w-full h-full">
					<div className="flex flex-col items-center w-full">
						<div className="hidden md:flex pl-2">
							<Image src="/images/vector_arrow.png" width="35" height="50" />	
						</div>
						<div className="flex md:hidden pl-1">
							<Image src="/images/vector_arrow.png" width="17" height="25" />	
						</div>
					</div>
				</div>
			</div>
			<p className="md:pt-4 text-base md:text-2xl text-white font-bold">
				Demo Video
			</p>
		</div>
	)
}