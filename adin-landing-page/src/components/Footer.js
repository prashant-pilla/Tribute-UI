import Link from 'next/link';
import Image from 'next/image';
import { FaEnvelope } from 'react-icons/fa';
import { IoPeople, IoShieldCheckmark } from 'react-icons/io5';
import { FaXTwitter } from 'react-icons/fa6';

export default function Footer() {
    return (
        <footer className="w-full border-t border-gray-200 bg-white pt-8 pb-8 px-4 md:px-16">
            {/* Main Footer Content */}
            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-8 md:gap-12 text-sm leading-loose max-w-6xl mx-auto">
                {/* Left side - 2 columns on mobile, flex on desktop */}
                <div className="grid grid-cols-2 md:flex md:flex-row gap-8 md:gap-16 w-full md:w-auto">
                    {/* Column 1 - ADIN for */}
                    <div className="flex flex-col items-start text-black">
                        <IoPeople className="text-2xl mb-1 text-black" />
                        <div className="font-bold mb-1 text-black">ADIN for</div>
                        <ul className="space-y-0">
                            <li><Link href="/investors" className="hover:text-[#7B61FF] hover:underline block text-black transition-colors">Investors</Link></li>
                            <li><Link href="/members" className="hover:text-[#7B61FF] hover:underline block text-black transition-colors">Members</Link></li>
                            <li><Link href="/founders" className="hover:text-[#7B61FF] hover:underline block text-black transition-colors">Founders</Link></li>
                        </ul>
                    </div>
                    
                    {/* Column 2 - Resources */}
                    <div className="flex flex-col items-end md:items-start text-black">
                        <IoShieldCheckmark className="text-2xl mb-1 text-black" />
                        <div className="font-bold mb-1 text-black text-right md:text-left">Resources</div>
                        <ul className="space-y-0 text-right md:text-left">
                            <li><Link href="/terms" className="hover:text-[#7B61FF] hover:underline block text-black transition-colors">Terms of Service</Link></li>
                            <li><Link href="/privacy" className="hover:text-[#7B61FF] hover:underline block text-black transition-colors">Privacy Policy</Link></li>
                        </ul>
                    </div>
                </div>
                
                {/* Right side - Logo and Description */}
                <div className="flex flex-col items-start md:items-end text-black w-full md:w-auto md:ml-auto">
                    <Image src="/assets/Logo.svg" alt="ADIN Logo" width={40} height={40} className="mb-2" />
                    <div className="text-xs text-gray-700 mb-2 md:text-right">
                        ADIN was designed and developed<br />by Tribute Labs in Brooklyn, NY.
                    </div>
                    <div className="flex flex-col items-start md:items-end">
                        <div className="flex gap-6 mb-2">
                            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" aria-label="X" className="text-black hover:text-[#7B61FF] text-xl transition-colors"><FaXTwitter /></a>
                            <a href="mailto:hello@adin.com" aria-label="Email" className="text-black hover:text-[#7B61FF] text-xl transition-colors"><FaEnvelope /></a>
                        </div>
                        <div className="text-xs text-gray-400">© 2025 Tribute Labs, Inc.</div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
// Simple footer with muted text and border.