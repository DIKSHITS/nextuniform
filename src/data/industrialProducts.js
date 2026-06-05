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
  require("../asstes/35.png")
];

export const products = productImages.map((image, index) => {
  const nextOne = productImages[(index + 1) % productImages.length];
  const nextTwo = productImages[(index + 2) % productImages.length];

  return {
    id: index,
    image,
    gallery: [image, nextOne, nextTwo],
    title: `Industrial Product ${String(index + 1).padStart(2, "0")}`,
    desc: "Durable, functional, and ready for industrial use",
    price: "₹1,299"
  };
});

export const getProductById = (id) => products.find((product) => product.id === id);
