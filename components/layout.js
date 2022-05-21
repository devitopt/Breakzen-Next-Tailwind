import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import TopMenu from './topmenu'

export default function Layout({ children, index }) {
	
  return (
    <div className="bg-back">
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>

		  <TopMenu />

			{children}

    </div>
  )
}