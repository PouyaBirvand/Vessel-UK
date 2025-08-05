import { Button } from "@/components/ui/Button";

export default function Home() {
  return (
    <div className="relative h-screen w-full">
      <div className="bg-[url(/homebackground.webp)] h-full w-full brightness-75 absolute top-0 left-0 z-0"></div>
      <div className="relative z-10 flex items-center justify-center mx-auto flex-col h-full text-white gap-8">
        <h1 className="text-6xl italic font-playfair tracking-wider">The Open Collection</h1>
        <span className="text-lg">Designed exclusively for the 153rd Open.</span>
        <Button variant="white" rounded="full" size="lg" className="font-bold">
          Shop Now
        </Button>
      </div>
    </div>
  );
}
