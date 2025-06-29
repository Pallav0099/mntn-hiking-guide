import Block1Img from "../assets/block3.png";
import { MoveRight } from "lucide-react";
import { motion } from "motion/react";

const Block3 = () => {
    return (
        <>
            <section id="block1" className="min-w-screen bg-background overflow-visible pt-8 xl:pt-18 relative">
                <div className="flex flex-col md:flex-row gap-6 md:gap-12 lg:gap-18 items-center justify-center">
                    <div className="order-1 max-w-[80vw] md:max-w-[40vw]">
                        <motion.div
                            className="absolute left-1 md:left-auto"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        >
                            <p className="text-9xl font-extrabold text-white/10">03</p>
                        </motion.div>
                        <div className="flex flex-col gap-4 justify-center pt-12 md:pl-10 xl:pl-18">
                            <motion.div 
                                className="flex items-center gap-2 pt-6"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                            >
                                <span className="w-10 h-[2px] bg-secondary"></span>
                                <span className="uppercase text-secondary text-sm font-semibold tracking-widest">WHERE YOU GO IS THE KEY</span>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
                            >
                                <h1 className="text-4xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-left">Understand Your Map & Timing</h1>
                            </motion.div>
                            <motion.p 
                                className="text-lg"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
                            >
                                To start, print out the hiking guide and map. If it's raining, throw them in a Zip-lock bag. Read over the guide, study the map, and have a good idea of what to expect. I like to know what my next landmark is as I hike. For example, I'll read the guide and know that say, in a mile, I make a right turn at the junction..
                            </motion.p>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
                            >
                                <motion.a 
                                    className="flex flex-cols items-center space-x-2" 
                                    href="#block1"
                                    whileHover={{ x: 5 }}
                                    transition={{ duration: 0.3, ease: "easeOut" }}
                                >
                                    <p className="text-secondary text-lg font-bold">read more</p>
                                    <motion.div
                                        animate={{ x: [0, 3, 0] }}
                                        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                                    >
                                        <MoveRight className="text-secondary" />
                                    </motion.div>
                                </motion.a>
                            </motion.div>
                        </div>
                    </div>
                    <motion.div 
                        className="order-2"
                        initial={{ opacity: 0, y: 20, scale: 0.98 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
                    >
                        <motion.img 
                            src={Block1Img} 
                            alt="Block1" 
                            className="w-[80vw] md:w-[40vw] xl:w-[30vw] max-h-[720px] object-cover md:pt-12"
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.4, ease: "easeOut" }}
                        />
                    </motion.div>
                </div>
            </section>
        </>
    );
}
export default Block3;