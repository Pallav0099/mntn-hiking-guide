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
        <nav className="sticky top-0 z-50 bg-transparent backdrop-blur-sm px-10 pt-5">
            <div className="w-full flex items-center justify-between px-4 py-3">
                {/* <a href="/">
                    <img
                        src={logo}
                        alt="Logo"
                        width={48}
                        height={48}
                        className="rounded-md"
                    />
                </a> */}
                <a href="/">
                    <h2 className="text-white text-3xl">MNTN</h2>
                </a>
                <div className="flex items-center space-x-6">
                    {NavItems.map((item) => (
                        <a key={item.link} href={item.link}>
                            <p className="text-md text-white font-bold">{item.label}</p>
                        </a>
                    ))}
                </div>
                <a href="/account">
                    <Button variant="textWithIcon" icon={<UserRound />} className={"text-white"}>Account</Button>
                </a>
            </div>
        </nav>
    );
};

export default Navbar;
