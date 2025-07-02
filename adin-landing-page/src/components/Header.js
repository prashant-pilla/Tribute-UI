import Link from 'next/link';

export default function Header() {
    return (
        <header className="flex items-center justify-between px-8 py-6 bg-white w-full">
            <div className="flex items-center gap-2">
                <Link href="/">
                    <div className="w-10 h-10 bg-yellow-300 rounded flex items-center justify-center font-bold text-2xl">😊</div>
                </Link>
                <span className="text-2xl font-bold text-[#FFB84D]">ADIN</span>
            </div>
            <nav className="flex gap-6 items-center">
                <Link href="/" className="px-4 py-2 rounded-full border border-[#D6C7FF] text-[#7B61FF] font-medium bg-[#F6F3FF]">About</Link>
                <Link href="/investors" className="text-gray-700 hover:text-black">Investors</Link>
                <Link href="/members" className="text-gray-700 hover:text-black">Members</Link>
                <Link href="/founders" className="text-gray-700 hover:text-black">Founders</Link>
            </nav>
            <div className="flex gap-3 items-center">
                <button className="text-gray-700 font-medium">Log In</button>
                <button className="bg-[#FF7A4D] text-white px-5 py-2 rounded-full font-semibold shadow hover:bg-[#ff9a7a] transition">Sign Up</button>
            </div>
        </header>
    );
}
// Header with gradient background and centered title.