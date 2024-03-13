import { HomeIcon } from '@primer/octicons-react'
import Link from 'next/link'
import path from 'path'
import React from 'react'
import ActiveLink from '../active-link/ActiveLink'


const navItems=[
  {path:'/about',text:'About'},
  {path:'/pricing',text:'Pricing'},
  {path:'/contact',text:'Contact'},
]

const Navbar = () => {
  return (
   <nav className='flex bg-blue-800 bg-opacity-30 p-2 m-2 rounded justify-between'>

      <Link href={"/"} className='flex items-center gap-2'>
        <HomeIcon/>
      <span>Home</span>
      </Link>
   
    <div className='flex gap-3'>

      {
        navItems.map(navItems => (

          <ActiveLink key={navItems.path}  {...navItems}/>


        ))
      }

      </div>


   </nav>
  )
}

export default Navbar
