// function Footer() {
//   return (
//     <div className="bg-[var(--secondary)] flex items-center ">
//       <div className="w-[30%] text-center">
//         <a href="#">
//           <h1 className="text-[32px] font-extrabold text-[var(--primary)]">
//             Bright <em className="not-italic text-[var(--quartery)] ">Path</em>
//           </h1>
//         </a>
//       </div>
//       <div className="w-[70%]">
//         <div className="flex justify-start">
//           <ul>
//             <li>
//               <a>Privacy Policy</a>
//             </li>
//             <li>
//               <a>Terms of Use</a>
//             </li>
//             <li>
//               <a>FAQ</a>
//             </li>
//           </ul>
//           <ul>
//             <li>
//               <a>About us</a>
//             </li>
//             <li>
//               <a>contact us</a>
//             </li>
//             <li>
//               <a>Actitivites</a>
//             </li>
//           </ul>
//         </div>
//         <div>
//           <p>
//             Copyright Notice: © 2024 Your Website Name. All rights reserved.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }
// function Footer() {
//   return (
//     <div className=" relative bg-[var(--secondary)]">
//       <a href="#" className="absolute top-[167px] left-[100px]">
//         <h1 className=" text-[32px] font-extrabold text-[var(--primary)]">
//           Bright <em className="not-italic text-[var(--quartery)] ">Path</em>
//         </h1>
//       </a>
//     </div>
//   );
// }
function Footer() {
  return (
    <div className="bg-[var(--secondary)] pt-12">
      <div className="container mx-auto px-4">
        {/* Flex container for logo and links */}
        <div className="flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-16">
          {/* Logo */}
          <a href="#" className="hover:opacity-80 transition-opacity">
            <h1 className="text-3xl font-extrabold text-[var(--primary)]">
              Bright <span className="text-[var(--quartery)]">Path</span>
            </h1>
          </a>

          {/* Links - Flex row on desktop, column on mobile */}
          <div className="flex flex-col sm:flex-row gap-6 sm:gap-12 justify-evenly w-[50%]">
            {/* Resources Links */}
            <div className="text-[var(--primary)]">
              <h3 className="font-bold mb-2">Resources</h3>
              <ul className="space-y-1">
                <li>
                  <a
                    href="/blog"
                    className="hover:text-[var(--quartery)] transition-colors"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="/guides"
                    className="hover:text-[var(--quartery)] transition-colors"
                  >
                    Parent Guides
                  </a>
                </li>
                <li>
                  <a
                    href="/activities"
                    className="hover:text-[var(--quartery)] transition-colors"
                  >
                    Activity Library
                  </a>
                </li>
              </ul>
            </div>

            {/* Company Links */}
            <div className="text-[var(--primary)]">
              <h3 className="font-bold mb-2">Company</h3>
              <ul className="space-y-1">
                <li>
                  <a
                    href="/about"
                    className="hover:text-[var(--quartery)] transition-colors"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="/team"
                    className="hover:text-[var(--quartery)] transition-colors"
                  >
                    Our Team
                  </a>
                </li>
                <li>
                  <a
                    href="/careers"
                    className="hover:text-[var(--quartery)] transition-colors"
                  >
                    Careers
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="text-[var(--primary)]">
              <h3 className="font-bold mb-2">Contact</h3>
              <ul className="space-y-1">
                <li>
                  <a
                    href="mailto:hello@brightpath.com"
                    className="hover:text-[var(--quartery)] transition-colors"
                  >
                    Email Us
                  </a>
                </li>
                <li>
                  <a
                    href="/contact"
                    className="hover:text-[var(--quartery)] transition-colors"
                  >
                    Contact Form
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright - Flex to align with logo */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mt-20 border-t border-[var(--primary)] border-opacity-20 py-4">
          <p className="text-[var(--primary)] text-sm">
            © {new Date().getFullYear()} Bright Path. All rights reserved.
          </p>
          <div className="mt-2 md:mt-0 text-[var(--primary)]">
            <a
              href="/privacy"
              className="text-sm hover:text-[var(--quartery)] transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="/terms"
              className="text-sm ml-4 hover:text-[var(--quartery)] transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Footer;
