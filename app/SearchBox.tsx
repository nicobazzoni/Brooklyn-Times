
"use client"

import { useRouter } from "next/navigation"
import { FormEvent, useState } from "react"


function SearchBox() {
  const [input, setInput] = useState('')
  const router = useRouter()  

  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!input) return; 

    router.push(`/search?term=${input}`)
  }





  return (
    <form 
    onSubmit={ handleSearch}
    className="max-w-6x  mx-auto flex justify-between items-center px-5 "> 
      <input 
      type='text' 
      value={input}
      onChange={(e) => setInput(e.target.value)}
      placeholder="Search Keywords"
      className='flex-1 w-full h-14 rounded-sm 
      placeholder-gray-500 text-gray-500 outline-none 
      bg-transparent dark:text-white-900 ' />
      
      <button 
      type='submit'
      disabled={!input}
      className='bg-red-900 text-white 
      px-4 lg:px-6  lg:py-4  lg:mt-11
      rounded-full dark:bg-red-800 left-20 '


      
      >
        Search


      </button>

    </form>
  )
}

export default SearchBox