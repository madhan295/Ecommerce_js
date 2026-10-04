const products = [
  {
    id: "prod_001",
    name: "Noise-Canceling Over-Ear Headphones",
    category: "Electronics",
    description: "Upgrade your tech setup with this premium noise-canceling over-ear headphones.",
    price: 199.99,
    rating: { rate: 4.8, count: 420 },
    image: "images/products/prod_001.jpg",
    tag: {
      name: "Top Seller",
      color: "#ff9900",
      fontColor: "#000000"
    }
  },
  {
    id: "prod_002",
    name: "Custom RGB Mechanical Keyboard",
    category: "Electronics",
    description: "Upgrade your tech setup with this premium custom rgb mechanical keyboard.",
    price: 129.5,
    rating: { rate: 4.7, count: 310 },
    image: "images/products/prod_002.jpg",
    tag: {
      name: "Only 3 left",
      color: "#cc0000",
      fontColor: "#ffffff"
    }
  },
  {
    id: "prod_003",
    name: "Ergonomic Wireless Gaming Mouse",
    category: "Electronics",
    description: "Upgrade your tech setup with this premium ergonomic wireless gaming mouse.",
    price: 69.99,
    rating: { rate: 4.6, count: 245 },
    image: "images/products/prod_003.jpg",
    tag: {
      name: "Best Value",
      color: "#009900",
      fontColor: "#ffffff"
    }
  },
  {
    id: "prod_004",
    name: "Waterproof Portable Bluetooth Speaker",
    category: "Electronics",
    description: "Upgrade your tech setup with this premium waterproof portable bluetooth speaker.",
    price: 89,
    rating: { rate: 4.5, count: 180 },
    image: "images/products/prod_004.jpg",
    tag: {
      name: "New Arrival",
      color: "#0066cc",
      fontColor: "#ffffff"
    }
  },
  {
    id: "prod_005",
    name: "Fitness Tracker Smartwatch",
    category: "Electronics",
    description: "Upgrade your tech setup with this premium fitness tracker smartwatch.",
    price: 159.99,
    rating: { rate: 4.4, count: 520 },
    image: "images/products/prod_005.jpg",
    tag: {
      name: "Trending",
      color: "#ff0099",
      fontColor: "#ffffff"
    }
  },
  {
    id: "prod_006",
    name: "True Wireless Earbuds with ANC",
    category: "Electronics",
    description: "Upgrade your tech setup with this premium true wireless earbuds with anc.",
    price: 119,
    rating: { rate: 4.6, count: 390 },
    image: "images/products/prod_006.jpg",
    tag: {
      name: "Limited Edition",
      color: "#6600cc",
      fontColor: "#ffffff"
    }
  },
  {
    id: "prod_007",
    name: "4K Ultra-HD Action Camera",
    category: "Electronics",
    description: "Upgrade your tech setup with this premium 4k ultra-hd action camera.",
    price: 249.99,
    rating: { rate: 4.3, count: 115 },
    image: "images/products/prod_007.jpg",
    tag: {
      name: "Deal of the Day",
      color: "#e60000",
      fontColor: "#ffffff"
    }
  },
  {
    id: "prod_008",
    name: "Studio Condenser USB Microphone",
    category: "Electronics",
    description: "Upgrade your tech setup with this premium studio condenser usb microphone.",
    price: 139,
    rating: { rate: 4.8, count: 280 },
    image: "images/products/prod_008.jpg",
    tag: {
      name: "Popular",
      color: "#ff6600",
      fontColor: "#000000"
    }
  },
  {
    id: "prod_009",
    name: "Heavyweight Cotton Oversized Tee",
    category: "Apparel",
    description: "Stay stylish and comfortable with this high-quality heavyweight cotton oversized tee.",
    price: 34,
    rating: { rate: 4.5, count: 210 },
    image: "images/products/prod_009.jpg",
    tag: {
      name: "Top Seller",
      color: "#ff9900",
      fontColor: "#000000"
    }
  },
  {
    id: "prod_010",
    name: "Classic Indigo Denim Jacket",
    category: "Apparel",
    description: "Stay stylish and comfortable with this high-quality classic indigo denim jacket.",
    price: 89.99,
    rating: { rate: 4.6, count: 175 },
    image: "images/products/prod_010.jpg",
    tag: {
      name: "Only 3 left",
      color: "#cc0000",
      fontColor: "#ffffff"
    }
  },
  {
    id: "prod_011",
    name: "Fleece Pullover Hoodie",
    category: "Apparel",
    description: "Stay stylish and comfortable with this high-quality fleece pullover hoodie.",
    price: 59.5,
    rating: { rate: 4.7, count: 330 },
    image: "images/products/prod_011.jpg",
    tag: {
      name: "Best Value",
      color: "#009900",
      fontColor: "#ffffff"
    }
  },
  {
    id: "prod_012",
    name: "Relaxed Fit Chino Trousers",
    category: "Apparel",
    description: "Stay stylish and comfortable with this high-quality relaxed fit chino trousers.",
    price: 49,
    rating: { rate: 4.3, count: 140 },
    image: "images/products/prod_012.jpg",
    tag: {
      name: "New Arrival",
      color: "#0066cc",
      fontColor: "#ffffff"
    }
  },
  {
    id: "prod_013",
    name: "Tailored Linen Casual Shirt",
    category: "Apparel",
    description: "Stay stylish and comfortable with this high-quality tailored linen casual shirt.",
    price: 55,
    rating: { rate: 4.4, count: 92 },
    image: "images/products/prod_013.jpg",
    tag: {
      name: "Trending",
      color: "#ff0099",
      fontColor: "#ffffff"
    }
  },
  {
    id: "prod_014",
    name: "Waterproof Hooded Windbreaker",
    category: "Apparel",
    description: "Stay stylish and comfortable with this high-quality waterproof hooded windbreaker.",
    price: 79.99,
    rating: { rate: 4.6, count: 160 },
    image: "images/products/prod_014.jpg",
    tag: {
      name: "Limited Edition",
      color: "#6600cc",
      fontColor: "#ffffff"
    }
  },
  {
    id: "prod_015",
    name: "Merino Wool Knit Sweater",
    category: "Apparel",
    description: "Stay stylish and comfortable with this high-quality merino wool knit sweater.",
    price: 95,
    rating: { rate: 4.8, count: 88 },
    image: "images/products/prod_015.jpg",
    tag: {
      name: "Deal of the Day",
      color: "#e60000",
      fontColor: "#ffffff"
    }
  },
  {
    id: "prod_016",
    name: "Athletic Breathable Joggers",
    category: "Apparel",
    description: "Stay stylish and comfortable with this high-quality athletic breathable joggers.",
    price: 42,
    rating: { rate: 4.5, count: 275 },
    image: "images/products/prod_016.jpg",
    tag: {
      name: "Popular",
      color: "#ff6600",
      fontColor: "#000000"
    }
  },
  {
    id: "prod_017",
    name: "Lightweight Quilted Puffer Vest",
    category: "Apparel",
    description: "Stay stylish and comfortable with this high-quality lightweight quilted puffer vest.",
    price: 68,
    rating: { rate: 4.2, count: 110 },
    image: "images/products/prod_017.jpg",
    tag: {
      name: "Top Seller",
      color: "#ff9900",
      fontColor: "#000000"
    }
  },
  {
    id: "prod_018",
    name: "Casual Striped Crewneck",
    category: "Apparel",
    description: "Stay stylish and comfortable with this high-quality casual striped crewneck.",
    price: 38,
    rating: { rate: 4.4, count: 64 },
    image: "images/products/prod_018.jpg",
    tag: {
      name: "Only 3 left",
      color: "#cc0000",
      fontColor: "#ffffff"
    }
  },
  {
    id: "prod_019",
    name: "Vintage White Low-Top Sneakers",
    category: "Footwear",
    description: "Step out in style and comfort with this durable vintage white low-top sneakers.",
    price: 85,
    rating: { rate: 4.7, count: 410 },
    image: "images/products/prod_019.jpg",
    tag: {
      name: "Best Value",
      color: "#009900",
      fontColor: "#ffffff"
    }
  },
  {
    id: "prod_020",
    name: "Lightweight Mesh Running Shoes",
    category: "Footwear",
    description: "Step out in style and comfort with this durable lightweight mesh running shoes.",
    price: 115,
    rating: { rate: 4.8, count: 560 },
    image: "images/products/prod_020.jpg",
    tag: {
      name: "New Arrival",
      color: "#0066cc",
      fontColor: "#ffffff"
    }
  },
  {
    id: "prod_021",
    name: "Handcrafted Chelsea Leather Boots",
    category: "Footwear",
    description: "Step out in style and comfort with this durable handcrafted chelsea leather boots.",
    price: 165,
    rating: { rate: 4.6, count: 190 },
    image: "images/products/prod_021.jpg",
    tag: {
      name: "Trending",
      color: "#ff0099",
      fontColor: "#ffffff"
    }
  },
  {
    id: "prod_022",
    name: "Classic High-Top Canvas Shoes",
    category: "Footwear",
    description: "Step out in style and comfort with this durable classic high-top canvas shoes.",
    price: 65,
    rating: { rate: 4.4, count: 320 },
    image: "images/products/prod_022.jpg",
    tag: {
      name: "Limited Edition",
      color: "#6600cc",
      fontColor: "#ffffff"
    }
  },
  {
    id: "prod_023",
    name: "All-Weather Hiking Boots",
    category: "Footwear",
    description: "Step out in style and comfort with this durable all-weather hiking boots.",
    price: 145,
    rating: { rate: 4.7, count: 145 },
    image: "images/products/prod_023.jpg",
    tag: {
      name: "Deal of the Day",
      color: "#e60000",
      fontColor: "#ffffff"
    }
  },
  {
    id: "prod_024",
    name: "Cushioned Street Skate Shoes",
    category: "Footwear",
    description: "Step out in style and comfort with this durable cushioned street skate shoes.",
    price: 75,
    rating: { rate: 4.3, count: 88 },
    image: "images/products/prod_024.jpg",
    tag: {
      name: "Popular",
      color: "#ff6600",
      fontColor: "#000000"
    }
  },
  {
    id: "prod_025",
    name: "Formal Leather Oxford Shoes",
    category: "Footwear",
    description: "Step out in style and comfort with this durable formal leather oxford shoes.",
    price: 135,
    rating: { rate: 4.5, count: 110 },
    image: "images/products/prod_025.jpg",
    tag: {
      name: "Top Seller",
      color: "#ff9900",
      fontColor: "#000000"
    }
  },
  {
    id: "prod_026",
    name: "Slip-On Breathable Loafers",
    category: "Footwear",
    description: "Step out in style and comfort with this durable slip-on breathable loafers.",
    price: 58,
    rating: { rate: 4.2, count: 76 },
    image: "images/products/prod_026.jpg",
    tag: {
      name: "Only 3 left",
      color: "#cc0000",
      fontColor: "#ffffff"
    }
  },
  {
    id: "prod_027",
    name: "Orthotic Recovery Slides",
    category: "Footwear",
    description: "Step out in style and comfort with this durable orthotic recovery slides.",
    price: 39,
    rating: { rate: 4.6, count: 230 },
    image: "images/products/prod_027.jpg",
    tag: {
      name: "Best Value",
      color: "#009900",
      fontColor: "#ffffff"
    }
  },
  {
    id: "prod_028",
    name: "Trail Cross-Trainer Sneakers",
    category: "Footwear",
    description: "Step out in style and comfort with this durable trail cross-trainer sneakers.",
    price: 125,
    rating: { rate: 4.5, count: 165 },
    image: "images/products/prod_028.jpg",
    tag: {
      name: "New Arrival",
      color: "#0066cc",
      fontColor: "#ffffff"
    }
  },
  {
    id: "prod_029",
    name: "Polarized Acetate Sunglasses",
    category: "Accessories",
    description: "Complement your everyday look with this elegant polarized acetate sunglasses.",
    price: 49,
    rating: { rate: 4.6, count: 180 },
    image: "images/products/prod_029.jpg",
    tag: {
      name: "Trending",
      color: "#ff0099",
      fontColor: "#ffffff"
    }
  },
  {
    id: "prod_030",
    name: "Full-Grain Leather Bi-Fold Wallet",
    category: "Accessories",
    description: "Complement your everyday look with this elegant full-grain leather bi-fold wallet.",
    price: 45,
    rating: { rate: 4.7, count: 290 },
    image: "images/products/prod_030.jpg",
    tag: {
      name: "Limited Edition",
      color: "#6600cc",
      fontColor: "#ffffff"
    }
  },
  {
    id: "prod_031",
    name: "Water-Resistant Commuter Backpack",
    category: "Accessories",
    description: "Complement your everyday look with this elegant water-resistant commuter backpack.",
    price: 89,
    rating: { rate: 4.8, count: 340 },
    image: "images/products/prod_031.jpg",
    tag: {
      name: "Deal of the Day",
      color: "#e60000",
      fontColor: "#ffffff"
    }
  },
  {
    id: "prod_032",
    name: "Stainless Steel Minimalist Watch",
    category: "Accessories",
    description: "Complement your everyday look with this elegant stainless steel minimalist watch.",
    price: 139,
    rating: { rate: 4.5, count: 145 },
    image: "images/products/prod_032.jpg",
    tag: {
      name: "Popular",
      color: "#ff6600",
      fontColor: "#000000"
    }
  },
  {
    id: "prod_033",
    name: "Vegetable-Tanned Leather Belt",
    category: "Accessories",
    description: "Complement your everyday look with this elegant vegetable-tanned leather belt.",
    price: 38,
    rating: { rate: 4.4, count: 95 },
    image: "images/products/prod_033.jpg",
    tag: {
      name: "Top Seller",
      color: "#ff9900",
      fontColor: "#000000"
    }
  },
  {
    id: "prod_034",
    name: "Heavy-Duty Canvas Tote Bag",
    category: "Accessories",
    description: "Complement your everyday look with this elegant heavy-duty canvas tote bag.",
    price: 28,
    rating: { rate: 4.3, count: 110 },
    image: "images/products/prod_034.jpg",
    tag: {
      name: "Only 3 left",
      color: "#cc0000",
      fontColor: "#ffffff"
    }
  },
  {
    id: "prod_035",
    name: "Ribbed Knit Cashmere Beanie",
    category: "Accessories",
    description: "Complement your everyday look with this elegant ribbed knit cashmere beanie.",
    price: 32,
    rating: { rate: 4.6, count: 85 },
    image: "images/products/prod_035.jpg",
    tag: {
      name: "Best Value",
      color: "#009900",
      fontColor: "#ffffff"
    }
  },
  {
    id: "prod_036",
    name: "Travel Leather Weekender Duffle",
    category: "Accessories",
    description: "Complement your everyday look with this elegant travel leather weekender duffle.",
    price: 155,
    rating: { rate: 4.7, count: 120 },
    image: "images/products/prod_036.jpg",
    tag: {
      name: "New Arrival",
      color: "#0066cc",
      fontColor: "#ffffff"
    }
  },
  {
    id: "prod_037",
    name: "Gold-Plated Chain Necklace",
    category: "Accessories",
    description: "Complement your everyday look with this elegant gold-plated chain necklace.",
    price: 62,
    rating: { rate: 4.2, count: 70 },
    image: "images/products/prod_037.jpg",
    tag: {
      name: "Trending",
      color: "#ff0099",
      fontColor: "#ffffff"
    }
  },
  {
    id: "prod_038",
    name: "Slim RFID Aluminum Cardholder",
    category: "Accessories",
    description: "Complement your everyday look with this elegant slim rfid aluminum cardholder.",
    price: 29.99,
    rating: { rate: 4.5, count: 215 },
    image: "images/products/prod_038.jpg",
    tag: {
      name: "Limited Edition",
      color: "#6600cc",
      fontColor: "#ffffff"
    }
  },
  {
    id: "prod_039",
    name: "Nordic Ceramic Pour-Over Coffee Mug",
    category: "Home & Living",
    description: "Enhance your living space with this beautiful nordic ceramic pour-over coffee mug.",
    price: 22,
    rating: { rate: 4.8, count: 160 },
    image: "images/products/prod_039.jpg",
    tag: {
      name: "Deal of the Day",
      color: "#e60000",
      fontColor: "#ffffff"
    }
  },
  {
    id: "prod_040",
    name: "Minimalist Dimmable LED Desk Lamp",
    category: "Home & Living",
    description: "Enhance your living space with this beautiful minimalist dimmable led desk lamp.",
    price: 54,
    rating: { rate: 4.6, count: 230 },
    image: "images/products/prod_040.jpg",
    tag: {
      name: "Popular",
      color: "#ff6600",
      fontColor: "#000000"
    }
  },
  {
    id: "prod_041",
    name: "Ultrasonic Essential Oil Diffuser",
    category: "Home & Living",
    description: "Enhance your living space with this beautiful ultrasonic essential oil diffuser.",
    price: 36.99,
    rating: { rate: 4.5, count: 310 },
    image: "images/products/prod_041.jpg",
    tag: {
      name: "Top Seller",
      color: "#ff9900",
      fontColor: "#000000"
    }
  },
  {
    id: "prod_042",
    name: "Handcrafted Soy Wax Scented Candle",
    category: "Home & Living",
    description: "Enhance your living space with this beautiful handcrafted soy wax scented candle.",
    price: 24,
    rating: { rate: 4.7, count: 140 },
    image: "images/products/prod_042.jpg",
    tag: {
      name: "Only 3 left",
      color: "#cc0000",
      fontColor: "#ffffff"
    }
  },
  {
    id: "prod_043",
    name: "Chunky Knit Wool Throw Blanket",
    category: "Home & Living",
    description: "Enhance your living space with this beautiful chunky knit wool throw blanket.",
    price: 78,
    rating: { rate: 4.9, count: 85 },
    image: "images/products/prod_043.jpg",
    tag: {
      name: "Best Value",
      color: "#009900",
      fontColor: "#ffffff"
    }
  },
  {
    id: "prod_044",
    name: "Terracotta Indoor Plant Pot with Saucer",
    category: "Home & Living",
    description: "Enhance your living space with this beautiful terracotta indoor plant pot with saucer.",
    price: 26.5,
    rating: { rate: 4.4, count: 95 },
    image: "images/products/prod_044.jpg",
    tag: {
      name: "New Arrival",
      color: "#0066cc",
      fontColor: "#ffffff"
    }
  },
  {
    id: "prod_045",
    name: "Double-Walled Glass Teapot",
    category: "Home & Living",
    description: "Enhance your living space with this beautiful double-walled glass teapot.",
    price: 34,
    rating: { rate: 4.6, count: 115 },
    image: "images/products/prod_045.jpg",
    tag: {
      name: "Trending",
      color: "#ff0099",
      fontColor: "#ffffff"
    }
  },
  {
    id: "prod_046",
    name: "Solid Oak Wooden Wall Clock",
    category: "Home & Living",
    description: "Enhance your living space with this beautiful solid oak wooden wall clock.",
    price: 48,
    rating: { rate: 4.3, count: 60 },
    image: "images/products/prod_046.jpg",
    tag: {
      name: "Limited Edition",
      color: "#6600cc",
      fontColor: "#ffffff"
    }
  },
  {
    id: "prod_047",
    name: "Vacuum Insulated Stainless Steel Tumbler",
    category: "Home & Living",
    description: "Enhance your living space with this beautiful vacuum insulated stainless steel tumbler.",
    price: 32,
    rating: { rate: 4.8, count: 420 },
    image: "images/products/prod_047.jpg",
    tag: {
      name: "Deal of the Day",
      color: "#e60000",
      fontColor: "#ffffff"
    }
  },
  {
    id: "prod_048",
    name: "Hydrating Facial Cleanser Gel",
    category: "Beauty & Wellness",
    description: "Rejuvenate yourself with this nourishing hydrating facial cleanser gel.",
    price: 22,
    rating: { rate: 4.7, count: 310 },
    image: "images/products/prod_048.jpg",
    tag: {
      name: "Popular",
      color: "#ff6600",
      fontColor: "#000000"
    }
  },
  {
    id: "prod_049",
    name: "Vitamin C Radiance Glow Serum",
    category: "Beauty & Wellness",
    description: "Rejuvenate yourself with this nourishing vitamin c radiance glow serum.",
    price: 38,
    rating: { rate: 4.8, count: 480 },
    image: "images/products/prod_049.jpg",
    tag: {
      name: "Top Seller",
      color: "#ff9900",
      fontColor: "#000000"
    }
  },
  {
    id: "prod_050",
    name: "Natural Jade Stone Facial Roller",
    category: "Beauty & Wellness",
    description: "Rejuvenate yourself with this nourishing natural jade stone facial roller.",
    price: 18,
    rating: { rate: 4.4, count: 130 },
    image: "images/products/prod_050.jpg",
    tag: {
      name: "Only 3 left",
      color: "#cc0000",
      fontColor: "#ffffff"
    }
  },
  {
    id: "prod_051",
    name: "Mineral Broad-Spectrum Sunscreen SPF 50",
    category: "Beauty & Wellness",
    description: "Rejuvenate yourself with this nourishing mineral broad-spectrum sunscreen spf 50.",
    price: 26,
    rating: { rate: 4.7, count: 260 },
    image: "images/products/prod_051.jpg",
    tag: {
      name: "Best Value",
      color: "#009900",
      fontColor: "#ffffff"
    }
  },
  {
    id: "prod_052",
    name: "Nourishing Shea Butter Body Lotion",
    category: "Beauty & Wellness",
    description: "Rejuvenate yourself with this nourishing nourishing shea butter body lotion.",
    price: 19.5,
    rating: { rate: 4.5, count: 175 },
    image: "images/products/prod_052.jpg",
    tag: {
      name: "New Arrival",
      color: "#0066cc",
      fontColor: "#ffffff"
    }
  },
  {
    id: "prod_053",
    name: "Deep Rest Night Repair Eye Cream",
    category: "Beauty & Wellness",
    description: "Rejuvenate yourself with this nourishing deep rest night repair eye cream.",
    price: 34,
    rating: { rate: 4.6, count: 140 },
    image: "images/products/prod_053.jpg",
    tag: {
      name: "Trending",
      color: "#ff0099",
      fontColor: "#ffffff"
    }
  },
  {
    id: "prod_054",
    name: "Exfoliating Bamboo Body Scrub",
    category: "Beauty & Wellness",
    description: "Rejuvenate yourself with this nourishing exfoliating bamboo body scrub.",
    price: 21,
    rating: { rate: 4.4, count: 82 },
    image: "images/products/prod_054.jpg",
    tag: {
      name: "Limited Edition",
      color: "#6600cc",
      fontColor: "#ffffff"
    }
  },
  {
    id: "prod_055",
    name: "Non-Toxic Matte Hydrating Lipstick",
    category: "Beauty & Wellness",
    description: "Rejuvenate yourself with this nourishing non-toxic matte hydrating lipstick.",
    price: 16.5,
    rating: { rate: 4.5, count: 115 },
    image: "images/products/prod_055.jpg",
    tag: {
      name: "Deal of the Day",
      color: "#e60000",
      fontColor: "#ffffff"
    }
  },
  {
    id: "prod_056",
    name: "Dual-Driver Studio In-Ear Monitors",
    category: "Electronics",
    description: "Upgrade your tech setup with this premium dual-driver studio in-ear monitors.",
    price: 79.99,
    rating: { rate: 4.6, count: 185 },
    image: "images/products/prod_056.jpg",
    tag: {
      name: "Popular",
      color: "#ff6600",
      fontColor: "#000000"
    }
  },
  {
    id: "prod_057",
    name: "1080p Full HD Streaming Webcam",
    category: "Electronics",
    description: "Upgrade your tech setup with this premium 1080p full hd streaming webcam.",
    price: 59.99,
    rating: { rate: 4.4, count: 240 },
    image: "images/products/prod_057.jpg",
    tag: {
      name: "Top Seller",
      color: "#ff9900",
      fontColor: "#000000"
    }
  },
  {
    id: "prod_058",
    name: "Compact Smart Voice Assistant Speaker",
    category: "Electronics",
    description: "Upgrade your tech setup with this premium compact smart voice assistant speaker.",
    price: 49,
    rating: { rate: 4.5, count: 510 },
    image: "images/products/prod_058.jpg",
    tag: {
      name: "Only 3 left",
      color: "#cc0000",
      fontColor: "#ffffff"
    }
  },
  {
    id: "prod_059",
    name: "6-in-1 USB-C Hub Adapter",
    category: "Electronics",
    description: "Upgrade your tech setup with this premium 6-in-1 usb-c hub adapter.",
    price: 42.5,
    rating: { rate: 4.7, count: 390 },
    image: "images/products/prod_059.jpg",
    tag: {
      name: "Best Value",
      color: "#009900",
      fontColor: "#ffffff"
    }
  },
  {
    id: "prod_060",
    name: "Extended RGB Gaming Mouse Pad",
    category: "Electronics",
    description: "Upgrade your tech setup with this premium extended rgb gaming mouse pad.",
    price: 27.99,
    rating: { rate: 4.6, count: 215 },
    image: "images/products/prod_060.jpg",
    tag: {
      name: "New Arrival",
      color: "#0066cc",
      fontColor: "#ffffff"
    }
  },
  {
    id: "prod_061",
    name: "Foldable 3-Axis Phone Gimbal Stabilizer",
    category: "Electronics",
    description: "Upgrade your tech setup with this premium foldable 3-axis phone gimbal stabilizer.",
    price: 119,
    rating: { rate: 4.5, count: 140 },
    image: "images/products/prod_061.jpg",
    tag: {
      name: "Trending",
      color: "#ff0099",
      fontColor: "#ffffff"
    }
  },
  {
    id: "prod_062",
    name: "WiFi 6 Dual-Band Mesh Router",
    category: "Electronics",
    description: "Upgrade your tech setup with this premium wifi 6 dual-band mesh router.",
    price: 129.99,
    rating: { rate: 4.7, count: 310 },
    image: "images/products/prod_062.jpg",
    tag: {
      name: "Limited Edition",
      color: "#6600cc",
      fontColor: "#ffffff"
    }
  },
  {
    id: "prod_063",
    name: "Ultra-Slim 1TB External SSD",
    category: "Electronics",
    description: "Upgrade your tech setup with this premium ultra-slim 1tb external ssd.",
    price: 109,
    rating: { rate: 4.8, count: 460 },
    image: "images/products/prod_063.jpg",
    tag: {
      name: "Deal of the Day",
      color: "#e60000",
      fontColor: "#ffffff"
    }
  },
  {
    id: "prod_064",
    name: "Smart Video Doorbell with Chime",
    category: "Electronics",
    description: "Upgrade your tech setup with this premium smart video doorbell with chime.",
    price: 99.5,
    rating: { rate: 4.4, count: 175 },
    image: "images/products/prod_064.jpg",
    tag: {
      name: "Popular",
      color: "#ff6600",
      fontColor: "#000000"
    }
  },
  {
    id: "prod_065",
    name: "Pique Cotton Slim-Fit Polo",
    category: "Apparel",
    description: "Stay stylish and comfortable with this high-quality pique cotton slim-fit polo.",
    price: 36,
    rating: { rate: 4.4, count: 155 },
    image: "images/products/prod_065.jpg",
    tag: {
      name: "Top Seller",
      color: "#ff9900",
      fontColor: "#000000"
    }
  },
  {
    id: "prod_066",
    name: "Double-Breasted Wool Trench Coat",
    category: "Apparel",
    description: "Stay stylish and comfortable with this high-quality double-breasted wool trench coat.",
    price: 169,
    rating: { rate: 4.8, count: 90 },
    image: "images/products/prod_066.jpg",
    tag: {
      name: "Only 3 left",
      color: "#cc0000",
      fontColor: "#ffffff"
    }
  },
  {
    id: "prod_067",
    name: "Cotton Utility Cargo Pants",
    category: "Apparel",
    description: "Stay stylish and comfortable with this high-quality cotton utility cargo pants.",
    price: 54,
    rating: { rate: 4.3, count: 195 },
    image: "images/products/prod_067.jpg",
    tag: {
      name: "Best Value",
      color: "#009900",
      fontColor: "#ffffff"
    }
  },
  {
    id: "prod_068",
    name: "Brushed Flannel Plaid Button-Down",
    category: "Apparel",
    description: "Stay stylish and comfortable with this high-quality brushed flannel plaid button-down.",
    price: 48,
    rating: { rate: 4.6, count: 220 },
    image: "images/products/prod_068.jpg",
    tag: {
      name: "New Arrival",
      color: "#0066cc",
      fontColor: "#ffffff"
    }
  },
  {
    id: "prod_069",
    name: "Sleeveless Compression Training Top",
    category: "Apparel",
    description: "Stay stylish and comfortable with this high-quality sleeveless compression training top.",
    price: 28,
    rating: { rate: 4.5, count: 180 },
    image: "images/products/prod_069.jpg",
    tag: {
      name: "Trending",
      color: "#ff0099",
      fontColor: "#ffffff"
    }
  },
  {
    id: "prod_070",
    name: "Thermal Ribbed Long Sleeve Shirt",
    category: "Apparel",
    description: "Stay stylish and comfortable with this high-quality thermal ribbed long sleeve shirt.",
    price: 34.5,
    rating: { rate: 4.4, count: 110 },
    image: "images/products/prod_070.jpg",
    tag: {
      name: "Limited Edition",
      color: "#6600cc",
      fontColor: "#ffffff"
    }
  },
  {
    id: "prod_071",
    name: "Vintage Wash Corduroy Overshirt",
    category: "Apparel",
    description: "Stay stylish and comfortable with this high-quality vintage wash corduroy overshirt.",
    price: 64,
    rating: { rate: 4.7, count: 135 },
    image: "images/products/prod_071.jpg",
    tag: {
      name: "Deal of the Day",
      color: "#e60000",
      fontColor: "#ffffff"
    }
  },
  {
    id: "prod_072",
    name: "High-Waist Performance Workout Leggings",
    category: "Apparel",
    description: "Stay stylish and comfortable with this high-quality high-waist performance workout leggings.",
    price: 46,
    rating: { rate: 4.8, count: 380 },
    image: "images/products/prod_072.jpg",
    tag: {
      name: "Popular",
      color: "#ff6600",
      fontColor: "#000000"
    }
  },
  {
    id: "prod_073",
    name: "Relaxed Fit Cotton Drawstring Shorts",
    category: "Apparel",
    description: "Stay stylish and comfortable with this high-quality relaxed fit cotton drawstring shorts.",
    price: 32,
    rating: { rate: 4.3, count: 160 },
    image: "images/products/prod_073.jpg",
    tag: {
      name: "Top Seller",
      color: "#ff9900",
      fontColor: "#000000"
    }
  },
  {
    id: "prod_074",
    name: "Fine Knit Mockneck Sweater",
    category: "Apparel",
    description: "Stay stylish and comfortable with this high-quality fine knit mockneck sweater.",
    price: 58,
    rating: { rate: 4.6, count: 95 },
    image: "images/products/prod_074.jpg",
    tag: {
      name: "Only 3 left",
      color: "#cc0000",
      fontColor: "#ffffff"
    }
  },
  {
    id: "prod_075",
    name: "Suede Penny Loafers",
    category: "Footwear",
    description: "Step out in style and comfort with this durable suede penny loafers.",
    price: 110,
    rating: { rate: 4.5, count: 120 },
    image: "images/products/prod_075.jpg",
    tag: {
      name: "Best Value",
      color: "#009900",
      fontColor: "#ffffff"
    }
  },
  {
    id: "prod_076",
    name: "Minimalist Leather Court Trainers",
    category: "Footwear",
    description: "Step out in style and comfort with this durable minimalist leather court trainers.",
    price: 95,
    rating: { rate: 4.7, count: 280 },
    image: "images/products/prod_076.jpg",
    tag: {
      name: "New Arrival",
      color: "#0066cc",
      fontColor: "#ffffff"
    }
  },
  {
    id: "prod_077",
    name: "Cushioned Waterproof Rain Boots",
    category: "Footwear",
    description: "Step out in style and comfort with this durable cushioned waterproof rain boots.",
    price: 68,
    rating: { rate: 4.4, count: 95 },
    image: "images/products/prod_077.jpg",
    tag: {
      name: "Trending",
      color: "#ff0099",
      fontColor: "#ffffff"
    }
  },
  {
    id: "prod_078",
    name: "Reflective Night Running Shoes",
    category: "Footwear",
    description: "Step out in style and comfort with this durable reflective night running shoes.",
    price: 130,
    rating: { rate: 4.8, count: 340 },
    image: "images/products/prod_078.jpg",
    tag: {
      name: "Limited Edition",
      color: "#6600cc",
      fontColor: "#ffffff"
    }
  },
  {
    id: "prod_079",
    name: "Canvas Deck Slip-On Shoes",
    category: "Footwear",
    description: "Step out in style and comfort with this durable canvas deck slip-on shoes.",
    price: 48,
    rating: { rate: 4.2, count: 165 },
    image: "images/products/prod_079.jpg",
    tag: {
      name: "Deal of the Day",
      color: "#e60000",
      fontColor: "#ffffff"
    }
  },
  {
    id: "prod_080",
    name: "Rugged Combat Lace-Up Boots",
    category: "Footwear",
    description: "Step out in style and comfort with this durable rugged combat lace-up boots.",
    price: 150,
    rating: { rate: 4.6, count: 185 },
    image: "images/products/prod_080.jpg",
    tag: {
      name: "Popular",
      color: "#ff6600",
      fontColor: "#000000"
    }
  },
  {
    id: "prod_081",
    name: "Adjustable Double-Strap Cork Slides",
    category: "Footwear",
    description: "Step out in style and comfort with this durable adjustable double-strap cork slides.",
    price: 45,
    rating: { rate: 4.5, count: 290 },
    image: "images/products/prod_081.jpg",
    tag: {
      name: "Top Seller",
      color: "#ff9900",
      fontColor: "#000000"
    }
  },
  {
    id: "prod_082",
    name: "Mid-Top Retro Basketball Shoes",
    category: "Footwear",
    description: "Step out in style and comfort with this durable mid-top retro basketball shoes.",
    price: 118,
    rating: { rate: 4.7, count: 230 },
    image: "images/products/prod_082.jpg",
    tag: {
      name: "Only 3 left",
      color: "#cc0000",
      fontColor: "#ffffff"
    }
  },
  {
    id: "prod_083",
    name: "Pointed Leather Ankle Booties",
    category: "Footwear",
    description: "Step out in style and comfort with this durable pointed leather ankle booties.",
    price: 125,
    rating: { rate: 4.4, count: 110 },
    image: "images/products/prod_083.jpg",
    tag: {
      name: "Best Value",
      color: "#009900",
      fontColor: "#ffffff"
    }
  },
  {
    id: "prod_084",
    name: "Flexible Knit Road Racing Flats",
    category: "Footwear",
    description: "Step out in style and comfort with this durable flexible knit road racing flats.",
    price: 105,
    rating: { rate: 4.6, count: 140 },
    image: "images/products/prod_084.jpg",
    tag: {
      name: "New Arrival",
      color: "#0066cc",
      fontColor: "#ffffff"
    }
  },
  {
    id: "prod_085",
    name: "Aviator Metal Frame Sunglasses",
    category: "Accessories",
    description: "Complement your everyday look with this elegant aviator metal frame sunglasses.",
    price: 52,
    rating: { rate: 4.5, count: 205 },
    image: "images/products/prod_085.jpg",
    tag: {
      name: "Trending",
      color: "#ff0099",
      fontColor: "#ffffff"
    }
  },
  {
    id: "prod_086",
    name: "Padded Waterproof Laptop Sleeve 15-Inch",
    category: "Accessories",
    description: "Complement your everyday look with this elegant padded waterproof laptop sleeve 15-inch.",
    price: 34,
    rating: { rate: 4.7, count: 320 },
    image: "images/products/prod_086.jpg",
    tag: {
      name: "Limited Edition",
      color: "#6600cc",
      fontColor: "#ffffff"
    }
  },
  {
    id: "prod_087",
    name: "925 Sterling Silver Stacking Ring",
    category: "Accessories",
    description: "Complement your everyday look with this elegant 925 sterling silver stacking ring.",
    price: 42,
    rating: { rate: 4.6, count: 145 },
    image: "images/products/prod_087.jpg",
    tag: {
      name: "Deal of the Day",
      color: "#e60000",
      fontColor: "#ffffff"
    }
  },
  {
    id: "prod_088",
    name: "Structured Canvas Baseball Cap",
    category: "Accessories",
    description: "Complement your everyday look with this elegant structured canvas baseball cap.",
    price: 26,
    rating: { rate: 4.4, count: 190 },
    image: "images/products/prod_088.jpg",
    tag: {
      name: "Popular",
      color: "#ff6600",
      fontColor: "#000000"
    }
  },
  {
    id: "prod_089",
    name: "Compact Windproof Travel Umbrella",
    category: "Accessories",
    description: "Complement your everyday look with this elegant compact windproof travel umbrella.",
    price: 22,
    rating: { rate: 4.5, count: 270 },
    image: "images/products/prod_089.jpg",
    tag: {
      name: "Top Seller",
      color: "#ff9900",
      fontColor: "#000000"
    }
  },
  {
    id: "prod_090",
    name: "Crossbody Nylon Sling Bag",
    category: "Accessories",
    description: "Complement your everyday look with this elegant crossbody nylon sling bag.",
    price: 39,
    rating: { rate: 4.6, count: 210 },
    image: "images/products/prod_090.jpg",
    tag: {
      name: "Only 3 left",
      color: "#cc0000",
      fontColor: "#ffffff"
    }
  },
  {
    id: "prod_091",
    name: "Wool Blend Fringe Scarf",
    category: "Accessories",
    description: "Complement your everyday look with this elegant wool blend fringe scarf.",
    price: 35,
    rating: { rate: 4.5, count: 115 },
    image: "images/products/prod_091.jpg",
    tag: {
      name: "Best Value",
      color: "#009900",
      fontColor: "#ffffff"
    }
  },
  {
    id: "prod_092",
    name: "Classic Chronograph Dive Watch",
    category: "Accessories",
    description: "Complement your everyday look with this elegant classic chronograph dive watch.",
    price: 175,
    rating: { rate: 4.8, count: 160 },
    image: "images/products/prod_092.jpg",
    tag: {
      name: "New Arrival",
      color: "#0066cc",
      fontColor: "#ffffff"
    }
  },
  {
    id: "prod_093",
    name: "Hard-Shell Leather Sunglasses Case",
    category: "Accessories",
    description: "Complement your everyday look with this elegant hard-shell leather sunglasses case.",
    price: 19.99,
    rating: { rate: 4.3, count: 75 },
    image: "images/products/prod_093.jpg",
    tag: {
      name: "Trending",
      color: "#ff0099",
      fontColor: "#ffffff"
    }
  },
  {
    id: "prod_094",
    name: "Manual Stainless Steel Coffee Grinder",
    category: "Home & Living",
    description: "Enhance your living space with this beautiful manual stainless steel coffee grinder.",
    price: 42,
    rating: { rate: 4.7, count: 240 },
    image: "images/products/prod_094.jpg",
    tag: {
      name: "Limited Edition",
      color: "#6600cc",
      fontColor: "#ffffff"
    }
  },
  {
    id: "prod_095",
    name: "Handwoven Cotton Area Rug (3x5 ft)",
    category: "Home & Living",
    description: "Enhance your living space with this beautiful handwoven cotton area rug (3x5 ft).",
    price: 89,
    rating: { rate: 4.6, count: 130 },
    image: "images/products/prod_095.jpg",
    tag: {
      name: "Deal of the Day",
      color: "#e60000",
      fontColor: "#ffffff"
    }
  },
  {
    id: "prod_096",
    name: "Matte Ceramic Flower Vase",
    category: "Home & Living",
    description: "Enhance your living space with this beautiful matte ceramic flower vase.",
    price: 29.5,
    rating: { rate: 4.4, count: 95 },
    image: "images/products/prod_096.jpg",
    tag: {
      name: "Popular",
      color: "#ff6600",
      fontColor: "#000000"
    }
  },
  {
    id: "prod_097",
    name: "Pre-Seasoned 10-Inch Cast Iron Skillet",
    category: "Home & Living",
    description: "Enhance your living space with this beautiful pre-seasoned 10-inch cast iron skillet.",
    price: 38,
    rating: { rate: 4.8, count: 470 },
    image: "images/products/prod_097.jpg",
    tag: {
      name: "Top Seller",
      color: "#ff9900",
      fontColor: "#000000"
    }
  },
  {
    id: "prod_098",
    name: "Woven Seagrass Storage Basket Set",
    category: "Home & Living",
    description: "Enhance your living space with this beautiful woven seagrass storage basket set.",
    price: 36,
    rating: { rate: 4.5, count: 160 },
    image: "images/products/prod_098.jpg",
    tag: {
      name: "Only 3 left",
      color: "#cc0000",
      fontColor: "#ffffff"
    }
  },
  {
    id: "prod_099",
    name: "Gooseneck Electric Pour-Over Kettle",
    category: "Home & Living",
    description: "Enhance your living space with this beautiful gooseneck electric pour-over kettle.",
    price: 65,
    rating: { rate: 4.7, count: 310 },
    image: "images/products/prod_099.jpg",
    tag: {
      name: "Best Value",
      color: "#009900",
      fontColor: "#ffffff"
    }
  },
  {
    id: "prod_100",
    name: "Natural Acacia Wood Cutting Board",
    category: "Home & Living",
    description: "Enhance your living space with this beautiful natural acacia wood cutting board.",
    price: 32,
    rating: { rate: 4.6, count: 185 },
    image: "images/products/prod_100.jpg",
    tag: {
      name: "New Arrival",
      color: "#0066cc",
      fontColor: "#ffffff"
    }
  },
  {
    id: "prod_101",
    name: "Blackout Thermal Window Curtains (Pair)",
    category: "Home & Living",
    description: "Enhance your living space with this beautiful blackout thermal window curtains (pair).",
    price: 49,
    rating: { rate: 4.5, count: 210 },
    image: "images/products/prod_101.jpg",
    tag: {
      name: "Trending",
      color: "#ff0099",
      fontColor: "#ffffff"
    }
  },
  {
    id: "prod_102",
    name: "Stackable Glass Food Containers (Set of 4)",
    category: "Home & Living",
    description: "Enhance your living space with this beautiful stackable glass food containers (set of 4).",
    price: 27.5,
    rating: { rate: 4.7, count: 295 },
    image: "images/products/prod_102.jpg",
    tag: {
      name: "Limited Edition",
      color: "#6600cc",
      fontColor: "#ffffff"
    }
  },
  {
    id: "prod_103",
    name: "Adjustable Laptop Bed & Sofa Tray Desk",
    category: "Home & Living",
    description: "Enhance your living space with this beautiful adjustable laptop bed & sofa tray desk.",
    price: 44,
    rating: { rate: 4.3, count: 140 },
    image: "images/products/prod_103.jpg",
    tag: {
      name: "Deal of the Day",
      color: "#e60000",
      fontColor: "#ffffff"
    }
  },
  {
    id: "prod_104",
    name: "Hyaluronic Acid Plumping Serum",
    category: "Beauty & Wellness",
    description: "Rejuvenate yourself with this nourishing hyaluronic acid plumping serum.",
    price: 29,
    rating: { rate: 4.8, count: 520 },
    image: "images/products/prod_104.jpg",
    tag: {
      name: "Popular",
      color: "#ff6600",
      fontColor: "#000000"
    }
  },
  {
    id: "prod_105",
    name: "Gentle Tea Tree Gel Face Wash",
    category: "Beauty & Wellness",
    description: "Rejuvenate yourself with this nourishing gentle tea tree gel face wash.",
    price: 21,
    rating: { rate: 4.4, count: 190 },
    image: "images/products/prod_105.jpg",
    tag: {
      name: "Top Seller",
      color: "#ff9900",
      fontColor: "#000000"
    }
  },
  {
    id: "prod_106",
    name: "Natural Bristle Dry Body Brush",
    category: "Beauty & Wellness",
    description: "Rejuvenate yourself with this nourishing natural bristle dry body brush.",
    price: 15,
    rating: { rate: 4.6, count: 140 },
    image: "images/products/prod_106.jpg",
    tag: {
      name: "Only 3 left",
      color: "#cc0000",
      fontColor: "#ffffff"
    }
  },
  {
    id: "prod_107",
    name: "Broad Spectrum Tinted Lip Balm SPF 25",
    category: "Beauty & Wellness",
    description: "Rejuvenate yourself with this nourishing broad spectrum tinted lip balm spf 25.",
    price: 12,
    rating: { rate: 4.3, count: 95 },
    image: "images/products/prod_107.jpg",
    tag: {
      name: "Best Value",
      color: "#009900",
      fontColor: "#ffffff"
    }
  },
  {
    id: "prod_108",
    name: "Revitalizing Caffeine Eye Gel",
    category: "Beauty & Wellness",
    description: "Rejuvenate yourself with this nourishing revitalizing caffeine eye gel.",
    price: 25,
    rating: { rate: 4.7, count: 260 },
    image: "images/products/prod_108.jpg",
    tag: {
      name: "New Arrival",
      color: "#0066cc",
      fontColor: "#ffffff"
    }
  },
  {
    id: "prod_109",
    name: "Aromatherapy Organic Lavender Pillow Spray",
    category: "Beauty & Wellness",
    description: "Rejuvenate yourself with this nourishing aromatherapy organic lavender pillow spray.",
    price: 19,
    rating: { rate: 4.5, count: 175 },
    image: "images/products/prod_109.jpg",
    tag: {
      name: "Trending",
      color: "#ff0099",
      fontColor: "#ffffff"
    }
  },
  {
    id: "prod_110",
    name: "Organic Raw Shea Hand Cream",
    category: "Beauty & Wellness",
    description: "Rejuvenate yourself with this nourishing organic raw shea hand cream.",
    price: 14.5,
    rating: { rate: 4.6, count: 220 },
    image: "images/products/prod_110.jpg",
    tag: {
      name: "Limited Edition",
      color: "#6600cc",
      fontColor: "#ffffff"
    }
  },
  {
    id: "prod_111",
    name: "Rose Quartz Gua Sha Sculpting Tool",
    category: "Beauty & Wellness",
    description: "Rejuvenate yourself with this nourishing rose quartz gua sha sculpting tool.",
    price: 16,
    rating: { rate: 4.4, count: 130 },
    image: "images/products/prod_111.jpg",
    tag: {
      name: "Deal of the Day",
      color: "#e60000",
      fontColor: "#ffffff"
    }
  },
  {
    id: "prod_112",
    name: "Exfoliating AHA + BHA Peeling Solution",
    category: "Beauty & Wellness",
    description: "Rejuvenate yourself with this nourishing exfoliating aha + bha peeling solution.",
    price: 27,
    rating: { rate: 4.8, count: 410 },
    image: "images/products/prod_112.jpg",
    tag: {
      name: "Popular",
      color: "#ff6600",
      fontColor: "#000000"
    }
  }
];