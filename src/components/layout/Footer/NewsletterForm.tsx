import { Input } from "@/components/ui/Input";
import { ChevronRight } from "lucide-react";

const NewsletterForm = () => (
  <div className="w-full max-w-md mb-6">
    <Input
      type="email"
      placeholder="E-mail"
      className="border border-slate-300 py-7 bg-vessel-cream"
      variant="ghost"
      rounded="md"
      size="lg"
      rightIcon={<ChevronRight strokeWidth={3} className="text-black bg-slate-200 rounded-full w-7 h-7 p-2 cursor-pointer hover:bg-black hover:text-white duration-200 transition-colors"/>}
    />
  </div>
);

export default NewsletterForm;
