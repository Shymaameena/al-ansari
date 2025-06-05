// "use client";
// import { useEffect, useState } from "react";

// export function useNavbar() {
//   const [showTopBar, setShowTopBar] = useState(true);
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [lastScrollY, setLastScrollY] = useState(0);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   console.log(isMobileMenuOpen);

//   useEffect(() => {
//     const handleScroll = () => {
//       const currentScrollY = window.scrollY;

//       // Determine if page is scrolled at all
//       setIsScrolled(currentScrollY > 10);

//       // Hide top bar when scrolling down, show when scrolling up
//       if (currentScrollY > lastScrollY && currentScrollY > 50) {
//         // scrolling down
//         setShowTopBar(false);
//       } else if (currentScrollY < lastScrollY || currentScrollY < 10) {
//         // scrolling up or at top
//         setShowTopBar(true);
//       }

//       setLastScrollY(currentScrollY);
//     };

//     window.addEventListener("scroll", handleScroll, { passive: true });
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [lastScrollY]);

//   const toggleMobileMenu = () => {
//     setIsMobileMenuOpen(!isMobileMenuOpen);
//   };

//   return {
//     showTopBar,
//     isScrolled,
//     isMobileMenuOpen,
//     toggleMobileMenu,
//     closeMobileMenu: () => setIsMobileMenuOpen(false),
//   };
// }
