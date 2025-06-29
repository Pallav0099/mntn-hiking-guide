import heroimg from "../assets/hero.png";
import { MoveDown, MoveRight, } from "lucide-react";
import Block1Img from "../assets/block1.png"

const Hero = () => {
    return (
        <section className="w-full overflow-hidden py-24 md:py-48">
            <div className="relative z-10 flex items-center justify-center">
                <div className="grid grid-row h-max">
                    <div className="flex items-center gap-2 order-1">
                        <span className="w-10 h-[2px] bg-secondary"></span>
                        <span className="uppercase text-secondary text-sm font-semibold tracking-widest">A Hiking Guide</span>
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
