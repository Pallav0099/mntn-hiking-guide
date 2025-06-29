import logo from "../assets/logo.png";
import Button from "./ui/button";
import { UserRound, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";

const NavItems = [
    { link: "/equipment", label: "Equipment" },
    { link: "/about", label: "About us" },
    { link: "/blog", label: "Blog" },
];

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="sticky top-0 z-50 bg-background/40 backdrop-blur-md px-4 py-4 md:static md:bg-transparent md:px-12 md:py-8 min-h-[60px] md:min-h-[80px] flex items-center justify-between">
            <div className="w-full flex items-center justify-between">
                <a href="/">
                    <h2 className="text-3xl">MNTN</h2>
                </a>
                
                <div className="hidden md:flex items-center space-x-6">
                    {NavItems.map((item, index) => (
                        <motion.a 
                            key={item.link} 
                            href={item.link}
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
                            whileHover={{ y: -2 }}
                        >
                            <p className="text-md font-bold">{item.label}</p>
                        </motion.a>
                    ))}
                </div>
                
                <div className="flex items-center space-x-4">
                    <motion.a 
                        href="/account"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        className="hidden md:block"
                    >
                        <Button variant="textWithIcon" icon={<UserRound />} className={"text-primary"}>Account</Button>
                    </motion.a>
                    
                    <motion.button
                        className="md:hidden p-2 pr-4"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        whileTap={{ scale: 0.95 }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                    >
                        <AnimatePresence mode="wait">
                            {isMenuOpen ? (
                                <motion.div
                                    key="close"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ ropacity: 0 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <X className="w-6 h-6 text-white" />
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="menu"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <Menu className="w-6 h-6 text-white" />
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.button>
                </div>
            </div>
            
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="md:hidden absolute top-full left-0 right-0 bg-background/40"
                    >
                        <motion.div 
                            className="flex flex-col space-y-2 pt-4 pb-6 px-4"
                            initial={{ y: -10 }}
                            animate={{ y: 0 }}
                            exit={{ y: -10 }}
                            transition={{ duration: 0.3 }}
                        >
                            {NavItems.map((item, index) => (
                                <motion.a
                                    key={item.link}
                                    href={item.link}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    transition={{ duration: 0.3, delay: index * 0.05 }}
                                    onClick={() => setIsMenuOpen(false)}
                                    className="text-lg font-bold py-3 border-b border-white/10"
                                >
                                    {item.label}
                                </motion.a>
                            ))}
                            <motion.a
                                href="/account"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.3, delay: NavItems.length * 0.05 }}
                                onClick={() => setIsMenuOpen(false)}
                                className="text-lg font-bold py-3"
                            >
                                Account
                            </motion.a>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
