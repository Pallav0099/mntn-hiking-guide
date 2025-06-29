import heroimg from "../assets/hero.png"
const Background = () => {
    return (
        <div className="top-0 w-full">
            <img
                src={heroimg}
                alt="Hero"
                className="absolute top-0 w-auto h-[80vh] object-cover md:w-full md:h-auto md:object-contain z-[-1]"
            />
        </div>
    );
}
export default Background;