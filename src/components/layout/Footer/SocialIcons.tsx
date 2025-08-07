import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const icons = [
  { icon: <Facebook size={20} />, href: "#" },
  { icon: <Twitter size={20} />, href: "#" },
  { icon: <Instagram size={20} />, href: "#" },
  { icon: <Linkedin size={20} />, href: "#" },
];

const SocialIcons = () => (
  <div className="flex gap-4 mt-6">
    {icons.map((item, idx) => (
      <a key={idx} href={item.href} className="hover:text-black transition-colors">
        {item.icon}
      </a>
    ))}
  </div>
);

export default SocialIcons;
