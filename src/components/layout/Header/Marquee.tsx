'use client';

import { memo, useMemo } from 'react';
import Marquee from 'react-fast-marquee';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

// Types
interface MarqueeItem {
  id: string;
  text: string;
  href?: string;
  isClickable?: boolean;
  icon?: 'dot' | 'arrow';
}

interface MarqueeHeaderProps {
  items?: MarqueeItem[];
  speed?: number;
  direction?: 'left' | 'right';
  className?: string;
  pauseOnHover?: boolean;
}

// Default marquee items
const DEFAULT_MARQUEE_ITEMS: MarqueeItem[] = [
  {
    id: 'free-shipping-1',
    text: 'Free Shipping in UK over £100',
    icon: 'dot',
  },
  {
    id: 'vessel-club-1',
    text: 'Click HERE to Join VESSEL Club',
    href: '/club',
    isClickable: true,
    icon: 'arrow',
  },
  {
    id: 'free-shipping-2',
    text: 'Free Shipping in UK over £100',
    icon: 'dot',
  },
  {
    id: 'vessel-club-2',
    text: 'Click HERE to Join VESSEL Club',
    href: '/club',
    isClickable: true,
    icon: 'arrow',
  },
  {
    id: 'warranty',
    text: '2 Year Warranty on All Products',
    icon: 'dot',
  },
  {
    id: 'customer-service',
    text: '24/7 Customer Support Available',
    icon: 'dot',
  },
];

// Icon component
const MarqueeIcon = memo(({ type }: { type: 'dot' | 'arrow' }) => {
  if (type === 'arrow') {
    return (
      <ChevronRight 
        size={12} 
        className="text-vessel-gold transition-colors duration-200" 
        aria-hidden="true"
      />
    );
  }
  
  return (
    <span 
      className="w-1 h-1 bg-vessel-white rounded-full flex-shrink-0" 
      aria-hidden="true"
    />
  );
});

MarqueeIcon.displayName = 'MarqueeIcon';

// Marquee item component
const MarqueeItem = memo(({ item }: { item: MarqueeItem }) => {
  const content = (
    <li className="flex items-center gap-3 whitespace-nowrap">
      {item.icon && <MarqueeIcon type={item.icon} />}
      <span className="font-semibold text-xs uppercase tracking-wide">
        {item.text}
      </span>
    </li>
  );

  if (item.isClickable && item.href) {
    return (
      <Link 
        href={item.href}
        className="transition-colors duration-200 hover:text-vessel-gold focus:text-vessel-gold focus:outline-none focus:ring-2 focus:ring-vessel-gold focus:ring-offset-2 focus:ring-offset-vessel-marquee rounded-sm"
        aria-label={item.text}
      >
        {content}
      </Link>
    );
  }

  return content;
});

MarqueeItem.displayName = 'MarqueeItem';

// Main component
const MarqueeHeader = memo(({
  items = DEFAULT_MARQUEE_ITEMS,
  speed = 50,
  direction = 'left',
  className = '',
  pauseOnHover = true,
}: MarqueeHeaderProps) => {
  // Duplicate items to ensure smooth infinite scroll
  const duplicatedItems = useMemo(() => [
    ...items,
    ...items, // Duplicate for seamless loop
  ], [items]);

  return (
    <div 
      className={`bg-vessel-marquee text-vessel-white h-12 overflow-hidden ${className}`}
      role="banner"
      aria-label="Promotional announcements"
    >
      <Marquee
        className="h-full"
        direction={direction}
        speed={speed}
        pauseOnHover={pauseOnHover}
        gradient={false}
        play={true}
      >
        <ul className="flex items-center gap-8 sm:gap-12 md:gap-16 lg:gap-20 h-full font-montserrat px-8">
          {duplicatedItems.map((item, index) => (
            <MarqueeItem 
              key={`${item.id}-${index}`} 
              item={item}
            />
          ))}
        </ul>
      </Marquee>
    </div>
  );
});

MarqueeHeader.displayName = 'MarqueeHeader';

export default MarqueeHeader;
export type { MarqueeHeaderProps, MarqueeItem };