import React from "react";
import Layout from "../components/Layout";
import Card from "../components/cards/Card";
import Button from "../components/Button";

const Services = props => {
  return (
    <Layout title="Dustin Heisey | Services">
      <main className="padding-lg services">
        <Card>
          <h1 className="margin-b-md">Services</h1>
          <p className="margin-b-md color-m">
            I can help you with all stages of your web design and development.
            Check out my services below.
          </p>
        </Card>
        <div className="services-grid">
          <Card>
            <h1 className="margin-b-md">Website Design</h1>
            <p className="margin-b-md color-m">
              Let me design a purposeful, converting website mockup for all
              screen sizes.
            </p>
          </Card>
          <Card>
            <h1 className="margin-b-md">Blogging CMS</h1>
            <p className="margin-b-md color-m">
              I can develop your blog in your favorite CMS or help you find the
              one that is best for your specific situation.
            </p>
          </Card>
          <Card>
            <h1 className="margin-b-md">Custom Projects</h1>
            <p className="margin-b-md color-m">
              Give me your idea and I'll help it become a reality.
            </p>
          </Card>
          <Card>
            <h1 className="margin-b-md">Ecommerce</h1>
            <p className="margin-b-md color-m">
              Sell your products and services online and see unbelievable growth
              in your business.
            </p>
          </Card>
          <Card>
            <h1 className="margin-b-md">Search Engine Optimization</h1>
            <p className="margin-b-md color-m">
              Get your site viewed by the most people possible.
            </p>
          </Card>
          <Card>
            <h1 className="margin-b-md">Progressive Web Apps</h1>
            <p className="margin-b-md color-m">
              Convert your website to a strikingly close to native web
              application.
            </p>
          </Card>
        </div>

        <Card>
          <h1 className="margin-b-md">Quality First</h1>
          <p className="margin-b-md color-m">
            Every project is made with absolute attention to detail and genuine
            care for your success. Learn more about my process.
          </p>
          <Button text="About Me" link="/about" />
        </Card>
      </main>
    </Layout>
  );
};

export default Services;

// import React from "react";
// import Layout from "../components/Layout";
// import Card from "../components/cards/Card";
// import Button from "../components/Button";
// import SEO from "../static/seo-service.svg";
// import Custom from "../static/custom-service.svg";
// import Blog from "../static/blog-service.svg";
// import App from "../static/app-service.svg";
// import Shopping from "../static/shopping-service.svg";
// import Design from "../static/design-service.svg";

// const Services = props => {
//   return (
//     <Layout title="Dustin Heisey | Services">
//       <main className="padding-lg services">
//         <Card>
//           <h1 className="margin-b-md">Services</h1>
//           <p className="margin-b-md color-m">
//             I can help you with all stages of your web design and development.
//             Check out my services below.
//           </p>
//         </Card>
//         <div className="services-grid">
//           <Card image>
//             <img
//               src={Design}
//               alt="Design"
//               className="border-r-tl-lg border-r-tr-lg"
//             />
//             <div className="padding-md height-p-xmd">
//               <h1 className="margin-b-md">Website Design</h1>
//               <p className="margin-b-md color-m">
//                 Let me design a purposeful, converting website mockup for all
//                 screen sizes.
//               </p>
//             </div>
//           </Card>
//           <Card image>
//             <img
//               src={Blog}
//               alt="Blogging CMS"
//               className="border-r-tl-lg border-r-tr-lg"
//             />
//             <div className="padding-md height-p-xmd">
//               <h1 className="margin-b-md">Blogging CMS</h1>
//               <p className="margin-b-md color-m">
//                 I can develop your blog in your favorite CMS or help you find
//                 the one that is best for your specific situation.
//               </p>
//             </div>
//           </Card>
//           <Card image>
//             <img
//               src={Custom}
//               alt="Custom Projects"
//               className="border-r-tl-lg border-r-tr-lg"
//             />
//             <div className="padding-md height-p-xmd">
//               <h1 className="margin-b-md">Custom Projects</h1>
//               <p className="margin-b-md color-m">
//                 Give me your idea and I'll help it become a reality.
//               </p>
//             </div>
//           </Card>
//           <Card image>
//             <img
//               src={Shopping}
//               alt="Ecommerce"
//               className="border-r-tl-lg border-r-tr-lg"
//             />
//             <div className="padding-md height-p-xmd">
//               <h1 className="margin-b-md">Ecommerce</h1>
//               <p className="margin-b-md color-m">
//                 Sell your products and services online and see unbelievable
//                 growth in your business.
//               </p>
//             </div>
//           </Card>
//           <Card image>
//             <img
//               src={SEO}
//               alt="SEO"
//               className="border-r-tl-lg border-r-tr-lg"
//             />
//             <div className="padding-md height-p-xmd">
//               <h1 className="margin-b-md">Search Engine Optimization</h1>
//               <p className="margin-b-md color-m">
//                 Get your site viewed by the most people possible.
//               </p>
//             </div>
//           </Card>
//           <Card image>
//             <img
//               src={App}
//               alt="PWA"
//               className="border-r-tl-lg border-r-tr-lg"
//             />
//             <div className="padding-md height-p-xmd">
//               <h1 className="margin-b-md">Progressive Web Apps</h1>
//               <p className="margin-b-md color-m">
//                 Convert your website to a strikingly close to native web
//                 application.
//               </p>
//             </div>
//           </Card>
//         </div>

//         <Card>
//           <h1 className="margin-b-md">Quality First</h1>
//           <p className="margin-b-md color-m">
//             Every project is made with absolute attention to detail and genuine
//             care for your success. Learn more about my process.
//           </p>
//           <Button text="About Me" link="/about" />
//         </Card>
//       </main>
//     </Layout>
//   );
// };

// export default Services;
