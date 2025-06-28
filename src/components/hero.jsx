import heroimg from "../assets/hero.png";
import { MoveDown } from "lucide-react";

const Hero = () => {
    return (
        <section className="top-0 w-full h-screen overflow-hidden">
            <img
                src={heroimg}
                alt="Hero"
                className="absolute inset-0 w-full h-auto object-contain"
            />
            <div className="relative z-10 flex items-center justify-center pt-40">
                <div className="grid grid-row h-max text-white">
                    <div class="flex items-center gap-2 order-1">
                        <span class="w-10 h-[2px] bg-yellow-400"></span>
                        <span class="uppercase text-yellow-400 text-sm font-semibold tracking-widest">A Hiking Guide</span>
                    </div>
                    <div className="order-2 py-6">
                        <h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-left">Be Prepared For The<br />Mountains And Beyond</h1>
                    </div>
                    <div className="order-3">
                        <a className="flex flex-cols items-center space-x-2" href="#block1">
                            <p className="text-lg font-bold">scroll down</p>
                            <MoveDown />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
