import { v4 as uuidv4 } from "uuid";

export const products = [
  {
    id: 1,
    name: "Premium Tee",
    href: "#",
    imageSrc:
      "https://tailwindui.com/plus/img/ecommerce-images/product-page-01-related-product-02.jpg",
    imageAlt: "Front of men's Premium Tee in white.",
    price: "$40",
    color: "White",
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
        imageSrc:
          "https://tailwindui.com/plus/img/ecommerce-images/product-page-01-featured-product-shot.jpg",
        imageAlt: "Back of men's Premium Tee in white.",
        primary: true,
      },
      {
        id: 2,
        imageSrc:
          "https://tailwindui.com/plus/img/ecommerce-images/product-page-01-product-shot-03.jpg",
        imageAlt: "Side profile of men's Premium Tee in white.",
        primary: false,
      },
    ],
    colors: [
      { name: "White", bgColor: "bg-white", selectedColor: "ring-gray-300" },
      { name: "Black", bgColor: "bg-gray-900", selectedColor: "ring-gray-900" },
    ],
    sizes: [
      { name: "S", inStock: true },
      { name: "M", inStock: true },
      { name: "L", inStock: true },
      { name: "XL", inStock: false },
    ],
    description: `
      <p>The Premium Tee is designed for those who demand more in a t-shirt. Made from high-grade fabric, it's lightweight and breathable.</p>
    `,
    details: [
      "Made with premium materials",
      "Locally crafted",
      "Soft, durable finish",
      "Easy to maintain",
    ],
  },
  {
    id: 2,
    name: "Casual Shirt",
    href: "#",
    imageSrc:
      "https://tailwindui.com/plus/img/ecommerce-images/product-page-01-related-product-03.jpg",
    imageAlt: "Front of men's Casual Shirt in blue.",
    price: "$50",
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
        imageSrc:
          "https://tailwindui.com/plus/img/ecommerce-images/product-page-01-featured-product-shot.jpg",
        imageAlt: "Back of men's Casual Shirt in blue.",
        primary: true,
      },
      {
        id: 2,
        imageSrc:
          "https://tailwindui.com/plus/img/ecommerce-images/product-page-01-product-shot-04.jpg",
        imageAlt: "Side profile of men's Casual Shirt in blue.",
        primary: false,
      },
    ],
    colors: [
      { name: "Blue", bgColor: "bg-blue-500", selectedColor: "ring-blue-500" },
      { name: "Navy", bgColor: "bg-blue-800", selectedColor: "ring-blue-800" },
    ],
    sizes: [
      { name: "M", inStock: true },
      { name: "L", inStock: true },
      { name: "XL", inStock: true },
    ],
    description: `
      <p>A casual shirt that combines style and comfort for any occasion. Perfect for day-to-day wear or semi-formal settings.</p>
    `,
    details: [
      "Made with breathable fabric",
      "Comfortable fit",
      "Easy-to-clean material",
      "Durable stitching",
    ],
  },
  {
    id: 3,
    name: "Elegant Blouse",
    href: "#",
    imageSrc:
      "https://tailwindui.com/plus/img/ecommerce-images/product-page-01-related-product-04.jpg",
    imageAlt: "Front of women's Elegant Blouse in peach.",
    price: "$60",
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
        imageSrc:
          "https://tailwindui.com/plus/img/ecommerce-images/product-page-01-featured-product-shot.jpg",
        imageAlt: "Back of women's Elegant Blouse in peach.",
        primary: true,
      },
      {
        id: 2,
        imageSrc:
          "https://tailwindui.com/plus/img/ecommerce-images/product-page-01-product-shot-05.jpg",
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
      <p>Designed with elegance in mind, this blouse offers a modern take on traditional design for women.</p>
    `,
    details: [
      "Chic and elegant design",
      "Made from premium fabric",
      "Tailored fit",
      "Lightweight and breathable",
    ],
  },
  {
    id: 4,
    name: "Athletic Hoodie",
    href: "#",
    imageSrc:
      "https://tailwindui.com/plus/img/ecommerce-images/product-page-01-related-product-05.jpg",
    imageAlt: "Front of men's Athletic Hoodie in gray.",
    price: "$70",
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
        imageSrc:
          "https://tailwindui.com/plus/img/ecommerce-images/product-page-01-featured-product-shot.jpg",
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
      <p>Stay warm and active with this hoodie designed for athletes. Perfect for workouts and casual outings.</p>
    `,
    details: [
      "Made with insulated fabric",
      "Designed for mobility",
      "Sweat-resistant material",
      "Durable and long-lasting",
    ],
  },
  {
    id: 5,
    name: "Summer Dress",
    href: "#",
    imageSrc:
      "https://tailwindui.com/plus/img/ecommerce-images/product-page-01-related-product-06.jpg",
    imageAlt: "Front of women's Summer Dress in floral print.",
    price: "$55",
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
        imageSrc:
          "https://tailwindui.com/plus/img/ecommerce-images/product-page-01-featured-product-shot.jpg",
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
      <p>Feel the summer breeze in this lightweight floral dress. Perfect for picnics and sunny days.</p>
    `,
    details: [
      "Made from breathable fabric",
      "Beautiful floral print",
      "Easy to wear and maintain",
      "Comfortable fit for all-day use",
    ],
  },
  {
    id: 6,
    name: "Winter Jacket",
    href: "#",
    imageSrc:
      "https://tailwindui.com/plus/img/ecommerce-images/product-page-01-related-product-07.jpg",
    imageAlt: "Front of unisex Winter Jacket in navy blue.",
    price: "$120",
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
        imageSrc:
          "https://tailwindui.com/plus/img/ecommerce-images/product-page-01-featured-product-shot.jpg",
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
      <p>Stay cozy and stylish during the colder months with this premium winter jacket.</p>
    `,
    details: [
      "Made with thermal-insulated materials",
      "Windproof and waterproof",
      "Available in multiple colors",
      "High-quality stitching for durability",
    ],
  },
  {
    id: 7,
    name: "Formal Shirt",
    href: "#",
    imageSrc:
      "https://tailwindui.com/plus/img/ecommerce-images/product-page-01-related-product-08.jpg",
    imageAlt: "Front of men's Formal Shirt in white.",
    price: "$45",
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
          "https://tailwindui.com/plus/img/ecommerce-images/product-page-01-featured-product-shot.jpg",
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
      <p>Perfect for the office or formal events, this shirt combines style with functionality.</p>
    `,
    details: [
      "Classic fit design",
      "Easy to iron and maintain",
      "Durable fabric",
      "Sharp and professional look",
    ],
  },
  {
    id: 8,
    name: "Casual Shorts",
    href: "#",
    imageSrc:
      "https://tailwindui.com/plus/img/ecommerce-images/product-page-01-related-product-09.jpg",
    imageAlt: "Front of men's Casual Shorts in khaki.",
    price: "$30",
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
        imageSrc:
          "https://tailwindui.com/plus/img/ecommerce-images/product-page-01-featured-product-shot.jpg",
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
      <p>Comfortable and stylish shorts for casual outings or lounging at home.</p>
    `,
    details: [
      "Relaxed fit",
      "Lightweight and breathable",
      "Durable fabric",
      "Available in multiple colors",
    ],
  },
];
