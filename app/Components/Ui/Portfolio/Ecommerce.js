// import classes from "./Portfolio.module.css";
// import cute from "../../../Images/cutedesktopopt.gif";
// import blaberg from "../../../Images/blabergoptloop.gif";
// import oyps from "../../../Images/oyps.gif";
// import cutemobile from "../../../Images/cutemobileopt.gif";
// import blabergmobile from "../../../Images/blabergmobileopt.gif";
// import oypsmobile from "../../../Images/oypsmobile.gif";
// import { useEffect } from "react";
// import Image from "mui-image";

// const apps = [
//   {
//     id: "ecommerce-portfolio",
//     title: "E-commerce Solutions Portfolio",
//     category: "E-commerce",
//     type: "Portfolio",
//     featured: true,
//     desktopImages: [cute, blaberg, oyps],
//     mobileImages: [cutemobile, blabergmobile, oypsmobile],
//     thumbnail: cute,
//     description:
//       "A comprehensive collection of Shopify e-commerce projects showcasing custom theme development, responsive design, and conversion optimization.",
//     overview: [
//       "Complete custom Shopify stores with lookbooks and seasonal product categorization",
//       "Custom responsive landing pages with mobile-optimized designs",
//       "Conversion-focused redesigns with enhanced user experiences",
//       "Fully responsive designs optimized for all platforms",
//       "Custom product categorization and seamless user experiences",
//       "Built with HTML, CSS, JavaScript, and Liquid",
//     ],
//     techStack: [
//       "Shopify",
//       "HTML",
//       "CSS",
//       "JavaScript",
//       "Liquid",
//       "Responsive Design",
//     ],
//     links: [
//       {
//         type: "portfolio",
//         url: "#",
//         label: "View Portfolio",
//       },
//     ],
//     features: [
//       "Custom Shopify Theme Development",
//       "Responsive Design",
//       "Conversion Optimization",
//       "Product Lookbooks",
//       "Seasonal Categorization",
//       "Mobile-First Approach",
//       "Custom Landing Pages",
//       "User Experience Enhancement",
//     ],
//   },
// ];
// function Ecommerce() {
//   useEffect(() => {
//     window.scrollTo(0, 0);
//   });

//   const projectsList = apps.map((project, index) => {
//     return (
//       <div key={project.id} className={classes["project"]}>
//         <div className={classes["project-heading"]}>{project.title}</div>

//         {/* Desktop Images */}
//         <div className={classes["imgs"]}>
//           {project.desktopImages.map((img, imgIndex) => {
//             return (
//               <Image
//                 height={"35vw"}
//                 width="auto"
//                 fit="contain"
//                 className={"img"}
//                 key={`desktop-${imgIndex}`}
//                 alt={`${project.title} - Desktop ${imgIndex + 1}`}
//                 loading="lazy"
//                 src={img}
//               />
//             );
//           })}
//         </div>

//         {/* Mobile Images */}
//         <div className={classes["imgs"]}>
//           {project.mobileImages.map((img, imgIndex) => {
//             return (
//               <Image
//                 height={"35vw"}
//                 width="auto"
//                 fit="contain"
//                 className={"img"}
//                 key={`mobile-${imgIndex}`}
//                 alt={`${project.title} - Mobile ${imgIndex + 1}`}
//                 loading="lazy"
//                 src={img}
//               />
//             );
//           })}
//         </div>

//         {/* Project Links */}
//         <div className={classes["project-links"]}>
//           {project.links.map((link, linkIndex) => {
//             return (
//               <a
//                 href={link.url}
//                 key={linkIndex}
//                 rel="noreferrer"
//                 target="_blank"
//               >
//                 {link.label}
//               </a>
//             );
//           })}
//         </div>

//         {/* Project Description */}
//         <div className={classes["project-overview"]}>
//           <p>{project.description}</p>
//         </div>

//         {/* Tech Stack */}
//         <div className={classes["tech-stack"]}>
//           <h4>Tech Stack:</h4>
//           <div className={classes["tech-items"]}>
//             {project.techStack.map((tech, techIndex) => (
//               <span key={techIndex} className={classes["tech-item"]}>
//                 {tech}
//               </span>
//             ))}
//           </div>
//         </div>

//         {/* Features */}
//         <div className={classes["features"]}>
//           <h4>Key Features:</h4>
//           <ul>
//             {project.features.map((feature, featureIndex) => (
//               <li key={featureIndex}>{feature}</li>
//             ))}
//           </ul>
//         </div>

//         {/* Overview Points */}
//         <div className={classes["overview-points"]}>
//           <h4>Project Overview:</h4>
//           <ul>
//             {project.overview.map((point, pointIndex) => (
//               <li key={pointIndex}>{point}</li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     );
//   });
//   return (
//     <>
//       <div className={classes["Portfolio"]}>
//         <div className={classes["heading"]}>Ecommerce Projects</div>
//         {projectsList}
//       </div>
//     </>
//   );
// }
function Ecommerce() {
  return <></>;
}
export default Ecommerce;
