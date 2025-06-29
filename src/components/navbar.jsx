import logo from "../assets/logo.png";
import Button from "./ui/button";
import { UserRound } from "lucide-react";
const NavItems = [
    { link: "/equipment", label: "Equipment" },
    { link: "/about", label: "About us" },
    { link: "/blog", label: "Blog" },
];

const Navbar = () => {
    return (
        <nav className="sticky top-0 z-50 bg-transparent backdrop-blur-[3px] px-4 py-3 md:px-10 md:py-5">
            <div className="w-full flex items-center justify-between">
                <a href="/">
                    <h2 className="text-3xl">MNTN</h2>
                </a>
                <div className="hidden md:flex items-center space-x-6">
                    {NavItems.map((item) => (
                        <a key={item.link} href={item.link}>
                            <p className="text-md font-bold">{item.label}</p>
                        </a>
                    ))}
                </div>
                <a href="/account">
                    <Button variant="textWithIcon" icon={<UserRound />} className={"text-primary"}>Account</Button>
                </a>
            </div>
        </nav>
    );
};

export default Navbar;
