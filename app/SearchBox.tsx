

function SearchBox() {
  return (
    <form className="max-w-6x mx-auto flex justify-between items-center "> 
      <input type='text' className='flex-1 w-full h-14 rounded-sm placeholder-gray-500 text-gray-500 outline-none bg-transparent dark:text-red-900'placeholder='Search' />
      <button type='submit'></button>

    </form>
  )
}

export default SearchBox