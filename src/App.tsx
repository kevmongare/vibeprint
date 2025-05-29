import './index.css'
import Logo from "./assets/Logo.png"

function App() {

  return (
    <>
    {/* Menu Bar section */}
    <div className='bg-[var(--primary)]'>
      <div className='max-w-6xl bg-[var(--primary)] text-white text-sm flex justify-between mx-auto'>
        <p>info@vibeprint.co.ke</p>
        <p>0706384510</p></div>
      
    </div>
      <section  className='position-top sticky px-5 md:px-25 py-5 text-gray-800 postition-0 w-full shadow-sm left-0 top-0 mx-auto justify-between flex items-center bg-white/80 md:py-0 z-50'>
      
      <a href=""><img src= {Logo} alt="" className='h-20 hidden md:flex' /></a>
    
        <ul className='flex items-center'>
          <a href="" className='mr-5 text-1xl hover:text-[var(--primary)] text-gray-800'> Home </a>
          <a href="#About-t" className='mr-5 text-1xl hover:text-[var(--primary)] text-gray-800'> About</a>
          <a href="" className='mr-5 text-1xl hover:text-[var(--primary)] text-gray-800'>Projects</a>
          <a href="#contact" className='mr-5 text-1xl hover:text-[var(--primary)] text-gray-800'>Contact</a>
        
      
      <div>
        <a href="" className=" rounded-full bg- bg-[var(--secondary)] border border-transparent bg-primary py-2 px-4 text-sm font-medium text-white hover:bg-primary-800 mr-2 hover:bg-orange-500 hidden md:inline-block">Register</a>
        
          <a href='' className=" text-gray-900 ring-1 ring-orange-500 py-2 px-4 text-sm font-medium rounded-full hover:bg-[var(--primary)] hover:ring-0 hover:text-white" target='blank'>Log in <span aria-hidden="true">&rarr;</span></a>
        
      </div>
      </ul>
      </section>


      {/* working on newsletter and email subscription option */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8 pb-5 bg-white rounded-sm p-10 mt-5 shadow-xl index-10" id='contact'>
  
            <div className="flex-1 p-8 ">
            <div className="text-center">
            <div className="text-5xl font-extrabold text-[var(--secondary)] tracking-tight text-center pb-5">
                Vibe<span className="text-[var(--primary)]">Print</span>
                </div>
                <h1 className="text-4xl font-extrabold text-orange-500 pt-5 border-t">Join Our Newsletter</h1>
                <p className="mt-2 text-gray-600">Get the latest updates and offers straight to your inbox.</p>
            </div>
            <form id="newsletter-form" className="mt-8 space-y-6">
                <div className="rounded-md shadow-sm-space-y-px">
                <div className="mb-4">
                    <label  className="sr-only">Full Name</label>
                    <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    required
                    placeholder="Your Name"
                    className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-400
                            focus:outline-none focus:ring-orange-500 focus:border-orange-500 focus:z-10 sm:text-sm"
                    />
                </div>
                <div>
                    <label  className="sr-only">Email address</label>
                    <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="you@example.com"
                    className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-400
                            focus:outline-none focus:ring-orange-500 focus:border-orange-500 focus:z-10 sm:text-sm"
                    />
                </div>
                </div>
                <div>
                <button
                    type="submit"
                    className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium
                        rounded-md text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2
                        focus:ring-offset-2 focus:ring-orange-500 transition"
                >
                    Subscribe
                </button>
                </div>
            </form>
            <div id="successMessage" className="hidden text-center text-green-600 mt-4">
                Thank you for subscribing!
            </div>
            </div>

            <section id="contact" className="flex-1 rounded-xl p-8  bg-white hover:shadow-xl">
            <h2 className="text-2xl font-bold text-center text-[var(--primary)] mb-6">Get in Touch</h2>
            <div className="space-y-4 ">
                <div className="flex items-start space-x-4">
                <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M17 9V7a5 5 0 00-10 0v2M5 9h14v10a2 2 0 01-2 2H7a2 2 0 01-2-2V9z" />
                </svg>
                <p className="text-gray-800">
                    123 Event Avenue<br />
                    Nairobi, Kenya
                </p>
                </div>
                <div className="flex items-center space-x-4">
                <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M16 12h2a2 2 0 012 2v6a2 2 0 01-2 2h-2M8 12H6a2 2 0 00-2 2v6a2 2 0 002 2h2m8-14V6a4 4 0 00-8 0v2h8z" />
                </svg>
                <a href="mailto:info@jurnevents.com" className="text-orange-500 hover:underline">info@jurnevents.com</a>
                </div>
                <div className="flex items-center space-x-4">
                <svg className="max-w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M3 5h2l3.6 7.59a1 1 0 00.9.41h7.02a1 1 0 00.92-.61l3.38-7.09M16 21a2 2 0 100-4 2 2 0 000 4zm-8 0a2 2 0 100-4 2 2 0 000 4z" />
                </svg>
                <a href="tel:+254712345678" className="text-orange-500 hover:underline">+254 712 345 678</a>
                </div>
            </div>
            <div className="mt-6">
            <iframe className = "md:w-150 w-80 h=150 shadow-2xl rounded-2xl referrerpolicy="
            loading="lazy"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3915.9221470790144!2d36.94046947487992!3d-1.3974949985893008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f0d0078fdcce7%3A0xdde3324ee69cae62!2sMlolongo%20gossip!5e1!3m2!1sen!2ske!4v1747402783315!5m2!1sen!2ske">
            
            </iframe>

            </div>
            </section>
        </div>
      {/* working on the Footer */}
      <footer className='bg-[var(--primary)] text-white text text-center relative bottom-0 mt-5 py-2'>
        <p>&copy;VibePrint20205 All rights reserved.</p>
      </footer>
       
    </>
  )
}

export default App
