const productImages = [
  require("../asstes/36.png"),
  require("../asstes/37.png"),
  require("../asstes/38.png"),
  require("../asstes/39.png"),
  require("../asstes/40.png"),
  require("../asstes/41.png"),
  require("../asstes/42.png"),
  require("../asstes/43.png"),
  require("../asstes/44.png"),
  require("../asstes/45.png"),
  require("../asstes/46.png"),
  require("../asstes/47.png"),
  require("../asstes/48.png"),
  require("../asstes/49.png"),
  require("../asstes/50.png"),
  require("../asstes/51.png"),
  require("../asstes/52.png"),
  require("../asstes/53.png"),
  require("../asstes/54.png"),
  require("../asstes/55.png"),
  require("../asstes/56.png"),
  require("../asstes/57.png"),
];

const productDetails = [
  {
    title: "Purple Nurse Scrub Set",
    price: "₹1,299",
  },
  {
    title: "Sage Green Nurse Scrub Set",
    price: "₹1,299",
  },
  {
    title: "Navy Blue Nurse Uniform",
    price: "₹1,399",
  },
  {
    title: "Lavender Nursing Scrub Set",
    price: "₹1,299",
  },
  {
    title: "Teal Medical Scrub Suit",
    price: "₹1,499",
  },
  {
    title: "White Blue Nursing Uniform",
    price: "₹1,599",
  },
  {
    title: "Women's Doctor Coat",
    price: "₹2,199",
  },
  {
    title: "Grey Medical Tunic",
    price: "₹1,699",
  },
  {
    title: "Navy Clinical Tunic",
    price: "₹1,699",
  },
  {
    title: "Men's Doctor Lab Coat",
    price: "₹2,299",
  },
  {
    title: "Premium White Lab Coat",
    price: "₹2,499",
  },
  {
    title: "Green Laboratory Coat",
    price: "₹2,199",
  },
  {
    title: "Black OT Scrub Suit",
    price: "₹1,799",
  },
  {
    title: "Black Medical Scrub Uniform",
    price: "₹1,899",
  },
  {
    title: "Maroon Surgical Scrub Set",
    price: "₹1,899",
  },
  {
    title: "Navy OT Scrub Set",
    price: "₹1,899",
  },
  {
    title: "Doctor Coat with Scrubs",
    price: "₹2,499",
  },
  {
    title: "Cream Hospital Uniform",
    price: "₹1,799",
  },
  {
    title: "Grey Healthcare Uniform",
    price: "₹1,699",
  },
  {
    title: "Navy Healthcare Uniform",
    price: "₹1,699",
  },
  {
    title: "Light Blue Clinical Uniform",
    price: "₹1,699",
  },
  {
    title: "Sky Blue Medical Tunic",
    price: "₹1,599",
  },
];

export const hospitalProducts = productImages.map((image, index) => {
  const nextOne = productImages[(index + 1) % productImages.length];
  const nextTwo = productImages[(index + 2) % productImages.length];

  return {
    id: index,

    image,

    gallery: [image, nextOne, nextTwo],

    title: productDetails[index].title,

    desc:
      "Premium hospital wear designed for comfort, hygiene and professional healthcare environments.",

    price: productDetails[index].price,
  };
});

export const getHospitalProductById = (id) =>
  hospitalProducts.find((product) => product.id === Number(id));

export default hospitalProducts;