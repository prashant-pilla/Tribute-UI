import Image from 'next/image';

export default function InvestorSection() {
    return (
        <section style={{ padding: '40px 0', background: '#232323' }}>
            <h3 style={{ color: '#feb47b' }}>For Investors</h3>
            <p>Become an ADIN Investor. Fuel the future of UI engineering.</p>
            <Image src="/assets/investor-card.png" alt="Investor Card" width={400} height={200} />
            {/* Replace with your asset */}
        </section>
    );
}
// Short info section for investors.