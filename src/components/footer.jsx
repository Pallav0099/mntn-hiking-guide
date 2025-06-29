const footerLinks = [
  {
    title: "More on The Blog",
    links: [
      "About MNTN",
      "Contributors & Writers",
      "Write For Us",
      "Contact Us",
      "Privacy Policy",
    ],
  },
  {
    title: "More on MNTN",
    links: ["The Team", "Jobs", "Press"],
  },
];

export default function Footer() {
  return (
    <footer className="bg-background text-white px-6 py-30 max-w-screen">
      <div className="min-w-[80vw] mx-auto flex flex-col md:flex-row justify-around gap-10">
        <div>
          <h2 className="text-white text-3xl font-playFair tracking-wider font-semibold mb-2">
            MNTN
          </h2>
          <p className="text-md font-bold mb-8 text-left text-gray-300">
            Get out there & discover your next <br></br>slope, mountain &
            destination!
          </p>
          <br></br>
          <br></br>
          <p className="text-md text-gray-400">
            Copyright 2019 MNTN, Inc. Terms & Privacy
          </p>
        </div>

        {footerLinks.map((section, index) => (
          <div key={index}>
            <h3 className="text-secondary-light text-lg font-semibold mb-4">
              {section.title}
            </h3>
            <ul className="space-y-3.25 text-md font-medium">
              {section.links.map((link, i) => (
                <li
                  key={i}
                  className="hover:underline cursor-pointer text-gray-200"
                >
                  {link}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </footer>
  );
}