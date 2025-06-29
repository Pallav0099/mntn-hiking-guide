import Block1Img from "../assets/block1.png";
import { MoveRight } from "lucide-react";

const Block1 = () => {
    return (
        <>
            <section id="block1" className="bg-fade-bottom min-h-screen overflow-visible xl:pt-48">
                <div className="flex flex-col md:flex-row gap-4 items-center justify-center max-w-screen border-5 border-red-500">
                    <div className="order-1 flex flex-col gap-4 justify-center max-w-[80vw] md:max-w-[40vw] z-10 border-5 border-green-500">
                        <div>
                            <p className="top-0 left-0 text-9xl font-extrabold z-5 text-white/10">01</p>
                        </div>
                        <div className="flex items-center gap-2 pt-6">
                            <span className="w-10 h-[2px] bg-secondary"></span>
                            <span className="uppercase text-secondary text-sm font-semibold tracking-widest">GET STARTED</span>
                        </div>

                        <div>
                            <h1 className="text-4xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-left">What level of hiker are you?</h1>
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
                    <div className="order-2 border-5 border-yellow-400">
                        <img src={Block1Img} width={566} height={720} alt="Block1" className="object-cover" />
                    </div>
                </div>
            </section>
        </>
    );
}
export default Block1;