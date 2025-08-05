import Marquee from "react-fast-marquee";

const MarqueeHeader = () => {
    return (
        <Marquee className="bg-vessel-marquee font-montserrat text-vessel-white h-12" direction="left" speed={70}>
            <ul className="flex gap-12 items-center list-none font-extrabold text-xs">
                <li className="flex gap-18">
                    <span className="list-disc">•</span>
                    Free Shipping in UK over £100
                </li>
                <li className="flex gap-18">
                    <span className="list-disc">•</span>
                    <a href="">Click HERE to Join VESSEL Club</a>
                </li>
                <li className="flex gap-18">
                    <span className="list-disc">•</span>
                    Free Shipping in UK over £100
                </li>
                <li className="flex gap-18">
                    <span className="list-disc">•</span>
                    <a href="">Click HERE to Join VESSEL Club</a>
                </li>
                <li className="flex gap-18">
                    <span className="list-disc">•</span>
                    Free Shipping in UK over £100
                </li>
                <li className="flex gap-18">
                    <span className="list-disc">•</span>
                    Free Shipping in UK over £100
                </li>
                <li className="flex gap-18">
                    <span className="list-disc">•</span>
                    <a href="">Click HERE to Join VESSEL Club</a>
                </li>
                <li className="flex gap-18">
                    <span className="list-disc">•</span>
                    Free Shipping in UK over £100
                </li>
                <li className="flex gap-18">
                    <span className="list-disc">•</span>
                    <a href="">Click HERE to Join VESSEL Club</a>
                </li>
            </ul>
        </Marquee>
    );
}

export default MarqueeHeader;
