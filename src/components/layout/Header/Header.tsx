'use client'
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Search, ShoppingBag, User, Menu, X } from "lucide-react";
import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence, easeOut, easeIn, easeInOut } from "framer-motion";

// Type definitions
interface DropdownItem {
  name: string;
  href: string;
  children?: DropdownItem[];
}

interface NavigationItem {
  name: string;
  href: string;
  dropdown?: DropdownItem[];
}

// Navigation data
const navigationData: NavigationItem[] = [
  {
    name: "Golf",
    href: "/golf",
    dropdown: [
      {
        name: "Best Sellers",
        href: "/golf/best-sellers",
        children: [
          { name: "Player V Pro", href: "/golf/best-sellers/player-v-pro" },
          { name: "Player V", href: "/golf/best-sellers/player-v" },
          { name: "Sunday III", href: "/golf/best-sellers/sunday-iii" },
          { name: "Lux Pro Cart", href: "/golf/best-sellers/lux-pro-cart" },
          { name: "Lux Embosse Headcover", href: "/golf/best-sellers/lux-embosse-headcover" },
        ],
      },
      {
        name: "Stand Bags",
        href: "/golf/stand-bags",
        children: [
          { name: "Player Series", href: "/golf/stand-bags/player-series" },
          { name: "Lux Series", href: "/golf/stand-bags/lux-series" },
          { name: "Sunday III Stands", href: "/golf/stand-bags/sunday-iii-stands" },
          { name: "Pencil Stands", href: "/golf/stand-bags/pencil-stands" },
          { name: "Junior Stands", href: "/golf/stand-bags/junior-stands" },
        ],
      },
      {
        name: "Cart Bags",
        href: "/golf/cart-bags",
        children: [
          { name: "Lux Cart", href: "/golf/cart-bags/lux-cart" },
          { name: "Lux Pro Cart", href: "/golf/cart-bags/lux-pro-cart" },
          { name: "Lux Prime Cart", href: "/golf/cart-bags/lux-prime-cart" },
        ],
      },
      {
        name: "Staff Bags",
        href: "/golf/staff-bags",
        children: [
          { name: "Prime Staffs", href: "/golf/staff-bags/prime-staffs" },
          { name: "Prime Mini Staff", href: "/golf/staff-bags/prime-mini-staff" },
        ],
      },
      {
        name: "Accessories",
        href: "/golf/accessories",
        children: [
          { name: "Golf Club Organiser", href: "/golf/accessories/golf-club-organiser" },
          { name: "Bag Straps", href: "/golf/accessories/bag-straps" },
          { name: "Cart Strap Sleeves", href: "/golf/accessories/cart-strap-sleeves" },
          { name: "Golf Bag Accents", href: "/golf/accessories/golf-bag-accents" },
          { name: "Golf Essentials", href: "/golf/accessories/golf-essentials" },
          { name: "Golf Towels", href: "/golf/accessories/golf-towels" },
          { name: "Headcovers", href: "/golf/accessories/headcovers" },
        ],
      },
    ],
  },
  {
    name: "Tennis",
    href: "/tennis",
    dropdown: [
      { name: "Baseline Tennis Tote", href: "/tennis/baseline-tennis-tote" },
      {
        name: "Racket Bags",
        href: "/tennis/racket-bags",
        children: [
          { name: "Baseline Racket Bags", href: "/tennis/racket-bags/baseline-racket-bags" },
          { name: "Baseline Lite Racket Bags", href: "/tennis/racket-bags/baseline-lite-racket-bags" },
        ],
      },
      {
        name: "Backpacks",
        href: "/tennis/backpacks",
        children: [
          { name: "PrimeX DXR Tennis Backpack", href: "/tennis/backpacks/primex-dxr-tennis-backpack" },
          { name: "PrimeX Tennis Backpack", href: "/tennis/backpacks/primex-tennis-backpack" },
        ],
      },
      {
        name: "Pickleball",
        href: "/tennis/pickleball",
        children: [
          { name: "Pickleball Paddles", href: "/tennis/pickleball/pickleball-paddles" },
          { name: "Pickleball Bag", href: "/tennis/pickleball/pickleball-bag" },
        ],
      },
    ],
  },
  {
    name: "Lifestyle",
    href: "/lifestyle",
    dropdown: [
      {
        name: "Backpacks",
        href: "/lifestyle/backpacks",
        children: [
          { name: "PrimeX Backpacks", href: "/lifestyle/backpacks/primex-backpacks" },
          { name: "Signature Backpacks", href: "/lifestyle/backpacks/signature-backpacks" },
        ],
      },
      {
        name: "Duffel Bags",
        href: "/lifestyle/duffel-bags",
        children: [
          { name: "Signature Garment Duffel", href: "/lifestyle/duffel-bags/signature-garment-duffel" },
          { name: "Signature Boston", href: "/lifestyle/duffel-bags/signature-boston" },
          { name: "Signature Weekender", href: "/lifestyle/duffel-bags/signature-weekender" },
        ],
      },
      {
        name: "Accessories",
        href: "/lifestyle/accessories",
        children: [
          { name: "Voyager Shoe Bag", href: "/lifestyle/accessories/voyager-shoe-bag" },
          { name: "Signature Toiletry", href: "/lifestyle/accessories/signature-toiletry" },
        ],
      },
    ],
  },
];

// Animation variants
const dropdownVariants = {
  hidden: {
    opacity: 0,
    y: -10,
    transition: {
      duration: 0.2,
      ease: easeOut
    }
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: easeOut,
      staggerChildren: 0.05,
      delayChildren: 0.1
    }
  },
  exit: {
    opacity: 0,
    y: -5,
    transition: {
      duration: 0.2,
      ease: easeIn
    }
  }
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: -5
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.2,
      ease: easeOut
    }
  }
};

const chevronVariants = {
  closed: {
    rotate: 0,
    transition: { duration: 0.2, ease: easeOut }
  },
  open: {
    rotate: 180,
    transition: { duration: 0.2, ease: easeOut }
  }
};

// Mobile menu animation variants
const mobileMenuVariants = {
  closed: {
    x: "100%",
    transition: {
      duration: 0.3,
      ease: easeInOut
    }
  },
  open: {
    x: 0,
    transition: {
      duration: 0.3,
      ease: easeInOut,
      staggerChildren: 0.05,
      delayChildren: 0.1
    }
  }
};

const mobileItemVariants = {
  closed: {
    x: 50,
    opacity: 0
  },
  open: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.2,
      ease: easeOut
    }
  }
};

const overlayVariants = {
  closed: {
    opacity: 0,
    transition: {
      duration: 0.2
    }
  },
  open: {
    opacity: 1,
    transition: {
      duration: 0.2
    }
  }
};

// Mobile Navigation Item Component
interface MobileNavigationItemProps {
  item: NavigationItem;
  onItemClick: () => void;
}

const MobileNavigationItem: React.FC<MobileNavigationItemProps> = ({
  item,
  onItemClick
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <motion.div variants={mobileItemVariants} className="border-b border-gray-100 last:border-b-0">
      <div className="flex items-center justify-between p-4">
        <Link
          href={item.href}
          onClick={onItemClick}
          className="text-lg font-semibold text-gray-900 flex-1"
        >
          {item.name}
        </Link>
        {item.dropdown && (
          <motion.button
            onClick={toggleAccordion}
            className="p-2 -mr-2"
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ duration: 0.2 }}
            >
              <ChevronDown size={20} />
            </motion.div>
          </motion.button>
        )}
      </div>
      
      <AnimatePresence>
        {isOpen && item.dropdown && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: easeOut }}
            className="overflow-hidden bg-gray-50"
          >
            <div className="pb-4">
              {item.dropdown.map((dropdownItem, index) => (
                <div key={index} className="px-4 py-2">
                  <Link
                    href={dropdownItem.href}
                    onClick={onItemClick}
                    className="block text-base font-medium text-gray-700 hover:text-blue-600 py-1"
                  >
                    {dropdownItem.name}
                  </Link>
                  {dropdownItem.children && (
                    <div className="ml-4 mt-2">
                      {dropdownItem.children.map((child, childIndex) => (
                        <Link
                          key={childIndex}
                          href={child.href}
                          onClick={onItemClick}
                          className="block text-sm text-gray-600 hover:text-gray-900 py-1.5 pl-2 border-l-2 border-gray-200 hover:border-blue-300 transition-colors duration-200"
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

// Mobile Menu Component
interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  className?: string;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            variants={overlayVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
            onClick={onClose}
          />
          
          {/* Mobile Menu */}
          <motion.div
            variants={mobileMenuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed top-0 right-0 h-full w-80 bg-white shadow-xl z-50 lg:hidden overflow-y-auto"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-white sticky top-0">
              <h2 className="text-xl font-bold text-gray-900">Menu</h2>
              <motion.button
                onClick={onClose}
                whileTap={{ scale: 0.95 }}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
              >
                <X size={24} />
              </motion.button>
            </div>

            {/* Navigation Items */}
            <motion.div
              variants={mobileMenuVariants}
              className="py-2"
            >
              {navigationData.map((item) => (
                <MobileNavigationItem
                  key={item.name}
                  item={item}
                  onItemClick={onClose}
                />
              ))}
            </motion.div>

            {/* Action Items */}
            <motion.div
              variants={mobileItemVariants}
              className="p-4 border-t border-gray-200 mt-4"
            >
              <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">
                Quick Access
              </h3>
              <div className="space-y-3">
                <button
                  onClick={onClose}
                  className="flex items-center gap-3 w-full p-3 text-left hover:bg-gray-50 rounded-lg transition-colors duration-200"
                >
                  <Search size={20} className="text-gray-600" />
                  <span className="text-gray-900">Search Products</span>
                </button>
                <button
                  onClick={onClose}
                  className="flex items-center gap-3 w-full p-3 text-left hover:bg-gray-50 rounded-lg transition-colors duration-200"
                >
                  <User size={20} className="text-gray-600" />
                  <span className="text-gray-900">My Account</span>
                </button>
                <button
                  onClick={onClose}
                  className="flex items-center gap-3 w-full p-3 text-left hover:bg-gray-50 rounded-lg transition-colors duration-200"
                >
                  <ShoppingBag size={20} className="text-gray-600" />
                  <span className="text-gray-900">Shopping Bag</span>
                </button>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
interface DropdownProps {
  items: DropdownItem[];
  isOpen: boolean;
}

const Dropdown: React.FC<DropdownProps> = ({ items, isOpen }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          variants={dropdownVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="absolute top-full left-0 w-full bg-white shadow-lg border-t border-gray-200 z-50"
        >
          <div className="container mx-auto px-5 py-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {items.map((item, index) => (
                <motion.div key={index} variants={itemVariants} className="space-y-3">
                  <Link
                    href={item.href}
                    className="block text-base font-semibold text-gray-900 hover:text-blue-600 transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                  {item.children && (
                    <motion.ul 
                      className="space-y-2 pl-4"
                      variants={itemVariants}
                    >
                      {item.children.map((child, childIndex) => (
                        <motion.li 
                          key={childIndex}
                          variants={itemVariants}
                          whileHover={{ x: 2 }}
                          transition={{ duration: 0.15 }}
                        >
                          <Link
                            href={child.href}
                            className="block text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200 py-1 rounded-md hover:bg-gray-50 px-2 -mx-2"
                          >
                            {child.name}
                          </Link>
                        </motion.li>
                      ))}
                    </motion.ul>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

// Navigation item component
interface NavigationItemProps {
  item: NavigationItem;
  isActive: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

const NavigationItem: React.FC<NavigationItemProps> = ({
  item,
  isActive,
  onMouseEnter,
  onMouseLeave,
}) => {
  return (
    <li
      className="relative"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <Link
        href={item.href}
        className={`flex items-center gap-2 font-bold transition-colors duration-200 ${
          isActive ? 'text-blue-600' : 'text-gray-900 hover:text-blue-600'
        }`}
      >
        {item.name}
        {item.dropdown && (
          <motion.div
            variants={chevronVariants}
            animate={isActive ? "open" : "closed"}
          >
            <ChevronDown size={18} strokeWidth={2.5} />
          </motion.div>
        )}
      </Link>
    </li>
  );
};

// Main Header component
const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const headerRef = useRef<HTMLDivElement>(null);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = (): void => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Handle dropdown interactions with proper hover area
  const handleNavigationMouseEnter = (itemName: string): void => {
    setActiveDropdown(itemName);
  };

  const handleNavigationMouseLeave = (): void => {
    // Don't close immediately, let the dropdown handle it
  };

  const handleDropdownAreaMouseLeave = (): void => {
    setActiveDropdown(null);
  };

  const toggleMobileMenu = (): void => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = (): void => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header 
      ref={headerRef}
      className={`sticky top-0 bg-white z-40 transition-all duration-300 ${
        isScrolled ? 'shadow-md' : ''
      }`}
      onMouseLeave={handleDropdownAreaMouseLeave}
    >
      <motion.div
        className={`flex items-center justify-between px-5 container mx-auto transition-all duration-300 ${
          isScrolled ? 'h-16' : 'h-20'
        }`}
        layout
      >
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link href="/" className="block">
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <Image
                src="/vessel-logo.avif"
                alt="Vessel Logo"
                width={120}
                height={120}
                className={`transition-all duration-300 ${
                  isScrolled ? 'w-24 h-auto' : 'w-30 h-auto'
                }`}
                priority
              />
            </motion.div>
          </Link>
        </div>

        {/* Navigation */}
        <nav className="hidden lg:block">
          <ul className="flex items-center gap-8 font-inter">
            {navigationData.map((item) => (
              <NavigationItem
                key={item.name}
                item={item}
                isActive={activeDropdown === item.name}
                onMouseEnter={() => item.dropdown && handleNavigationMouseEnter(item.name)}
                onMouseLeave={handleNavigationMouseLeave}
              />
            ))}
          </ul>
        </nav>

        {/* Action Icons */}
        <div className="flex-shrink-0">
          <ul className="flex items-center gap-3">
            {/* Desktop Icons */}
            <li className="hidden sm:block">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.15 }}
                aria-label="Search"
                className="p-1 text-gray-600 hover:text-gray-900 transition-colors duration-200"
              >
                <Search size={25} />
              </motion.button>
            </li>
            <li className="hidden sm:block">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.15 }}
                aria-label="User Account"
                className="p-1 text-gray-600 hover:text-gray-900 transition-colors duration-200"
              >
                <User size={25} />
              </motion.button>
            </li>
            <li>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.15 }}
                aria-label="Shopping Bag"
                className="p-1 text-gray-600 hover:text-gray-900 transition-colors duration-200 relative"
              >
                <ShoppingBag size={25} />
              </motion.button>
            </li>
            
            {/* Mobile Menu Button */}
            <li className="lg:hidden">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.15 }}
                onClick={toggleMobileMenu}
                aria-label="Toggle Mobile Menu"
                className="p-2 text-gray-600 hover:text-gray-900 transition-colors duration-200"
              >
                <Menu size={24} />
              </motion.button>
            </li>
          </ul>
        </div>
      </motion.div>

      {/* Dropdowns - Desktop Only */}
      <div className="hidden lg:block">
        {navigationData.map((item) => (
          <Dropdown
            key={item.name}
            items={item.dropdown || []}
            isOpen={activeDropdown === item.name}
          />
        ))}
      </div>

      {/* Mobile Menu */}
      <MobileMenu isOpen={isMobileMenuOpen} onClose={closeMobileMenu} />
    </header>
  );
};

export default Header;