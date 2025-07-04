import Image from 'next/image';

export default function HeroSection() {
    return (
        <section style={{ padding: '60px 0', textAlign: 'center', background: 'rgba(255,255,255,0.01)' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Welcome to ADIN</h2>
            <p style={{ fontSize: '1.2rem', color: '#ccc' }}>UI Engineer Demo Site</p>
            <Image src="/assets/hero-banner.png" alt="Hero Banner" width={600} height={300} />
            {/* Use actual exported image */}
        </section>
    );
}
// Main hero section with large title, subtitle, and image.