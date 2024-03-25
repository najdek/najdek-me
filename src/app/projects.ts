export const projectList = [
  {
    id: "icup",
    name: "iCUP.pl",
    shortDesc: "Custom mug designer",
    fullDesc: `Developed a user friendly web app allowing clients to design their own mugs.
    Numerous clients are utilizing the platform to create and purchase personalized mugs.
    
    Made in plain HTML/CSS/JS, with jQuery and Fabric.js
    PHP backend`,
    pageUrl: "https://icup.pl",
    images: [
      "/project_images/icup/01.png",
      "/project_images/icup/02.png",
      "/project_images/icup/03.png",
    ],
  },
  {
    id: "hue",
    name: "Hue Web App",
    shortDesc: "App to control Philips Hue",
    fullDesc: `Developed in React/Next.js.
    This project provided an ideal opportunity to enhance skills in managing dynamically changing content in React app.
    
    Currently fully supports only RGB lights, as I didn't have any other types of lights to test.

    Ideally, it should be hosted in your local network. I recommend using Docker for this.
    `,
    githubUrl: "https://github.com/najdek/HueWebApp",
    images: [
      "/project_images/hue/01.png",
      "/project_images/hue/02.png",
      "/project_images/hue/03.png",
      "/project_images/hue/04.png",
    ],
  },
  {
    id: "monmat-order-manager",
    name: "Allegro Order Manager",
    shortDesc: "Something like Baselinker",
    fullDesc: `Created a web app to manage orders from Allegro marketplace.
    I've been maintaining and using it heavily for many years in my business.

    Main features:
- automatically pulls new orders from Allegro.pl platform,
- generates A4 print-page for each order,
- tracks shipments of orders,
- and more…

Integrates with REST API.
Years ago it was also integrated with Allegro's old SOAP API because some functions weren't supported by their REST API yet.

Made with PHP/MySQL/HTML/JavaScript/CSS
    `,
    images: [
      "/project_images/monmat-order-manager/01.png",
      "/project_images/monmat-order-manager/02.png",
      "/project_images/monmat-order-manager/03.png",
      "/project_images/monmat-order-manager/04.png",
    ],
  },
  {
    id: "monmat-project-manager",
    name: "T-Shirt/Mug Manager",
    shortDesc: "Windows App (VB.NET)",
    fullDesc: `Windows app that organizes graphic designs (Photoshop, Illustrator files),
    automatically puts them on t-shirt/mug mockups,
    sends generated images to a web server,
    generates CSV with a list of products for easy importing in PrestaShop / WooCommerce / Allegro platforms.

    I've been maintaining and using it heavily for years in my business.

    Made with VB.NET (Visual Studio), ImageMagick and some windows-batch scripts.
    `,
    images: [
      "/project_images/monmat-project-manager/01.png",
      "/project_images/monmat-project-manager/02.png",
    ],
  },
  {
    id: "carbon-for-f1tv",
    name: "Carbon for F1TV",
    shortDesc: "Browser Extension",
    fullDesc: `A browser extension that adds some useful features to F1TV streaming service.
    The main feature is fully synchronized playback of multiple stream-channels.
    It also adds a few smaller features, like theater-mode playback.

    Made in plain JavaScript and jQuery
    `,
    pageUrl: "https://carbon-for-f1tv.github.io",
    githubUrl: "https://github.com/Carbon-for-F1TV/Carbon-for-F1TV",
    images: [
      "/project_images/carbon-for-f1tv/01.png",
      "/project_images/carbon-for-f1tv/02.png",
      "/project_images/carbon-for-f1tv/03.png",
    ],
  },
  {
    id: "this-portfolio",
    name: "This Portfolio",
    shortDesc: "Made with React/Next.js",
    fullDesc: `This portfolio is my another React/Next.js project.
    Created it without using any big CSS libraries (only Tailwind, and FontAwesome icons).

    Checkout GitHub link below for source code.
    `,
    githubUrl: "https://github.com/najdek/najdek-me",
    images: ["/project_images/this-portfolio/01.png"],
  },
  {
    id: "monmat-pl",
    name: "monmat.pl",
    shortDesc: "Landing page",
    fullDesc: `My very first React/Next.js project.
    A simple landing page for my business.

    Made it in less than a day since trying to use React for the first time.
    `,
    githubUrl: "https://github.com/najdek/monmat_pl_page",
    pageUrl: "https://monmat.pl",
    images: ["/project_images/monmat-pl/01.png"],
  },
];
