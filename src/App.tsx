import './App.css'

function App() {

  return (
    <>
      <section  className='position-top sticky px-5 md:px-25 py-5 text-gray-800 postition-0 w-full shadow-sm left-0 top-0 mx-auto justify-between flex items-center bg-white/80 md:py-0 z-50'>
      <h1 className='flex items-center md:text-2xl text-sm font-extrabold text-orange-600'><img src= "" alt="" className='h-20 hidden md:flex' />VitePrint</h1>
    
        <ul className='flex items-center'>
          <a href="" className='mr-5 text-1xl hover:text-orange-600 text-gray-800'> Home </a>
          <a href="#About-t" className='mr-5 text-1xl hover:text-orange-600 text-gray-700'> About</a>
          <a href="" className='mr-5 text-1xl hover:text-orange-600 text-gray-700'>Projects</a>
          <a href="#contact" className='mr-5 text-1xl hover:text-orange-600 text-gray-700'>Contact</a>
        
      
      <div>
        <a href="" className=" rounded-full bg- bg-blue-950 border border-transparent bg-primary py-2 px-4 text-sm font-medium text-white hover:bg-primary-800 mr-2 hover:bg-orange-500 hidden md:inline-block">Register</a>
        
          <a href='' className=" text-gray-900 ring-1 ring-orange-500 py-2 px-4 text-sm font-medium rounded-full hover:bg-orange-500 hover:ring-0 hover:text-white" target='blank'>Log in <span aria-hidden="true">&rarr;</span></a>
        
      </div>
      </ul>
      </section>
       
    </>
  )
}

export default App
