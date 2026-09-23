import React from 'react';
import Logo from '../assets/logo-text.png';

const Footer: React.FC = () => {
    return (
        <div className='flex justify-between gap-4 container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 '>

            <footer className="w-full bg-white text-slate-600 font-sans py-12 px-6 border-t border-slate-100">
                <div className="max-w-6xl mx-auto">
                
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-8 pb-10">

                    
                        <div className="md:col-span-2 space-y-4">
                            {/* main logo */}
                            <div className="flex items-center">
                                <img
                                    src={Logo}
                                    alt="DevStack Logo"
                                    className="h-8 w-auto object-contain"
                                />
                            </div>

                            {/* descrption */}
                            <p className="text-sm text-slate-500 max-w-sm leading-relaxed">
                                Curated tools, technologies, and resources for developers building modern software.
                            </p>

                            {/* social icon */}
                            <div className="flex items-center gap-4 pt-2 text-sm font-semibold text-slate-700">
                                <a href="#" className="hover:text-pink-500 transition-colors">GitHub</a>
                                <a href="#" className="hover:text-pink-500 transition-colors">Twitter</a>
                                <a href="#" className="hover:text-pink-500 transition-colors">LinkedIn</a>
                            </div>
                        </div>

                        {/* col 1 prodt */}
                        <div>
                            <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-4">
                                Product
                            </h3>
                            <ul className="space-y-2.5 text-sm">
                                <li><a href="#" className="hover:text-slate-900 transition-colors">Home</a></li>
                                <li><a href="#" className="hover:text-slate-900 transition-colors">Technologies</a></li>
                                <li><a href="#" className="hover:text-slate-900 transition-colors">Projects</a></li>
                            </ul>
                        </div>

                        {/* col 2 company */}
                        <div>
                            <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-4">
                                Company
                            </h3>
                            <ul className="space-y-2.5 text-sm">
                                <li><a href="#" className="hover:text-slate-900 transition-colors">About</a></li>
                                <li><a href="#" className="hover:text-slate-900 transition-colors">Contact</a></li>
                                <li><a href="#" className="hover:text-slate-900 transition-colors">Careers</a></li>
                            </ul>
                        </div>

                        {/* col 3 legal */}
                        <div>
                            <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-4">
                                Legal
                            </h3>
                            <ul className="space-y-2.5 text-sm">
                                <li><a href="#" className="hover:text-slate-900 transition-colors">Privacy Policy</a></li>
                                <li><a href="#" className="hover:text-slate-900 transition-colors">Terms of Service</a></li>
                            </ul>
                        </div>

                    </div>

                    {/*another div */}
                    <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
                        <p>© 2026 Dev Stack. All rights reserved.</p>

                        <div className="flex items-center gap-4">
                            <a href="#" className="hover:text-slate-600 transition-colors">Privacy</a>
                            <a href="#" className="hover:text-slate-600 transition-colors">Terms</a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;