// import React from "react";

// export default function Card() {
//   return (
//     <div className="mt-20 px-10 flex flex-col sm:flex-col justify-center items-center space-y-10 sm:space-x-4">
//       <div className="w-full h-60 sm:w-1/2 bg-white shadow-md rounded-lg p-4">
//         {/* Card content for the first column */}
//         <h2 className="text-left text-xl font-bold text-gray-800">Projec 1</h2>
//         <p className="text-gray-500">This is the content for the first card.</p>
//       </div>
//       <div className="w-full h-60 sm:w-1/2 bg-white shadow-md rounded-lg p-4">
//         {/* Card content for the second column */}
//         <h2 className="text-left text-xl font-bold text-gray-800">Project 2</h2>
//         <p className="text-gray-500">
//           This is the content for the second card.
//         </p>
//       </div>
//       <div className="text-left w-full h-60 sm:w-1/2 bg-white shadow-md rounded-lg p-4">
//         {/* Card content for the second column */}
//         <h2 className="text-xl font-bold text-gray-800">Project 3</h2>
//         <p className="text-gray-500">
//           This is the content for the second card.
//         </p>
//       </div>
//     </div>
//   );
// }

//------///
// import React, { useState, useEffect } from "react";

// function AnimatedCards() {
//   const cards = [
//     {
//       id: 1,
//       title: "The Garage",
//       // content: "This is the content for the first card.",
//       image: "assets/images/ُthegarage.jpg",
//     },
//     {
//       id: 2,
//       title: "Fanz",
//       // content: "This is the content for the second card.",
//       image: "/assets/images/fanz.jpg",
//     },

//     {
//       id: 3,
//       title: "Wasm Card",
//       content: "This is the content for the fourth card.",
//     },
//     // {
//     //   id: 4,
//     //   title: "Wasm Card",
//     //   content: "This is the content for the fifth card.",
//     // },
//   ];

//   const [scrollPosition, setScrollPosition] = useState(0);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrollPosition(window.scrollY);
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   return (
//     // <div className="flex flex-col space-y-4 px-10 mb-40">
//     //   {cards.map((card, index) => (
//     //     <div
//     //       key={index}
//     //       className={`card transition-transform duration-500 bg-gray-200 h-60 rounded-lg  ${
//     //         scrollPosition > index * 200 ? "translate-y-0" : "translate-y-16"
//     //       }`}
//     //     >
//     //       <h2 className="text-xl font-bold text-gray-800 text-left px-6 mt-4">
//     //         {card.title}
//     //       </h2>

//     //       <img
//     //         src={card.image}
//     //         alt={card.title}
//     //         className="w-full h-full object-cover rounded-lg"
//     //       />

//     //       <p className="text-gray-500 px-6 text-left bg-teal-800 ">
//     //         {card.content}
//     //       </p>
//     //     </div>
//     //   ))}
//     // </div>
//     <div className="flex flex-col space-y-4 px-10 mb-40">
//       {cards.map((card, index) => (
//         <div
//           key={index}
//           className={`card transition-transform duration-500 bg-gray-200 h-60 rounded-lg  ${
//             scrollPosition > index * 200 ? "translate-y-0" : "translate-y-16"
//           }`}
//           style={{
//             backgroundImage: `url(${card.image})`,
//             backgroundSize: "cover",
//             backgroundPosition: "center",
//           }}
//         >
//           <h2 className="text-xl font-bold text-gray-100 text-left px-6 bg-gray-800 rounded-lg">
//             {card.title}
//           </h2>
//           <p className="text-gray-500 mt-32 px-6 text-left">{card.content}</p>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default AnimatedCards;
//------///
import { useState, useEffect } from "react";

// function AnimatedCards() {
//   const cards = [
//     {
//       id: 1,
//       title: "الكراج",
//       content: "موقع شركة الكراج للتعريف بالشركة وفعالياتها ",
//       image: "assets/images/thegarae.png",
//       link: "https://thegarage.sa", // Add your link here
//     },
//     // {
//     //   id: 2,
//     //   title: "فانز",
//     //   image: "/assets/images/fanz.jpg",
//     //   link: "https://fanz.example.com", // Add your link here
//     // },
//     {
//       id: 2,
//       title: "حامي",
//       content:
//         "منصة مُحاسبيةللشركات تقدم خدمات لإكتشاف الاحتيال والمخاطر الضريبية",
//       image: "assets/images/logo.svg",
//       link: "https://hammi.netlify.app", // Add your link here
//     },

//     {
//       id: 3,
//       title: "وسم",
//       content: "صفحة تفاعلية للمشاركة في اليوم العالمي للتصلب مع جمعية وسم ",
//       image: "assets/images/wsm-2.png",
//       link: "https://test1v1.netlify.app", // Add your link here
//     },
//     {
//       id: 4,
//       title: "شعلة",
//       content: "موقع تعريفي عن تطبيق شعلة ،ومتابعة إحصائيات المستخدمين ",
//       image: "assets/images/shulah.png",
//       link: "https://www.shuela.app", // Add your link here
//     },
//     {
//       id: 5,
//       title: "سايبر تراك",
//       content: "منصة لتحليل وتقيم مدى الإمتثال لشروط هيئة الأمن السيبراني",
//       image: "assets/images/CyberTrack-black.svg",
//       link: "https://cyber-track.netlify.app", // Add your link here
//     },
//   ];

//   const [, setScrollPosition] = useState(0);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrollPosition(window.scrollY);
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   return (
//     // <div className="flex flex-col space-y-4 px-10 mb-40">
//     //   {cards.map((card, index) => (
//     //     // <a
//     //     //   href={card.link} // Link to the website
//     //     //   target="_blank" // Open in a new tab
//     //     //   rel="noopener noreferrer" // Security best practice
//     //     //   key={index}
//     //     //   className={`card transition-transform duration-500 bg-gray-200 h-60 rounded-lg ${
//     //     //     scrollPosition > index * 200 ? "translate-y-0" : "translate-y-16"
//     //     //   }`}
//     //     //   style={{
//     //     //     backgroundImage: `url(${card.image})`,
//     //     //     backgroundSize: "cover",
//     //     //     backgroundPosition: "center",
//     //     //     textDecoration: "none", // Ensure no underline
//     //     //   }}
//     //     // >
//     //     //   <div className="bg-gray-900 bg-opacity-70 p-4 rounded-lg">
//     //     //     <h2 className="text-xl font-bold text-gray-100 font-Vazirmatn">
//     //     //       {card.title}
//     //     //     </h2>
//     //     //     <p className="text-gray-100 mt-4 font-Vazirmatn">{card.content}</p>
//     //     //   </div>
//     //     // </a>

//     //     <div
//     //       key={index}
//     //       className={`card relative transition-transform duration-500 bg-gray-200 h-60 rounded-lg ${
//     //         scrollPosition > index * 200 ? "translate-y-0" : "translate-y-16"
//     //       }`}
//     //     >
//     //       {/* Add the background image as a pseudo-element */}
//     //       <div
//     //         className="absolute inset-0 bg-cover bg-center rounded-lg"
//     //         style={{
//     //           backgroundImage: `url(${card.image})`,
//     //           filter: "blur(1px)", // Add blur to the background image
//     //           zIndex: -1, // Ensure it stays behind the content
//     //         }}
//     //       ></div>

//     //       {/* Title and description */}
//     //       {/* <h2 className="text-xl font-bold text-gray-100 px-6 bg-gray-500 rounded-lg font-Vazirmatn text-right py-2">
//     //         {card.title}
//     //       </h2>
//     //       <p className="text-gray-100 mt-32 px-6 text-left">{card.content}</p> */}
//     //       <div className="bg-gray-900 bg-opacity-70 p-2 rounded-lg">
//     //         <h2 className="text-xl font-bold text-gray-100 font-Vazirmatn">
//     //           {card.title}
//     //         </h2>
//     //         <p className="text-gray-100 mt-4 font-Vazirmatn">{card.content}</p>
//     //       </div>
//     //     </div>
//     //   ))}
//     // </div>

//     <div className="flex flex-col space-y-4 px-10 mb-40">
//       {cards.map((card, index) => (
//         <a
//           key={index}
//           href={card.link} // Make sure you have a link to navigate to
//           className="card relative transition-transform duration-500  h-60 rounded-lg"
//           style={{
//             display: "block", // Make the entire div clickable by turning it into a block element
//             textDecoration: "none", // Remove underline from the link
//           }}
//         >
//           {/* Add the background image as a pseudo-element */}

//           <div
//             className="absolute inset-0 bg-cover bg-center rounded-lg"
//             style={{
//               backgroundImage: `url(${card.image})`,
//               filter: "blur(2px)", // Add blur to the background image
//               zIndex: -1, // Ensure it stays behind the content
//             }}
//           ></div>

//           <div className="bg-gray-900 bg-opacity-70 p-2 rounded-lg">
//             <h2 className="text-xl font-bold text-gray-100 font-Vazirmatn">
//               {card.title}
//             </h2>
//             <p className="text-gray-100 mt-4 font-Vazirmatn">{card.content}</p>
//           </div>
//         </a>
//       ))}
//     </div>
//   );
// }

// export default AnimatedCards;

function AnimatedCards() {
  const cards = [
    {
      id: 1,
      title: "الكراج",
      content:
        "موقع شركة الكراج للتعريف بالشركة والخدمات المقدمة للشركات الناشئة ",
      image: "assets/images/thegarae.png",
      link: "https://thegarage.sa",
    },
    {
      id: 2,
      title: "حامي",
      content:
        "منصة مُحاسبيةللشركات تقدم خدمات لإكتشاف الاحتيال والمخاطر الضريبية",
      image: "assets/images/logo.svg",
      link: "https://hammi.netlify.app",
    },
    {
      id: 3,
      title: "وسم",
      content: "صفحة تفاعلية للمشاركة في اليوم العالمي للتصلب مع جمعية وسم ",
      image: "assets/images/wsm-2.png",
      link: "https://test1v1.netlify.app",
    },
    {
      id: 4,
      title: "شعلة",
      content: "موقع تعريفي عن تطبيق شعلة ،ومتابعة إحصائيات المستخدمين ",
      image: "assets/images/shulah.png",
      link: "https://www.shuela.app",
    },
    {
      id: 5,
      title: "سايبر تراك",
      content: "منصة لتحليل وتقيم مدى الإمتثال لشروط هيئة الأمن السيبراني",
      image: "assets/images/CyberTrack-black.svg",
      link: "https://cybertrackv1.netlify.app",
    },
  ];

  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="flex flex-col space-y-4 px-10 mb-40">
      {cards.map((card, index) => (
        <a
          key={index}
          href={card.link}
          target="_blank"
          rel="noopener noreferrer"
          className={`card relative transition-transform duration-500 bg-gray-200 h-60 rounded-lg ${
            scrollPosition > index * 200 ? "translate-y-0" : "translate-y-16"
          }`}
          style={{
            display: "block",
            textDecoration: "none",
          }}
        >
          <div
            className="absolute inset-0 bg-cover bg-center rounded-lg"
            style={{
              backgroundImage: `url(${card.image})`,
              zIndex: -1,
            }}
          ></div>

          <div className="bg-gray-900 bg-opacity-70 p-4 rounded-lg relative">
            <h2 className="text-xl font-bold text-gray-100 font-Vazirmatn">
              {card.title}
            </h2>
            <p className="text-gray-100 mt-4 font-Vazirmatn">{card.content}</p>
          </div>
        </a>
      ))}
    </div>
  );
}

export default AnimatedCards;
