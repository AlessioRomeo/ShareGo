import Head from 'next/head'
import Image from 'next/image'
import SideMenu from '../src/components/SideMenu'
import Feed from '../src/components/Feed'

export default function Home() {
  return (
    <>
      <SideMenu/>
        <Feed/>
    </>
  )
}
