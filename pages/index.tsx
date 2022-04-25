import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import LayoutComponent from '../components/layout'
import styles from '../styles/Home.module.css'

//components
const Home: NextPage = () => {

  const Router = useRouter()
  useEffect(
    () => {
      if(localStorage.getItem("access_token") !== null) 
      {
        Router.push('/leaderboard')
      }
    }, []
  )
  return (
    <LayoutComponent />
  )
}

export default Home
