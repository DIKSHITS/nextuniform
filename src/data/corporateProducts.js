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
  require("../asstes/96.png")
];

const categoryRanges = [
  { category: "Formal Shirts", start: 0, end: 9 },
  { category: "Blazers", start: 10, end: 18 },
  { category: "Business Suits", start: 19, end: 27 },
  { category: "Executive Wear", start: 28, end: 37 },
  { category: "Accessories", start: 38, end: 46 }
];

const categoryLabels = {
  "Formal Shirts": "Formal Shirt",
  "Blazers": "Corporate Blazer",
  "Business Suits": "Business Suit",
  "Executive Wear": "Executive Wear",
  "Accessories": "Corporate Accessory"
};

export const corporateProducts = productImages.map((image, index) => {
  const nextOne = productImages[(index + 1) % productImages.length];
  const nextTwo = productImages[(index + 2) % productImages.length];
  const categoryEntry = categoryRanges.find(
    (range) => index >= range.start && index <= range.end
  );
  const category = categoryEntry ? categoryEntry.category : "Formal Shirts";
  const titleIndex = categoryEntry
    ? String(index - categoryEntry.start + 1).padStart(2, "0")
    : "01";

  return {
    id: 201 + index,
    image,
    gallery: [image, nextOne, nextTwo],
    title: `${categoryLabels[category]} ${titleIndex}`,
    desc: "Professional corporate wear designed for modern teams",
    price: "₹2,499",
    category
  };
});