const products = [
  // ================= BAGS =================
  {
    id: 1,
    name: "Elegant Pink Handbag",
    category: "Bags",
    price: 3499,
    oldPrice: 4299,
    quantity: 1,
    image:
      "https://img.staticdj.com/200a121e3ae65ebc1f2514e4e99767de.jpg",
    rating: 4.8,
    reviews: 124,
    badge: "Best Seller",
  },

  {
    id: 2,
    name: "Classic Pink Shoulder Bag",
    category: "Bags",
    price: 2999,
    oldPrice: 3799,
    quantity: 1,
    image:
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=600&q=80",
    rating: 4.7,
    reviews: 98,
    badge: "Popular",
  },

  {
    id: 3,
    name: "Luxury Fashion Tote",
    category: "Bags",
    price: 3999,
    oldPrice: 4999,
    quantity: 1,
    image:
      "https://images.unsplash.com/photo-1594223274512-ad4803739b7c?auto=format&fit=crop&w=600&q=80",
    rating: 4.9,
    reviews: 76,
    badge: "New",
  },

  // ================= SUITS =================
  {
    id: 4,
    name: "Pink Embroidered Suit",
    category: "Suits",
    price: 5499,
    oldPrice: 6999,
    quantity: 1,
    image:
      "https://img.staticdj.com/200a121e3ae65ebc1f2514e4e99767de.jpg",
    rating: 4.9,
    reviews: 156,
    badge: "Trending",
  },

  {
    id: 5,
    name: "Elegant White Party Suit",
    category: "Suits",
    price: 6499,
    oldPrice: 7999,
    quantity: 1,
    image:
      "https://img.staticdj.com/200a121e3ae65ebc1f2514e4e99767de.jpg",
    rating: 4.8,
    reviews: 112,
    badge: "Premium",
  },

  {
    id: 6,
    name: "Luxury Fuchsia Suit Set",
    category: "Suits",
    price: 7499,
    oldPrice: 8999,
    quantity: 1,
    image:
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=600&q=80",
    rating: 4.9,
    reviews: 89,
    badge: "Premium",
  },

  // ================= COSMETICS =================
  {
    id: 7,
    name: "Luxury Makeup Collection",
    category: "Cosmetics",
    price: 3999,
    oldPrice: 4999,
    quantity: 1,
    image:
      "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=600&q=80",
    rating: 4.8,
    reviews: 203,
    badge: "Best Seller",
  },

  {
    id: 8,
    name: "Professional Makeup Set",
    category: "Cosmetics",
    price: 3299,
    oldPrice: 4299,
    quantity: 1,
    image:
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=600&q=80",
    rating: 4.7,
    reviews: 145,
    badge: "Popular",
  },

  {
    id: 9,
    name: "Matte Lipstick Collection",
    category: "Cosmetics",
    price: 1899,
    oldPrice: 2399,
    quantity: 1,
    image:
      "https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=600&q=80",
    rating: 4.7,
    reviews: 178,
    badge: "Trending",
  },

  {
    id: 10,
    name: "Beauty Essentials Set",
    category: "Cosmetics",
    price: 2499,
    oldPrice: 2999,
    quantity: 1,
    image:
      "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=600&q=80",
    rating: 4.6,
    reviews: 91,
    badge: "New",
  },

  // ================= SHOES =================
  {
    id: 11,
    name: "Pink Fashion Heels",
    category: "Shoes",
    price: 3299,
    oldPrice: 3999,
    quantity: 1,
    image:
      "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=600&q=80",
    rating: 4.8,
    reviews: 84,
    badge: "Trending",
  },

  {
    id: 12,
    name: "Elegant Women's Heels",
    category: "Shoes",
    price: 3799,
    oldPrice: 4499,
    quantity: 1,
    image:
      "https://images.unsplash.com/photo-1515347619252-60a4bf4fff4f?auto=format&fit=crop&w=600&q=80",
    rating: 4.7,
    reviews: 72,
    badge: "Popular",
  },

  {
    id: 13,
    name: "Classic White Sneakers",
    category: "Shoes",
    price: 2899,
    oldPrice: 3499,
    quantity: 1,
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80",
    rating: 4.7,
    reviews: 132,
    badge: "Best Seller",
  },

  // ================= JEWELRY =================
  {
    id: 14,
    name: "Pearl Necklace Set",
    category: "Jewelry",
    price: 2499,
    oldPrice: 3199,
    quantity: 1,
    image:
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=600&q=80",
    rating: 4.9,
    reviews: 119,
    badge: "Best Seller",
  },

  {
    id: 15,
    name: "Elegant Gold Earrings",
    category: "Jewelry",
    price: 1799,
    oldPrice: 2299,
    quantity: 1,
    image:
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=600&q=80",
    rating: 4.8,
    reviews: 96,
    badge: "Popular",
  },

  {
    id: 16,
    name: "Rose Gold Bracelet",
    category: "Jewelry",
    price: 1999,
    oldPrice: 2499,
    quantity: 1,
    image:
      "https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=600&q=80",
    rating: 4.7,
    reviews: 65,
    badge: "New",
  },

  // ================= ACCESSORIES =================
  {
    id: 17,
    name: "Luxury Fashion Watch",
    category: "Accessories",
    price: 2999,
    oldPrice: 3799,
    quantity: 1,
    image:
      "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=600&q=80",
    rating: 4.8,
    reviews: 87,
    badge: "Premium",
  },

  {
    id: 18,
    name: "Classic Sunglasses",
    category: "Accessories",
    price: 2199,
    oldPrice: 2799,
    quantity: 1,
    image:
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=600&q=80",
    rating: 4.7,
    reviews: 103,
    badge: "Popular",
  },

  {
    id: 19,
    name: "Elegant Silk Scarf",
    category: "Accessories",
    price: 1299,
    oldPrice: 1699,
    quantity: 1,
    image:
      "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?auto=format&fit=crop&w=600&q=80",
    rating: 4.6,
    reviews: 54,
    badge: "New",
  },

  {
    id: 20,
    name: "Fashion Hair Accessories",
    category: "Accessories",
    price: 999,
    oldPrice: 1399,
    quantity: 1,
    image:
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=600&q=80",
    rating: 4.5,
    reviews: 48,
    badge: "New",
  },
];

export default products;