'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { IoInformationCircleOutline, IoCashOutline, IoPeopleOutline, IoHammerOutline } from 'react-icons/io5';
import Image from 'next/image';

const navLinks = [
  { href: '/', label: 'About', icon: IoInformationCircleOutline },
  { href: '/investors', label: 'Investors', icon: IoCashOutline },
  { href: '/members', label: 'Members', icon: IoPeopleOutline },
  { href: '/founders', label: 'Founders', icon: IoHammerOutline },
];

export default function Header() {
  const pathname = usePathname();
  return (
    <header className="flex items-center justify-between px-8 py-6 bg-white w-full">
      <div className="flex items-center gap-2">
        <Link href="/">
          <Image src="/assets/Logo.svg" alt="ADIN Logo" width={40} height={40} priority />
        </Link>
        <Link href="/">
          <Image src="/assets/Wordmark.svg" alt="ADIN Wordmark" width={90} height={32} priority />
        </Link>
      </div>
      <nav className="flex gap-6 items-center">
        {navLinks.map((link) => {
          const Icon = link.icon;
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              className={
                isActive
                  ? 'flex items-center gap-2 px-4 py-2 rounded-full border border-[#D6C7FF] text-[#7B61FF] font-medium bg-[#F6F3FF] transition-colors'
                  : 'flex items-center gap-2 text-gray-700 hover:text-black transition-colors'
              }
            >
              <Icon className={isActive ? 'text-[#7B61FF]' : 'text-gray-400 group-hover:text-black'} size={20} />
              {link.label}
            </Link>
          );
        })}
      </nav>
      <div className="flex gap-3 items-center">
        <button className="text-gray-700 font-medium">Log In</button>
        <button className="bg-[#FF7A4D] text-white px-5 py-2 rounded-full font-semibold shadow hover:bg-[#ff9a7a] transition">Sign Up</button>
      </div>
    </header>
  );
}
// Header with gradient background and centered title.