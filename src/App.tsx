import './index.css'
import Logo from "./assets/Logo.png"
import Hero from "./assets/Hero.gif"
import Tote from "./assets/Tote.png"
import Apparel from "./assets/Apparels.png"
import Drinkware from "./assets/Drinkware.png"
import Corporate from "./assets/combo-gift-set-a5-cork-note-book-wooden-pen-woode-key_-chain-750x750-removebg-preview.png"

function App() {

  return (
    <>
    {/* Menu Bar section */}
    <div className='bg-[var(--primary)]'>
      <div className='max-w-6xl bg-[var(--primary)] text-white text-sm flex justify-between mx-auto'>
        <p>info@vibeprint.co.ke</p>
        <p>0706384510</p></div>
      
    </div>
      <section  className='position-top sticky px-5 md:px-25 py-5 text-gray-800 postition-0 w-full shadow-sm left-0 top-0 mx-auto justify-between flex items-center bg-white md:bg-white/90 md:py-0 z-50'>
      
      <a href=""><img src= {Logo} alt="" className='md:h-20 h-10 mr-5' /></a>
    
        <ul className='flex items-center'>
         <a href="#home" 
            className="mr-5 text-sm md:text-1xl text-gray-800 hover:text-[var(--primary)] focus:text-[var(--secondary)]">
              Home
        </a>
        <a href="#About-t" 
            className="mr-5 text-sm md:text-1xl text-gray-800 hover:text-[var(--primary)] focus:text-[var(--secondary)]">
              About
        </a>
          <a href="#" 
            className="mr-5 text-sm md:text-1xl text-gray-800 hover:text-[var(--primary)] focus:text-[var(--secondary)]">
              Projects
              </a>
          <a href="#contact" 
          className="mr-5 text-sm md:text-1xl text-gray-800 hover:text-[var(--primary)] focus:text-[var(--secondary)]">
              Contact
            </a>
        
      
      <div>
        <a href="" className=" rounded-full bg- bg-[var(--secondary)] border border-transparent bg-primary py-2 px-4 text-sm font-medium text-white hover:bg-primary-800 mr-2 hover:bg-orange-500 hidden md:inline-block">Register</a>
        
          <a href='' className="hidden md:inline-block text-gray-900 ring-1 ring-orange-500 py-2 px-4 text-sm font-medium rounded-full hover:bg-[var(--primary)] hover:ring-0 hover:text-white" target='blank'>Log in <span aria-hidden="true">&rarr;</span></a>
        
      </div>
      </ul>
      </section>

{/* Hero section */}

<section className="min-h-[60vh] flex items-center justify-center px-6  max-w-7xl mx-auto">
    <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center py-10">
     
      {/* <!-- Text Content --> */}
      <div className="space-y-6">
        <h1 className="text-4xl lg:text-5xl font-bold text-gray-900">
          Empowering Businesses with Smart Solutions
        </h1>
        <p className="text-lg text-gray-600">
          We provide innovative, reliable, and secure branding services tailored to your business needs.
        </p>
        <div className="flex gap-4">
          <a href="#contact" className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
            Get Started
          </a>
          <a href="#learn-more" className="px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition">
            Learn More
          </a>
        </div>
      </div>

      {/* <!-- Image / Visual --> */}
      <div>
        <img src= {Hero}alt="Corporate Illustration" className="w-full rounded-xl shadow-lg object-cover"/>
      </div>

    </div>
  </section>

  {/* numbers section */}
  {/* <section>
    <div className="max-w-7xl mx-auto columns-2 md:columns-4 gap-8 text-center p-8 bg-gradient-to-b from-transparent to-white  shadow-lg rounded-lg mt-10">
            <div>
                <h1 className="text-[var(--secondary)] font-bold text-4xl">5000+</h1>
                <p className="text-gray-500 pt-5">People served</p>
            </div>
             <div >
                <h1 className="text-[var(--secondary)] font-bold text-4xl">99%</h1>
                <p className="text-gray-500 pt-4">Success Rate</p>
            </div>
            <div>
                <h1 className="text-[var(--secondary)] font-bold text-4xl">150+</h1>
                <p className="text-gray-500 pt-4">Events hosted</p>
            </div>
            <div>
                <h1 className="text-[var(--secondary)] font-bold text-4xl">5</h1>
                <p className="text-gray-500 pt-4">Branches within the country</p>
            </div>

        </div>
  </section> */}

{/* services section  */}

  <section>
<div className='max-w-7xl bg-white mx-auto mt-2 shadow-2xl rounded-lg'> 
  <h1 className='text-[var(--secondary)] md:text-5xl text-4xl text-center py-5 font-bold'>Our Services</h1>          
        <div className="grid items-center md:flex columns-auto max-w-7xl mx-auto px-5 pt-1 pb-8">
            <div className="overflow-hidden hover:shadow-lg bg-white mx-2 my-8  border-2 border-gray-100 100 rounded-xl pb-5 hover:scale-105 hover:border-0" >
                
                <img src={Tote} alt="" 
                className="h-50 object-cover w-full md:object-contain mx-auto bg-gray-100 md:w-80"/>
                
                <h1 className="ml-5 text-2xl font-semibold text-[var(--secondary)] pt-5">Coporate Events</h1>
                <p className="text-gray-600 p-2 ml-5 text-sm"> Your Brand Our Expertise
                </p>
                <a href="" className="text-[var(--primary)] border-2 border-[var(--primary)] rounded-full text-1xl px-2 py-1 font-bold ml-5 hover:bg-[var(--primary)] hover:text-white"> Book Now</a>
            </div>
            <div className="overflow-hidden hover:shadow-lg bg-white mx-2 my-8  border-2 border-gray-100 100 rounded-xl pb-5 hover:scale-105 hover:border-0" >
                
                <img src={Apparel} alt="" 
                className="h-50 object-cover w-full md:object-contain mx-auto bg-gray-100 md:w-80"/>
                <h1 className="ml-5 text-2xl font-semibold text-[var(--secondary)] pt-5">Weddings</h1>
                <p className="text-gray-600 p-2 ml-5 text-sm"> Your Brand Our Expertise
                </p>
                <a href="" className="text-[var(--primary)] border-2 border-[var(--primary)] rounded-full text-1xl px-2 py-1 font-bold ml-5 hover:bg-[var(--primary)] hover:text-white"> Book Now</a>
            </div>
            <div className="overflow-hidden hover:shadow-lg bg-white mx-2 my-8  border-2 border-gray-100 100 rounded-xl pb-5 hover:scale-105 hover:border-0" >
                
                <img src={Corporate} alt="" 
                className="h-50 object-cover w-full md:object-contain mx-auto bg-gray-100 md:w-80"/>
                <h1 className="ml-5 text-2xl font-semibold text-[var(--secondary)] pt-5">Ruracios</h1>
                <p className="text-gray-600 p-2 ml-5 text-sm"> Your Brand Our Expertise
                </p>
                <a href="" className="text-[var(--primary)] border-2 border-[var(--primary)] rounded-full text-1xl px-2 py-1 font-bold ml-5 hover:bg-[var(--primary)] hover:text-white"> Book Now</a>
            </div>
            <div className=" overflow-hidden hover:shadow-lg bg-white mx-2 my-8  border-2 border-gray-100 100 rounded-xl pb-5 hover:scale-105 hover:border-0" >
                
                <img src ={Drinkware} alt="" 
                className="h-50 object-cover w-full md:object-contain mx-auto bg-gray-100 md:w-80"/>
                <h1 className="ml-5 text-2xl font-semibold text-[var(--secondary)] pt-5">Birthdays</h1>
                <p className="text-gray-600 p-2 ml-5 text-sm"> Your Brand Our Expertise
                </p>
                <a href="" className="text-[var(--primary)] border-2 border-[var(--primary)] rounded-full text-1xl px-2 py-1 font-bold ml-5 hover:bg-[var(--primary)] hover:text-white"> Book Now</a>
            </div>
        </div>
        </div>
  </section>

  {/* <!-- Testimonials Section --> */}
  <section className="py-16 max-w-7xl shadow-lg mx-auto rounded-sm">
    <div className="max-w-5xl mx-auto px-6 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-[var(--primary)]">What Our Clients Say</h2>
      <div className="space-y-10 md:space-y-0 md:flex md:space-x-8">
        <blockquote className="bg-gray-100 rounded-lg p-6 shadow flex-1">
          <p className="italic text-gray-700 mb-4">
            "This branding agency completely transformed our company’s image. The new logo and messaging have brought us more customers than ever!"
          </p>
          <footer className="font-semibold text-[var(--secondary)]">– Sarah L., CEO</footer>
        </blockquote>

        <blockquote className="bg-gray-100 rounded-lg p-6 shadow flex-1">
          <p className="italic text-gray-700 mb-4">
            "Professional, creative, and attentive. They helped us craft a clear brand strategy that drives all our marketing efforts."
          </p>
          <footer className="font-semibold text-[var(--secondary)]">– Mike D., Marketing Director</footer>
        </blockquote>

        <blockquote className="bg-gray-100 rounded-lg p-6 shadow flex-1">
          <p className="italic text-gray-700 mb-4">
            "Excellent service and results! Their visual content creation made our social media stand out."
          </p>
          <footer className="font-semibold text-[var(--secondary)]">– Emma K., Founder</footer>
        </blockquote>
      </div>
    </div>
  </section>


      {/* working on newsletter and email subscription option */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8 pb-5 bg-white/50 rounded-sm p-10 mt-1  shadow-xl index-10" id='contact'>
  
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

            <section id="contact" className="flex-1 rounded-xl p-8 justify-center items-center bg-white hover:shadow-xl">
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
            <iframe className = "md:w-150 w-70 h=70 shadow-2xl rounded-2xl referrerpolicy="
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
