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
  require("../asstes/57.png")
];

export const hospitalProducts = productImages.map((image, index) => {
  const nextOne = productImages[(index + 1) % productImages.length];
  const nextTwo = productImages[(index + 2) % productImages.length];

  return {
    id: index,
    image,
    gallery: [image, nextOne, nextTwo],
    title: `Hospital Product ${String(index + 1).padStart(2, "0")}`,
    desc: "Clean, comfortable, and ready for healthcare environments",
    price: "₹1,199"
  };
});

export const getHospitalProductById = (id) =>
  hospitalProducts.find((product) => product.id === id);
