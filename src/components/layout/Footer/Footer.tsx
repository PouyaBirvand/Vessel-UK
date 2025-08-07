"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { companyLinks, supportLinks } from "@/data/footerData";
import FooterSection from "./FooterSection";
import NewsletterForm from "./NewsletterForm";
import SocialIcons from "./SocialIcons";

const Footer = () => {
  return (
    <footer className="bg-vessel-cream text-slate-800 py-16">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 space-x-0 lg:space-x-52">
        
        {/* Logo + Newsletter */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col"
        >
          <Image
            alt="Vessel Footer Logo"
            width={160}
            height={160}
            src="/vesselfooterlogo.webp"
            className="mb-6"
          />
          <h2 className="text-lg font-semibold font-montserrat mb-4">
            Subscribe to our newsletter to stay connected on product launches and exclusive deals!
          </h2>
          <NewsletterForm />
          <SocialIcons />
          <span className="text-slate-500 text-sm mt-10">© 2025, Vessel UK FWP LLC</span>
        </motion.div>

        {/* Footer Sections */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 gap-12 md:col-span-1 lg:col-span-2"
        >
          <FooterSection title="Company" items={companyLinks} />
          <FooterSection title="Support" items={supportLinks} />
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
