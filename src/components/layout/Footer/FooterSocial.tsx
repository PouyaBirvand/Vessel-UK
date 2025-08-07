import { socialLinks } from "@/data/footerData";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const icons = { Facebook, Twitter, Instagram, Linkedin };

const FooterSocial = () => (
  <div className="flex gap-4 mt-8">
    {socialLinks.map(({ name, icon, href }) => {
      const Icon = icons[icon as keyof typeof icons];
      return (
        <a key={name} href={href} aria-label={name} className="hover:text-black transition">
          <Icon size={20} />
        </a>
      );
    })}
  </div>
);

export default FooterSocial;
