// import { v4 as uuidv4 } from "uuid";

export const products = [
  {
    id: 1,
    name: "Fourth Ray Face Milk",
    href: "#",
    imageSrc: "/images/FourthRay/product-1.jpg",
    imageAlt: "Fourth Ray",
    price: "₹4000",
    color: "Multi Pack",
    trending: true,
    rating: 4.5,
    reviewCount: 280,
    breadcrumbs: [
      { id: 1, name: "Men", href: "#" },
      { id: 2, name: "Clothing", href: "#" },
    ],
    images: [
      {
        id: 1,
        imageSrc: "/images/FourthRay/fourthray1.jpg",
        imageAlt: "Back of men's Premium Tee in white.",
        primary: true,
      },
      {
        id: 2,
        imageSrc: "/images/FourthRay/fourthray2.jpeg",
        imageAlt: "Side profile of men's Premium Tee in white.",
        primary: false,
      },
      {
        id: 3,
        imageSrc: "/images/FourthRay/product-1.jpg",
        imageAlt: "Side profile of men's Premium Tee in white.",
        primary: false,
      },
    ],
    colors: [
      { name: "Oat", bgColor: "bg-stone-100", selectedColor: "ring-gray-300" },
      { name: "Rose", bgColor: "bg-red-100", selectedColor: "ring-gray-900" },
    ],
    sizes: [
      { name: "2 pack", inStock: true },
      { name: "3 pack", inStock: true },
      { name: "5 pack", inStock: true },
      { name: "7 pack", inStock: false },
    ],
    description: `
      <p> A nourishing multi-pack of face milks designed to hydrate and soothe the skin. Ideal for a variety of skin types, it provides a gentle touch of moisture for a smooth, glowing complexion.</p>
    `,
    details: [
      "Hydrates and replenishes skin",
      "Lightweight formula",
      "Cruelty-free and vegan-friendly",
      "Available in multiple pack sizes for convenience",
    ],
  },
  {
    id: 2,
    name: "Dose of Colours LipStick",
    href: "#",
    imageSrc: "/images/LipStick1/Dose1.jpg",
    imageAlt: "Dose of Colours LipStick.",
    price: "₹5000",
    color: "Blue",
    trending: true,
    rating: 4.7,
    reviewCount: 350,
    breadcrumbs: [
      { id: 1, name: "Men", href: "#" },
      { id: 2, name: "Clothing", href: "#" },
    ],
    images: [
      {
        id: 1,
        imageSrc: "/images/LipStick1/Dose2.webp",
        imageAlt: "Back of men's Casual Shirt in blue.",
        primary: true,
      },
      {
        id: 2,
        imageSrc: "/images/LipStick1/Dose1.jpg",
        imageAlt: "Side profile of men's Casual Shirt in blue.",
        primary: false,
      },
      {
        id: 3,
        imageSrc: "/images/LipStick1/Dose3.jpeg",
        imageAlt: "Side profile of men's Casual Shirt in blue.",
        primary: false,
      },
    ],
    colors: [
      {
        name: "Cherry Red",
        bgColor: "bg-red-500",
        selectedColor: "ring-blue-500",
      },
      {
        name: "Royal Maroon",
        bgColor: "bg-red-800",
        selectedColor: "ring-blue-800",
      },
    ],
    sizes: [
      { name: "Red", inStock: true },
      { name: "Maroon", inStock: true },
      { name: "Pack of 2", inStock: true },
    ],
    description: `
      <p>This richly pigmented lipstick glides on smoothly to deliver intense color. Available in vibrant shades, it provides long-lasting wear and a soft, matte finish.</p>
    `,
    details: [
      "Full-coverage, long-wearing formula",
      "Matte finish that doesn't dry out lips",
      "Available in shades like Cherry Red and Royal Maroon",
      "Paraben-free, cruelty-free",
    ],
  },
  {
    id: 3,
    name: "Gown and Top Set",
    href: "#",
    imageSrc: "/images/FullSetGown/FullGown1.webp",
    imageAlt: "Front of women's Elegant Blouse in peach.",
    price: "₹6000",
    color: "Peach",
    trending: false,
    rating: 4.2,
    reviewCount: 420,
    breadcrumbs: [
      { id: 1, name: "Women", href: "#" },
      { id: 2, name: "Clothing", href: "#" },
    ],
    images: [
      {
        id: 1,
        imageSrc: "/images/FullSetGown/FullGown1.webp",
        imageAlt: "Back of women's Elegant Blouse in peach.",
        primary: true,
      },
      {
        id: 2,
        imageSrc: "/images/FullSetGown/FullGown2.webp",
        imageAlt: "Side profile of women's Elegant Blouse in peach.",
        primary: false,
      },
      {
        id: 3,
        imageSrc: "/images/FullSetGown/FullGown3.webp",
        imageAlt: "Side profile of women's Elegant Blouse in peach.",
        primary: false,
      },
    ],
    colors: [
      { name: "Peach", bgColor: "bg-pink-300", selectedColor: "ring-pink-300" },
      { name: "White", bgColor: "bg-white", selectedColor: "ring-gray-300" },
    ],
    sizes: [
      { name: "XS", inStock: true },
      { name: "S", inStock: true },
      { name: "M", inStock: false },
      { name: "L", inStock: false },
    ],
    description: `
      <p>This elegant peach-colored gown and top set is perfect for both formal and casual occasions. The modern design adds a touch of sophistication to your wardrobe.</p>
    `,
    details: [
      "CSoft, breathable fabric for comfort",
      "Tailored to fit gracefully",
      "Versatile design for multiple occasions",
      "Lightweight and breathable material",
    ],
  },
  {
    id: 4,
    name: "Puma Women's Slip-On Running Shoes with Cross-Over Straps",
    href: "#",
    imageSrc: "/images/Shoe/Shoe1.webp",
    imageAlt: "Front of men's Athletic Hoodie in gray.",
    price: "₹7000",
    color: "Gray",
    trending: true,
    rating: 4.8,
    reviewCount: 600,
    breadcrumbs: [
      { id: 1, name: "Unisex", href: "#" },
      { id: 2, name: "Activewear", href: "#" },
    ],
    images: [
      {
        id: 1,
        imageSrc: "/images/Shoe/Shoe1.webp",
        imageAlt: "Back of unisex Athletic Hoodie in gray.",
        primary: true,
      },
      {
        id: 2,
        imageSrc: "/images/Shoe/Shoe2.webp",
        imageAlt: "Back of unisex Athletic Hoodie in gray.",
        primary: true,
      },
      {
        id: 3,
        imageSrc: "/images/Shoe/Shoe3.webp",
        imageAlt: "Back of unisex Athletic Hoodie in gray.",
        primary: true,
      },
    ],
    colors: [
      { name: "Gray", bgColor: "bg-gray-500", selectedColor: "ring-gray-500" },
      { name: "Black", bgColor: "bg-gray-900", selectedColor: "ring-gray-900" },
    ],
    sizes: [
      { name: "S", inStock: true },
      { name: "M", inStock: true },
      { name: "L", inStock: true },
      { name: "XL", inStock: true },
    ],
    description: `
      <p>These stylish Puma slip-on running shoes feature a cross-over strap design for added stability and comfort during your workout or casual outings.</p>
    `,
    details: [
      "Made with insulated fabric",
      "Cushioned insole for comfort",
      "Breathable mesh fabric",
      "Durable rubber sole for traction",
    ],
  },
  {
    id: 5,
    name: "Long Sleeves Shirt and Pyjama Set",
    href: "#",
    imageSrc: "/images/NightDress/NightDress1.webp",
    imageAlt: "Front of women's Summer Dress in floral print.",
    price: "₹5500",
    color: "Floral",
    trending: false,
    rating: 4.3,
    reviewCount: 210,
    breadcrumbs: [
      { id: 1, name: "Women", href: "#" },
      { id: 2, name: "Dresses", href: "#" },
    ],
    images: [
      {
        id: 1,
        imageSrc: "/images/NightDress/NightDress1.webp",
        imageAlt: "Back of women's Summer Dress in floral print.",
        primary: true,
      },
      {
        id: 2,
        imageSrc: "/images/NightDress/NightDress2.webp",
        imageAlt: "Back of women's Summer Dress in floral print.",
        primary: true,
      },
      {
        id: 3,
        imageSrc: "/images/NightDress/NightDress3.webp",
        imageAlt: "Back of women's Summer Dress in floral print.",
        primary: true,
      },
    ],
    colors: [
      {
        name: "Floral",
        bgColor: "bg-pink-200",
        selectedColor: "ring-pink-200",
      },
      { name: "White", bgColor: "bg-white", selectedColor: "ring-gray-300" },
    ],
    sizes: [
      { name: "XS", inStock: true },
      { name: "S", inStock: true },
      { name: "M", inStock: true },
      { name: "L", inStock: false },
    ],
    description: `
      <p>is cozy set features a long-sleeve shirt paired with comfortable pyjamas, perfect for lounging at home or a restful night's sleep.</p>
    `,
    details: [
      "Made from breathable fabric",
      "Relaxed fit for ease of movement",
      "Easy to wear and maintain",
      "Comfortable fit for all-day use",
    ],
  },
  {
    id: 6,
    name: "Kappa Quilted Jacket with Hood and Long Sleeves",
    href: "#",
    imageSrc: "/images/WinterJacket/WinterJacket1.webp",
    imageAlt: "Front of unisex Winter Jacket in navy blue.",
    price: "₹12000",
    color: "Navy Blue",
    trending: true,
    rating: 4.9,
    reviewCount: 450,
    breadcrumbs: [
      { id: 1, name: "Unisex", href: "#" },
      { id: 2, name: "Outerwear", href: "#" },
    ],
    images: [
      {
        id: 1,
        imageSrc: "/images/WinterJacket/WinterJacket1.webp",
        imageAlt: "Back of unisex Winter Jacket in navy blue.",
        primary: true,
      },
      {
        id: 2,
        imageSrc: "/images/WinterJacket/WinterJacket2.webp",
        imageAlt: "Back of unisex Winter Jacket in navy blue.",
        primary: true,
      },
      {
        id: 3,
        imageSrc: "/images/WinterJacket/WinterJacket3.webp",
        imageAlt: "Back of unisex Winter Jacket in navy blue.",
        primary: true,
      },
    ],
    colors: [
      {
        name: "Navy Blue",
        bgColor: "bg-blue-800",
        selectedColor: "ring-blue-800",
      },
      {
        name: "Black",
        bgColor: "bg-gray-900",
        selectedColor: "ring-gray-900",
      },
    ],
    sizes: [
      { name: "M", inStock: true },
      { name: "L", inStock: true },
      { name: "XL", inStock: true },
      { name: "XXL", inStock: true },
    ],
    description: `
      <p>Stay warm and stylish with this premium quilted jacket. The hood and long sleeves provide extra protection against the cold, while the modern design keeps you looking chic.</p>
    `,
    details: [
      "Thermal insulation for warmth",
      "Windproof and waterproof material",
      "Available in multiple colors",
      "High-quality stitching for durability",
    ],
  },
  {
    id: 7,
    name: "Chrisbella Monogram Print Baguette Bag with Adjustable Strap and Wallet",
    href: "#",
    imageSrc:
      "/images/HandBag/HandBag1.webp",
    imageAlt: "Front of men's Formal Shirt in white.",
    price: "₹4500",
    color: "White",
    trending: false,
    rating: 4.4,
    reviewCount: 310,
    breadcrumbs: [
      { id: 1, name: "Men", href: "#" },
      { id: 2, name: "Formalwear", href: "#" },
    ],
    images: [
      {
        id: 1,
        imageSrc:
          "/public/images/HandBag/HandBag1.webp",
        imageAlt: "Back of men's Formal Shirt in white.",
        primary: true,
      },
      {
        id: 2,
        imageSrc:
          "/public/images/HandBag/HandBag2.webp",
        imageAlt: "Back of men's Formal Shirt in white.",
        primary: true,
      },
      {
        id: 3,
        imageSrc:
          "/public/images/HandBag/HandBag3.webp",
        imageAlt: "Back of men's Formal Shirt in white.",
        primary: true,
      },
    ],
    colors: [
      { name: "White", bgColor: "bg-white", selectedColor: "ring-gray-300" },
      {
        name: "Light Blue",
        bgColor: "bg-blue-200",
        selectedColor: "ring-blue-200",
      },
    ],
    sizes: [
      { name: "S", inStock: true },
      { name: "M", inStock: true },
      { name: "L", inStock: true },
    ],
    description: `
      <p>A fashionable baguette bag featuring a chic monogram print and an adjustable strap for easy carrying. Includes a matching wallet for added convenience.</p>
    `,
    details: [
      "Adjustable strap for customized comfort",
      "Stylish monogram print",
      "Durable material that resists wear",
      "Includes a matching wallet for added functionality",
    ],
  },
  {
    id: 8,
    name: "Swiss Arabian Royal Mystery Eau de Parfum",
    href: "#",
    imageSrc: "/images/RoyalMystery/RoyalMystery1.webp",
    imageAlt: "Front of men's Casual Shorts in khaki.",
    price: "₹3000",
    color: "Khaki",
    trending: true,
    rating: 4.6,
    reviewCount: 210,
    breadcrumbs: [
      { id: 1, name: "Men", href: "#" },
      { id: 2, name: "Shorts", href: "#" },
    ],
    images: [
      {
        id: 1,
        imageSrc: "/images/RoyalMystery/RoyalMystery1.webp",
        imageAlt: "Back of men's Casual Shorts in khaki.",
        primary: true,
      },
      {
        id: 2,
        imageSrc: "/images/RoyalMystery/RoyalMystery2.webp",
        imageAlt: "Back of men's Casual Shorts in khaki.",
        primary: true,
      },
      {
        id: 3,
        imageSrc: "/images/RoyalMystery/RoyalMystery3.webp",
        imageAlt: "Back of men's Casual Shorts in khaki.",
        primary: true,
      },
    ],
    colors: [
      {
        name: "Khaki",
        bgColor: "bg-yellow-600",
        selectedColor: "ring-yellow-600",
      },
      { name: "Black", bgColor: "bg-gray-900", selectedColor: "ring-gray-900" },
    ],
    sizes: [
      { name: "S", inStock: true },
      { name: "M", inStock: true },
      { name: "L", inStock: true },
      { name: "XL", inStock: false },
    ],
    description: `
      <p>Immerse yourself in a captivating fragrance with Swiss Arabian's Royal Mystery Eau de Parfum. With its rich blend of notes, it offers a long-lasting, sophisticated scent for all-day wear.</p>
    `,
    details: [
      "Exotic, long-lasting fragrance",
      "Elegant packaging",
      "Perfect for special occasions or daily wear",
      "Premium, high-quality ingredients",
    ],
  },
  {
    id: 9,
    name: "Mandarin Collar Denim Jacket with Button Closure",
    href: "#",
    imageSrc: "/images/FullSetGown/DenimSet1.webp",
    imageAlt: "Front of men's Casual Shorts in khaki.",
    price: "₹3000",
    color: "Khaki",
    trending: true,
    rating: 4.6,
    reviewCount: 210,
    breadcrumbs: [
      { id: 1, name: "Men", href: "#" },
      { id: 2, name: "Shorts", href: "#" },
    ],
    images: [
      {
        id: 1,
        imageSrc: "/images/FullSetGown/DenimSet1.webp",
        imageAlt: "Back of men's Casual Shorts in khaki.",
        primary: true,
      },
      {
        id: 2,
        imageSrc: "/images/FullSetGown/DenimSet3.webp",
        imageAlt: "Back of men's Casual Shorts in khaki.",
        primary: true,
      },
      {
        id: 3,
        imageSrc: "/images/RoyalMystery/RoyalMystery3.webp",
        imageAlt: "Back of men's Casual Shorts in khaki.",
        primary: true,
      },
    ],
    colors: [
      {
        name: "Khaki",
        bgColor: "bg-yellow-600",
        selectedColor: "ring-yellow-600",
      },
      { name: "Black", bgColor: "bg-gray-900", selectedColor: "ring-gray-900" },
    ],
    sizes: [
      { name: "S", inStock: true },
      { name: "M", inStock: true },
      { name: "L", inStock: true },
      { name: "XL", inStock: false },
    ],
    description: `
      <p>A stylish denim jacket with a mandarin collar and button closure. Perfect for casual outings, this jacket brings a modern touch to your wardrobe.</p>
    `,
    details: [
      "Classic denim material with a contemporary twist",
      "Button closure for a secure fit",
      "Versatile design that pairs well with multiple outfits",
      "Lightweight yet durable fabric",
    ],
  },
  {
    id: 10,
    name: "Celeste Women's Logo Embellished Slides",
    href: "#",
    imageSrc: "/images/FootWear/FootWear1.webp",
    imageAlt: "Front of men's Casual Shorts in khaki.",
    price: "₹3000",
    color: "Khaki",
    trending: true,
    rating: 4.6,
    reviewCount: 210,
    breadcrumbs: [
      { id: 1, name: "Men", href: "#" },
      { id: 2, name: "Shorts", href: "#" },
    ],
    images: [
      {
        id: 1,
        imageSrc: "/images/FootWear/FootWear1.webp",
        imageAlt: "Back of men's Casual Shorts in khaki.",
        primary: true,
      },
      {
        id: 2,
        imageSrc: "/images/FootWear/FootWear2.webp",
        imageAlt: "Back of men's Casual Shorts in khaki.",
        primary: true,
      },
      {
        id: 3,
        imageSrc: "/images/FootWear/FootWear3.webp",
        imageAlt: "Back of men's Casual Shorts in khaki.",
        primary: true,
      },
    ],
    colors: [
      {
        name: "Khaki",
        bgColor: "bg-yellow-600",
        selectedColor: "ring-yellow-600",
      },
      { name: "Black", bgColor: "bg-gray-900", selectedColor: "ring-gray-900" },
    ],
    sizes: [
      { name: "S", inStock: true },
      { name: "M", inStock: true },
      { name: "L", inStock: true },
      { name: "XL", inStock: false },
    ],
    description: `
      <p>These slides combine comfort and style with a logo-embellished design. Made for relaxed days and casual outings, they offer the perfect blend of luxury and comfort.</p>
    `,
    details: [
      "Soft footbed for all-day comfort",
      "Logo detailing for a stylish touch",
      "Lightweight and easy to wear",
      "Available in khaki and black",
    ],
  },
];
