const productData = [
  {
    "id": 1,
    "title": "Apple AirPods (2nd Generation)",
    "price": 109.95,
    "description": "Enjoy a seamless wireless experience with Apple AirPods. Fast connectivity, excellent sound quality, and a convenient charging case.",
    "category": "electronics",
    "image": "images/products/airpods.jpeg",
    "rating": {
      "rate": 3.9,
      "count": 120
    }
  },
  {
    "id": 2,
    "title": "Casual Men's Backpack",
    "price": 22.3,
    "description": "Lightweight and durable backpack, perfect for daily use. Features multiple compartments and an ergonomic design.",
    "category": "accessories",
    "image": "images/products/bag.jpeg",
    "rating": {
      "rate": 4.1,
      "count": 259
    }
  },
  {
    "id": 3,
    "title": "Men's Leather Belt",
    "price": 55.99,
    "description": "Genuine leather belt with an adjustable metal buckle. Perfect for an elegant or casual look.",
    "category": "accessories",
    "image": "images/products/Bett.jpeg",
    "rating": {
      "rate": 4.7,
      "count": 500
    }
  },
  {
    "id": 4,
    "title": "Men's Casual Boots",
    "price": 15.99,
    "description": "Stylish and durable men's boots, great for casual wear or outdoor adventures. Comfortable fit with a rugged sole.",
    "category": "men's clothing",
    "image": "images/products/dame-boots.jpeg",
    "rating": {
      "rate": 2.1,
      "count": 430
    }
  },
  {
    "id": 5,
    "title": "Window Cleaning Squeegee",
    "price": 695,
    "description": "High-quality squeegee for streak-free window cleaning. Ergonomic handle for a comfortable grip.",
    "category": "home & kitchen",
    "image": "images/products/fenster-wischer.jpeg",
    "rating": {
      "rate": 4.6,
      "count": 400
    }
  },
  {
    "id": 6,
    "title": "Green Hoodie",
    "price": 168,
    "description": "Soft and warm hoodie made from premium materials. Perfect for casual wear or outdoor activities.",
    "category": "men's clothing",
    "image": "images/products/green-hoodie.jpeg",
    "rating": {
      "rate": 3.9,
      "count": 70
    }
  },
  {
    "id": 7,
    "title": "Outdoor Grill",
    "price": 9.99,
    "description": "Portable outdoor grill with a durable design. Ideal for BBQ parties, camping, and picnics.",
    "category": "outdoor",
    "image": "images/products/grill.jpeg",
    "rating": {
      "rate": 3,
      "count": 400
    }
  },
  {
    "id": 8,
    "title": "Cookware Set",
    "price": 10.99,
    "description": "Premium quality cookware set made from stainless steel. Perfect for everyday cooking needs.",
    "category": "home & kitchen",
    "image": "images/products/herde.jpeg",
    "rating": {
      "rate": 1.9,
      "count": 100
    }
  },
  {
    "id": 9,
    "title": "Wooden Dresser",
    "price": 64,
    "description": "Elegant wooden dresser with multiple drawers for organized storage. Perfect for bedrooms and living spaces.",
    "category": "furniture",
    "image": "images/products/kommode.jpeg",
    "rating": {
      "rate": 3.3,
      "count": 203
    }
  },
  {
    "id": 10,
    "title": "Refrigerator",
    "price": 109,
    "description": "Spacious and energy-efficient refrigerator with adjustable shelves. Ideal for keeping food fresh and organized.",
    "category": "home appliances",
    "image": "images/products/kuhlschrank.jpeg",
    "rating": {
      "rate": 2.9,
      "count": 470
    }
  },
  {
    "id": 11,
    "title": "Lenovo Laptop",
    "price": 109,
    "description": "High-performance Lenovo laptop with a sleek design. Perfect for work, study, or entertainment.",
    "category": "electronics",
    "image": "images/products/lenovo.jpeg",
    "rating": {
      "rate": 4.8,
      "count": 319
    }
  },
  {
    "id": 12,
    "title": "Men's Sweater",
    "price": 114,
    "description": "Comfortable and stylish men's sweater, perfect for cold weather. Soft fabric with a modern fit.",
    "category": "men's clothing",
    "image": "images/products/men-sweater.jpeg",
    "rating": {
      "rate": 4.8,
      "count": 400
    }
  },
  {
    "id": 13,
    "title": "Men's T-Shirt",
    "price": 599,
    "description": "Casual and breathable men's t-shirt. Ideal for everyday wear with a comfortable fit.",
    "category": "men's clothing",
    "image": "images/products/men-t-shirt.jpeg",
    "rating": {
      "rate": 2.9,
      "count": 250
    }
  },
  {
    "id": 14,
    "title": "Necklace with Pendant",
    "price": 999.99,
    "description": "Elegant necklace with a beautiful pendant. Perfect for special occasions or daily wear.",
    "category": "jewelry",
    "image": "images/products/necklace.jpeg",
    "rating": {
      "rate": 2.2,
      "count": 140
    }
  },
  {
    "id": 15,
    "title": "Women's Parka Jacket",
    "price": 56.99,
    "description": "Warm and stylish parka jacket with a faux fur hood. Ideal for winter and cold weather.",
    "category": "women's clothing",
    "image": "images/products/parka.jpeg",
    "rating": {
      "rate": 2.6,
      "count": 235
    }
  },
  {
    "id": 16,
    "title": "Women's Sunglasses",
    "price": 29.95,
    "description": "Trendy and protective sunglasses for women. UV protection with a stylish frame design.",
    "category": "accessories",
    "image": "images/products/sunglasses.jpeg",
    "rating": {
      "rate": 2.9,
      "count": 340
    }
  },
  {
    "id": 17,
    "title": "Tablet Device",
    "price": 39.99,
    "description": "Lightweight and powerful tablet, perfect for work, entertainment, and study. High-resolution display and fast performance.",
    "category": "electronics",
    "image": "images/products/tablet.jpeg",
    "rating": {
      "rate": 3.8,
      "count": 679
    }
  },
  {
    "id": 18,
    "title": "Smart TV",
    "price": 9.85,
    "description": "High-definition Smart TV with streaming capabilities. Enjoy your favorite shows with crisp visuals and clear sound.",
    "category": "electronics",
    "image": "images/products/tv.jpeg",
    "rating": {
      "rate": 4.7,
      "count": 130
    }
  },
  {
    "id": 19,
    "title": "Women's Dress",
    "price": 7.95,
    "description": "Elegant black and white dress for formal or casual occasions. Comfortable and stylish fit.",
    "category": "women's clothing",
    "image": "images/products/white-and-black-dress.jpeg",
    "rating": {
      "rate": 4.5,
      "count": 146
    }
  },
  {
    "id": 20,
    "title": "Women's Trousers",
    "price": 7.95,
    "description": "Stylish and comfortable women's trousers, perfect for casual or office wear. Designed with a modern fit for elegance and ease.",
    "category": "women's clothing",
    "image": "images/products/woman-trousers.jpeg",
    "rating": {
      "rate": 4.5,
      "count": 146
    }
  }
];

export default productData;
