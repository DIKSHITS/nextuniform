const productImages = [
  require("../asstes/97.png"),
  require("../asstes/98.png"),
  require("../asstes/99.png"),
  require("../asstes/100.png"),
  require("../asstes/101.png"),
  require("../asstes/102.png"),
  require("../asstes/103.png"),
  require("../asstes/104.png"),
  require("../asstes/105.png"),
  require("../asstes/106.png"),
  require("../asstes/107.png"),
  require("../asstes/108.png"),
  require("../asstes/109.png"),
  require("../asstes/110.png"),
  require("../asstes/111.png"),
  require("../asstes/112.png"),
  require("../asstes/113.png"),
  require("../asstes/114.png"),
  require("../asstes/115.png"),
  require("../asstes/116.png"),
  require("../asstes/117.png"),
  require("../asstes/118.png"),
  require("../asstes/119.png"),
  require("../asstes/120.png"),
  require("../asstes/121.png")
];

export const hotelProducts = productImages.map((image, index) => {
  const nextOne = productImages[(index + 1) % productImages.length];
  const nextTwo = productImages[(index + 2) % productImages.length];

  return {
    id: 301 + index,
    image,
    gallery: [image, nextOne, nextTwo],
    title: `Hotel Product ${String(index + 1).padStart(2, "0")}`,
    desc: "Hospitality uniform suitable for hotels and guest services",
    price: "₹1,199"
  };
});