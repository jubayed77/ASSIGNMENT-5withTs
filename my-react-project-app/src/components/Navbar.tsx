import Logo from '../assets/logo-text.png' 
const Navbar = () => { 
    return ( 
        <div className='border-b border-gray-100 '> 
 
            <nav className="flex justify-between gap-4 container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 "> 
                <img src={Logo} className='w-[110px] h-[50px]' alt="" /> 
                <ul className='flex gap-4 items-center font-semibold'> 
                    <li className='text-[#D91B7E]'><a href="/">Home</a></li> 
                    <li><a href="#">Techonologes</a></li> 
                    <li><a href="#">Projects</a></li> 
                    <li><a href="#">About</a></li> 
                    <li><a href="#">Contact</a></li> 
                </ul> 
                <div className='  flex gap-4 items-center'> 
                    <button className=" rounded-lg px-2.5 py-1.5 text-stone-700 transition hover:bg-stone-100 transition-transform s md:px-4 md:py-2">Sign In</button> 
 
 
                    <button  className="bg-[#D91B7E] rounded-[50px] px-2.5 py-1.5 font-semibold text-white transition hover:brightness-110 md:px-4 sm: sm: md:py-2 sm:">Sign UP</button> 
                </div> 
            </nav> 
        </div> 
 
    ); 
}; 
 
export default Navbar; 


