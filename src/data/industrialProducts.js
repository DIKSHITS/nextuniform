// src/data/products.js

const productImages = [
  require("../asstes/0.png"),
  require("../asstes/1.png"),
  require("../asstes/2.png"),
  require("../asstes/3.png"),
  require("../asstes/4.png"),
  require("../asstes/5.png"),
  require("../asstes/6.png"),
  require("../asstes/7.png"),
  require("../asstes/8.png"),
  require("../asstes/9.png"),
  require("../asstes/10.png"),
  require("../asstes/11.png"),
  require("../asstes/12.png"),
  require("../asstes/13.png"),
  require("../asstes/14.png"),
  require("../asstes/15.png"),
  require("../asstes/16.png"),
  require("../asstes/17.png"),
  require("../asstes/18.png"),
  require("../asstes/19.png"),
  require("../asstes/20.png"),
  require("../asstes/21.png"),
  require("../asstes/22.png"),
  require("../asstes/23.png"),
  require("../asstes/24.png"),
  require("../asstes/25.png"),
  require("../asstes/26.png"),
  require("../asstes/27.png"),
  require("../asstes/28.png"),
  require("../asstes/29.png"),
  require("../asstes/30.png"),
  require("../asstes/31.png"),
  require("../asstes/32.png"),
  require("../asstes/33.png"),
  require("../asstes/34.png"),
  require("../asstes/35.png"),

  require("../asstes/122.png"),
  require("../asstes/123.png"),
  require("../asstes/124.png"),
  require("../asstes/125.png"),
  require("../asstes/126.png"),
  require("../asstes/127.png"),
  require("../asstes/128.png"),
  require("../asstes/129.png"),
  require("../asstes/130.png"),
  require("../asstes/131.png"),
  require("../asstes/132.png"),
  require("../asstes/133.png"),
  require("../asstes/134.png"),
  require("../asstes/135.png"),
  require("../asstes/136.png"),
  require("../asstes/137.png"),
  require("../asstes/138.png"),
  require("../asstes/139.png"),
  require("../asstes/140.png"),
  require("../asstes/141.png"),
  require("../asstes/142.png"),
  require("../asstes/143.png"),
  require("../asstes/144.png"),
  require("../asstes/145.png"),
  require("../asstes/146.png"),
  require("../asstes/147.png"),
  require("../asstes/148.png"),
  require("../asstes/149.png"),
  require("../asstes/150.png"),
  require("../asstes/151.png"),
  require("../asstes/152.png"),
];

const productNames = [
  "Khaki Industrial Coverall",
  "Grey Safety Coverall",
  "Olive Green Work Coverall",
  "Brown Mechanic Coverall",
  "Grey Utility Coverall",
  "Green Industrial Coverall",

  "Light Grey Work Coverall",
  "Blue Industrial Coverall",
  "Black Orange Safety Coverall",
  "Navy Reflective Coverall",
  "Orange High Visibility Coverall",
  "Red Industrial Coverall",

  "Orange Reflective Coverall",
  "Yellow Industrial Coverall",
  "Hi-Vis Safety Coverall",
  "Reflective Work Coverall",
  "Navy Safety Coverall",
  "Orange Rain Safety Suit",

  "Heavy Duty Reflective Jacket",
  "Orange Reflective Safety Suit",
  "Orange Safety Vest",
  "Lime Green Safety Vest",
  "Navy Reflective Vest",
  "Workshop Utility Shirt",

  "Mechanic Work Shirt",
  "Grey Industrial Shirt",
  "Orange Black Work Shirt",
  "Hi-Vis Orange Work Shirt",
  "Reflective Utility Shirt",
  "Yellow Reflective Work Shirt",

  "Reflective Safety Trouser",
  "Industrial Work Shirt",
  "Reflective Navy Trouser",
  "Reflective Work Trouser",
  "Orange Reflective Trouser",
  "Hi-Vis Orange Trouser",

  "Beige Reflective Coverall",
  "Navy Industrial Coverall",
  "Blue Orange Safety Coverall",
  "Khaki Utility Coverall",
  "Green Mechanic Coverall",
  "Reflective Safety Coverall",

  "Navy Work Uniform",
  "Orange Industrial Uniform",
  "Blue Work Uniform",
  "Grey Workshop Uniform",
  "Reflective Utility Uniform",
  "Beige Industrial Uniform",

  "Red Safety Shirt",
  "Blue Utility Trouser",
  "Orange Reflective Trouser",
  "Navy Reflective Trouser",
  "Turquoise Safety Trouser",
  "Orange Work Trouser",

  "Black Grey Work Trouser",
  "Blue Industrial Uniform",
  "Grey Orange Work Uniform",
  "Orange Navy Safety Uniform",
  "Navy Reflective Uniform",
  "Hi-Vis Yellow Safety Uniform",

  "Orange Blue Work Uniform",
  "Orange Reflective Vest",
  "Orange Green Safety Vest",
  "Lime Reflective Vest",
  "Executive Safety Vest",
  "Lime Reflective Vest",

  "Black Reflective Vest",
  "Orange Reflective Vest",
  "Green Reflective Vest",
  "Grey Reflective Vest",
  "Orange Safety Vest",
  "Black Reflective Safety Vest",

  "Lime Green Safety Vest",
  "Multi Pocket Safety Vest",
  "Reflective Safety Vest",
];

// Dynamic Pricing
const getPrice = (title) => {
  if (title.includes("Safety Vest")) return "₹1,299";
  if (title.includes("Reflective Vest")) return "₹1,399";

  if (title.includes("Work Shirt")) return "₹1,499";
  if (title.includes("Industrial Shirt")) return "₹1,599";
  if (title.includes("Safety Shirt")) return "₹1,699";

  if (title.includes("Trouser")) return "₹1,799";

  if (title.includes("Uniform")) return "₹2,199";

  if (title.includes("Coverall")) return "₹2,499";

  if (title.includes("Safety Suit")) return "₹2,699";

  if (title.includes("Reflective Coverall")) return "₹2,899";

  return "₹1,999";
};

// Category Generator
const getCategory = (title) => {
  if (title.includes("Vest")) return "Safety Vest";
  if (title.includes("Shirt")) return "Work Shirt";
  if (title.includes("Trouser")) return "Work Trouser";
  if (title.includes("Coverall")) return "Coverall";
  if (title.includes("Uniform")) return "Industrial Uniform";
  if (title.includes("Suit")) return "Safety Suit";

  return "Industrial Wear";
};

export const products = productImages.map((image, index) => {
  const nextOne = productImages[(index + 1) % productImages.length];
  const nextTwo = productImages[(index + 2) % productImages.length];

  const title =
    productNames[index] ||
    `Industrial Product ${String(index + 1).padStart(3, "0")}`;

  return {
    id: index,

    image,

    gallery: [image, nextOne, nextTwo],

    title,

    desc:
      "Premium industrial safety wear designed for durability, comfort, and workplace protection.",

    price: getPrice(title),

    category: getCategory(title),
  };
});

export const getProductById = (id) =>
  products.find((product) => product.id === Number(id));

export default products;