import heroimg from "../assets/hero.png";
import { MoveDown, MoveRight, } from "lucide-react";
import Block1Img from "../assets/block1.png"
import { motion } from "motion/react";

const Hero = () => {
    return (
        <section className="w-full overflow-hidden py-24 md:py-48">
            <div className="relative z-10 flex items-center justify-center">
                <div className="grid grid-row h-max pl-5 md:pl-0">
                    <motion.div 
                        className="flex items-center gap-2 order-1"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                    >
                        <span className="w-10 h-[2px] bg-secondary"></span>
                        <span className="uppercase text-secondary text-sm font-semibold tracking-widest">A Hiking Guide</span>
                    </motion.div>
                    <motion.div 
                        className="order-2 py-6"
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    >
                        <h1 className="text-shadow-lg text-shadow-black/20 text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-left">Be Prepared For The<br />Mountains And Beyond</h1>
                    </motion.div>
                    <motion.div 
                        className="order-3"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
                    >
                        <motion.a 
                            className="flex flex-cols items-center space-x-2" 
                            href="#block1"
                            whileHover={{ y: 3 }}
                            transition={{ duration: 0.3, ease: "easeOut" }}
                        >
                            <p className="text-lg font-bold text-shadow-lg text-shadow-black/20">scroll down</p>
                            <motion.div
                                animate={{ y: [0, 4, 0] }}
                                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                            >
                                <MoveDown className="text-shadow-md text-shadow-black/20"/>
                            </motion.div>
                        </motion.a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
