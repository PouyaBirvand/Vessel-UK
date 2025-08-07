type FooterSectionProps = {
    title: string;
    items: string[];
  };
  
  const FooterSection = ({ title, items }: FooterSectionProps) => (
    <div>
      <h3 className="text-lg font-bold mb-4">{title}</h3>
      <ul className="space-y-4 text-slate-500">
        {items.map((item, idx) => (
          <li key={idx}>
            <a href="#" className="hover:text-black transition-colors duration-150">
              {item}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
  
  export default FooterSection;
  