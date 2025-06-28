import Block1Img from "../assets/block1.png";
import { MoveRight } from "lucide-react";

const Block1 = () => {
    return (
        <>
            <section id="block1" className="bg-red-500 min-h-screen z-10 py-20 overflow-visible">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[80vw] mx-auto">
                    <div className="order-2 flex flex-col gap-4 justify-center">

                        <div className="flex items-center gap-2 pt-6">
                            <span className="w-10 h-[2px] bg-secondary"></span>
                            <span className="uppercase text-secondary text-sm font-semibold tracking-widest">GET STARTED</span>
                        </div>

                        <div>
                            <h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-left">What level of hiker are you?</h1>
                        </div>

                        <p className="text-lg">
                            Determining what level of hiker you are can be an important tool when planning future hikes. This hiking level guide will help you plan hikes according to different hike ratings set by various websites like All Trails and Modern Hiker. What type of hiker are you – novice, moderate, advanced moderate, expert, or expert backpacker?
                        </p>
                        <div>
                            <a className="flex flex-cols items-center space-x-2" href="#block1">
                                <p className="text-secondary text-lg font-bold">read more</p>
                                <MoveRight className="text-secondary" />
                            </a>
                        </div>
                    </div>
                    <div className="order-1 flex flex-col gap-4">
                        <img src={Block1Img} alt="Block1" className="w-full h-full object-cover" />
                    </div>
                </div>
            </section>
        </>
    );
}
export default Block1;