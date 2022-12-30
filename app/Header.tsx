import {Bars3Icon} from '@heroicons/react/24/solid'
import Link from 'next/link'
import DarkModeButton from './DarkModeButton'
import NavLinks from './NavLinks'
import SearchBox from './SearchBox'

function Header() {
  return (
    <header>
        <div className='grid grid-cols-3 p-10 items-center'>
            <Bars3Icon className= 'h-8 w-8 cursor-pointer' />
            <Link href='/' prefetch={false}>
            <h1 className='font-serif text-4xl text-center'>THE BROOKLYN TIMES</h1>
            </Link>

            <div className='flex space-x-9  items-center mr-2  justify-end '>
                <DarkModeButton/>
               
                <button className='hidden md:inline bg-slate-900 text-white px-2 
                lg:px-8 py-2 lg:py-4 rounded-full dark:bg-slate-800'>
                    Subscribe
                </button>
            </div>

        </div>

        <NavLinks />

        <SearchBox />


    </header>
  )
}

export default Header