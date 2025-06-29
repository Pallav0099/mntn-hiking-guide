import Block1Img from "../assets/block3.png";
import { MoveRight } from "lucide-react";

const Block3 = () => {
    return (
        <>
            <section id="block1" className="min-w-screen bg-background overflow-visible pt-8 xl:pt-18">
                <div className="flex flex-col md:flex-row gap-6 md:gap-12 lg:gap-18 items-center justify-center">
                    <div className="order-1 max-w-[80vw] md:max-w-[40vw]">
                        <div className="absolute left-1 md:left-auto">
                            <p className="text-9xl font-extrabold text-white/10">03</p>
                        </div>
                        <div className="flex flex-col gap-4 justify-center pt-12 md:pl-10 xl:pl-18">
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
                    </div>
                    <div className="order-2">
                        <img src={Block1Img} alt="Block1" className="w-[80vw] md:w-[40vw] xl:w-[30vw] max-h-[720px] object-cover md:pt-12" />
                    </div>
                </div>
            </section>
        </>
    );
}
export default Block3;