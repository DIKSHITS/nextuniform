// src/data/corporateProducts.js

const productImages = [
  require("../asstes/58.png"),
  require("../asstes/59.png"),
  require("../asstes/60.png"),
  require("../asstes/61.png"),
  require("../asstes/62.png"),
  require("../asstes/63.png"),
  require("../asstes/64.png"),
  require("../asstes/65.png"),
  require("../asstes/66.png"),
  require("../asstes/67.png"),
  require("../asstes/68.png"),
  require("../asstes/69.png"),
  require("../asstes/70.png"),
  require("../asstes/71.png"),
  require("../asstes/72.png"),
  require("../asstes/73.png"),
  require("../asstes/74.png"),
  require("../asstes/75.png"),
  require("../asstes/76.png"),
  require("../asstes/77.png"),
  require("../asstes/78.png"),
  require("../asstes/79.png"),
  require("../asstes/80.png"),
  require("../asstes/81.png"),
  require("../asstes/82.png"),
  require("../asstes/83.png"),
  require("../asstes/84.png"),
  require("../asstes/85.png"),
  require("../asstes/86.png"),
  require("../asstes/87.png"),
  require("../asstes/88.png"),
  require("../asstes/89.png"),
  require("../asstes/90.png"),
  require("../asstes/91.png"),
  require("../asstes/92.png"),
  require("../asstes/93.png"),
  require("../asstes/94.png"),
  require("../asstes/95.png"),
  require("../asstes/96.png"),
];

const productDetails = [
  {
    title: "Olive Green Formal Shirt",
    price: "₹1,499",
    category: "Formal Shirts",
  },
  {
    title: "Navy Blue Formal Shirt",
    price: "₹1,499",
    category: "Formal Shirts",
  },
  {
    title: "Light Pink Formal Shirt",
    price: "₹1,499",
    category: "Formal Shirts",
  },
  {
    title: "Lavender Formal Shirt",
    price: "₹1,499",
    category: "Formal Shirts",
  },
  {
    title: "Rust Brown Formal Shirt",
    price: "₹1,499",
    category: "Formal Shirts",
  },
  {
    title: "Teal Formal Shirt",
    price: "₹1,499",
    category: "Formal Shirts",
  },
  {
    title: "Beige Formal Trouser",
    price: "₹1,299",
    category: "Formal Trousers",
  },
  {
    title: "Charcoal Formal Trouser",
    price: "₹1,299",
    category: "Formal Trousers",
  },
  {
    title: "Grey Formal Trouser",
    price: "₹1,299",
    category: "Formal Trousers",
  },
  {
    title: "Cream Formal Trouser",
    price: "₹1,299",
    category: "Formal Trousers",
  },

  {
    title: "Brown Corporate Blazer",
    price: "₹2,399",
    category: "Blazers",
  },
  {
    title: "Navy Corporate Suit",
    price: "₹2,499",
    category: "Business Suits",
  },
  {
    title: "Beige Corporate Suit",
    price: "₹2,499",
    category: "Business Suits",
  },
  {
    title: "Peach Corporate Blazer",
    price: "₹2,399",
    category: "Blazers",
  },
  {
    title: "Black Executive Suit",
    price: "₹2,499",
    category: "Business Suits",
  },
  {
    title: "Black Waistcoat Suit",
    price: "₹2,299",
    category: "Business Suits",
  },
  {
    title: "Navy Blue Business Suit",
    price: "₹2,499",
    category: "Business Suits",
  },
  {
    title: "Royal Blue Waistcoat Suit",
    price: "₹2,299",
    category: "Business Suits",
  },
  {
    title: "Grey Executive Blazer",
    price: "₹2,399",
    category: "Blazers",
  },

  {
    title: "Grey Business Suit",
    price: "₹2,499",
    category: "Business Suits",
  },
  {
    title: "Forest Green Business Suit",
    price: "₹2,499",
    category: "Business Suits",
  },
  {
    title: "Green Waistcoat Suit",
    price: "₹2,299",
    category: "Business Suits",
  },
  {
    title: "Grey Waistcoat Suit",
    price: "₹2,299",
    category: "Business Suits",
  },
  {
    title: "Double Breasted Grey Suit",
    price: "₹2,499",
    category: "Business Suits",
  },
  {
    title: "Sky Blue Business Suit",
    price: "₹2,499",
    category: "Business Suits",
  },
  {
    title: "Corporate Reception Uniform",
    price: "₹1,999",
    category: "Executive Wear",
  },
  {
    title: "Executive Skirt Suit",
    price: "₹2,199",
    category: "Executive Wear",
  },
  {
    title: "Beige Reception Uniform",
    price: "₹1,999",
    category: "Executive Wear",
  },

  {
    title: "Navy Logo Polo T-Shirt",
    price: "₹1,599",
    category: "Executive Wear",
  },
  {
    title: "White Corporate Polo T-Shirt",
    price: "₹1,599",
    category: "Executive Wear",
  },
  {
    title: "White Premium Polo T-Shirt",
    price: "₹1,599",
    category: "Executive Wear",
  },
  {
    title: "Black Logo Polo T-Shirt",
    price: "₹1,599",
    category: "Executive Wear",
  },
  {
    title: "Black Corporate Polo T-Shirt",
    price: "₹1,599",
    category: "Executive Wear",
  },
  {
    title: "Blue Executive Polo T-Shirt",
    price: "₹1,599",
    category: "Executive Wear",
  },
  {
    title: "Green Corporate Polo T-Shirt",
    price: "₹1,599",
    category: "Executive Wear",
  },
  {
    title: "Dark Green Premium Polo T-Shirt",
    price: "₹1,599",
    category: "Executive Wear",
  },
  {
    title: "Navy Premium Polo T-Shirt",
    price: "₹1,599",
    category: "Executive Wear",
  },
  {
    title: "White Executive Polo T-Shirt",
    price: "₹1,599",
    category: "Executive Wear",
  },
];

export const corporateProducts = productImages.map((image, index) => {
  const nextOne = productImages[(index + 1) % productImages.length];
  const nextTwo = productImages[(index + 2) % productImages.length];

  const product =
    productDetails[index] || {
      title: `Corporate Product ${index + 1}`,
      price: "₹1,999",
      category: "Corporate Wear",
    };

  return {
    id: 201 + index,

    image,

    gallery: [image, nextOne, nextTwo],

    title: product.title,

    desc:
      "Premium corporate wear designed for professionalism, comfort and modern workplace environments.",

    price: product.price,

    category: product.category,
  };
});

export const getCorporateProductById = (id) =>
  corporateProducts.find((product) => product.id === Number(id));

export default corporateProducts;