const productData = [
  {
    "id": 1,
    "title": "Apple AirPods (2nd Generation)",
    "price": 109.95,
    "description": "Enjoy a seamless wireless experience with Apple AirPods. Fast connectivity, excellent sound quality, and a convenient charging case.",
    "category": "electronics",
    "image": "/images/products/airpods.jpeg",
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
    "image": "/images/products/bag.jpeg",
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
    "image": "/images/products/Bett.jpeg",
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
    "image": "/images/products/dame-boots.jpeg",
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
    "image": "/images/products/fenster-wischer.jpeg",
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
    "image": "/images/products/green-hoodie.jpeg",
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
    "image": "/images/products/grill.jpeg",
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
    "image": "/images/products/herde.jpeg",
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
    "image": "/images/products/kommode.jpeg",
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
    "image": "/images/products/kuhlschrank.jpeg",
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
    "image": "/images/products/lenovo.jpeg",
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
    "image": "/images/products/men-sweater.jpeg",
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
    "image": "/images/products/men-t-shirt.jpeg",
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
    "image": "/images/products/necklace.jpeg",
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
    "image": "/images/products/parka.jpeg",
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
    "image": "/images/products/sunglasses.jpeg",
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
    "image": "/images/products/tablet.jpeg",
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
    "image": "/images/products/tv.jpeg",
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
    "image": "/images/products/white-and-black-dress.jpeg",
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
    "image": "/images/products/woman-trousers.jpeg",
    "rating": {
      "rate": 4.5,
      "count": 146
    }
  },
  {
    "id": 21,
    "title": "Beige Shirt",
    "price": 7.95,
    "description": "Stylish and comfortable women's trousers, perfect for casual or office wear. Designed with a modern fit for elegance and ease.",
    "category": "women's clothing",
    "image": "/images/products/beige-shirt.png",
    "rating": {
      "rate": 4.5,
      "count": 146
    }
  },
  {
    "id": 22,
    "title": "Black Jacket",
    "price": 19.99,
    "description": "A sleek and sophisticated black jacket perfect for formal occasions or as an outer layer for casual outfits.",
    "category": "women's clothing",
    "image": "/images/products/black-jacket.png",
    "rating": {
      "rate": 4.5,
      "count": 146
    }
  },
  {
    "id": 23,
    "title": "Black T-shirt",
    "price": 9.95,
    "description": "A versatile and comfortable black t-shirt, ideal for casual wear. Simple yet stylish, with a modern fit.",
    "category": "women's clothing",
    "image": "/images/products/black-t-shirt.png",
    "rating": {
      "rate": 4.5,
      "count": 146
    }
  },
  {
    "id": 24,
    "title": "Blue Blouse",
    "price": 14.99,
    "description": "Elegant and lightweight blue blouse, perfect for both office and casual settings. Features a refined look with a modern cut.",
    "category": "women's clothing",
    "image": "/images/products/blue-bluse-woman.png",
    "rating": {
      "rate": 4.5,
      "count": 146
    }
  },
  {
    "id": 25,
    "title": "Blue Blouse",
    "price": 14.99,
    "description": "Chic and stylish blue blouse that pairs well with jeans or trousers, ideal for a polished yet casual appearance.",
    "category": "women's clothing",
    "image": "/images/products/blue-bluse.png",
    "rating": {
      "rate": 4.5,
      "count": 146
    }
  },
  {
    "id": 26,
    "title": "Blue Men's Jacket",
    "price": 29.99,
    "description": "A modern blue jacket designed for men, combining both comfort and style. Perfect for outdoor activities or casual outings.",
    "category": "men's clothing",
    "image": "/images/products/blue-man-jacket.png",
    "rating": {
      "rate": 4.5,
      "count": 146
    }
  },
  {
    "id": 27,
    "title": "Blue Shirt (Boy)",
    "price": 12.95,
    "description": "A stylish blue shirt for boys, suitable for both casual and semi-formal occasions. Comfortable and easy to wear.",
    "category": "kids' clothing",
    "image": "/images/products/blue-shirt-boy.png",
    "rating": {
      "rate": 4.5,
      "count": 146
    }
  },
  {
    "id": 28,
    "title": "Blue Sportive Wear",
    "price": 16.95,
    "description": "A blue sportive outfit, perfect for exercising or casual activities. Made for comfort and flexibility.",
    "category": "sportswear",
    "image": "/images/products/blue-sportive.png",
    "rating": {
      "rate": 4.5,
      "count": 146
    }
  },
  {
    "id": 29,
    "title": "Blue T-shirt",
    "price": 11.95,
    "description": "A comfortable blue t-shirt that is a wardrobe staple. Ideal for everyday casual wear with a relaxed fit.",
    "category": "women's clothing",
    "image": "/images/products/blue-t-shirt.png",
    "rating": {
      "rate": 4.5,
      "count": 146
    }
  },
  {
    "id": 30,
    "title": "Blue Trousers (Girl)",
    "price": 18.95,
    "description": "Stylish blue trousers for girls, offering a modern and comfortable fit. Perfect for school or casual outings.",
    "category": "kids' clothing",
    "image": "/images/products/blue-trousers-girl.png",
    "rating": {
      "rate": 4.5,
      "count": 146
    }
  },
  {
    "id": 31,
    "title": "Cargo Trousers",
    "price": 23.95,
    "description": "Functional cargo trousers with plenty of pockets, perfect for outdoor activities or casual wear.",
    "category": "women's clothing",
    "image": "/images/products/cargo-trousers.png",
    "rating": {
      "rate": 4.5,
      "count": 146
    }
  },
  {
    "id": 32,
    "title": "Coat for Girls",
    "price": 34.99,
    "description": "A stylish coat for girls, designed to keep them warm during colder months. Fashionable and comfortable for winter wear.",
    "category": "kids' clothing",
    "image": "/images/products/coat-girl.png",
    "rating": {
      "rate": 4.5,
      "count": 146
    }
  },
  {
    "id": 33,
    "title": "Dark Blue Jean Jacket",
    "price": 25.99,
    "description": "A dark blue jean jacket that brings a touch of casual style to any outfit. Durable and comfortable for everyday use.",
    "category": "women's clothing",
    "image": "/images/products/dark-blue-jeansjacket.png",
    "rating": {
      "rate": 4.5,
      "count": 146
    }
  },
  {
    "id": 34,
    "title": "Dark Blue Shirt",
    "price": 17.95,
    "description": "A classic dark blue shirt for any occasion, perfect for layering or wearing on its own for a smart, casual look.",
    "category": "women's clothing",
    "image": "/images/products/dark-blue-shirt.png",
    "rating": {
      "rate": 4.5,
      "count": 146
    }
  },
  {
    "id": 35,
    "title": "Dark Blue Trousers",
    "price": 22.99,
    "description": "Classic dark blue trousers that combine style and comfort. Perfect for office wear or casual outings.",
    "category": "women's clothing",
    "image": "/images/products/dark-blue.png",
    "rating": {
      "rate": 4.5,
      "count": 146
    }
  },
  {
    "id": 36,
    "title": "Dress for Girls",
    "price": 19.99,
    "description": "A cute and fashionable dress for girls, perfect for special occasions or everyday wear.",
    "category": "kids' clothing",
    "image": "/images/products/dress-girl.png",
    "rating": {
      "rate": 4.5,
      "count": 146
    }
  },
  {
    "id": 37,
    "title": "Gap Jumper",
    "price": 15.99,
    "description": "A cozy and stylish gap jumper, perfect for casual wear. Features a soft fabric and relaxed fit, ideal for layering or wearing solo.",
    "category": "women's clothing",
    "image": "/images/products/gap-jumer.png",
    "rating": {
      "rate": 4.7,
      "count": 200
    }
  },
  {
    "id": 38,
    "title": "Girl Blue Blouse",
    "price": 12.49,
    "description": "A light and breezy blue blouse, ideal for both casual and semi-formal occasions. With a modern cut and breathable fabric, it's perfect for the warmer seasons.",
    "category": "women's clothing",
    "image": "/images/products/girl-blue-bluse.png",
    "rating": {
      "rate": 4.3,
      "count": 175
    }
  },
  {
    "id": 39,
    "title": "Girl Flower Dress",
    "price": 18.99,
    "description": "A beautiful floral dress, perfect for spring or summer. The dress features a flattering silhouette and vibrant floral patterns.",
    "category": "women's clothing",
    "image": "/images/products/girl-flower-dress.png",
    "rating": {
      "rate": 4.8,
      "count": 250
    }
  },
  {
    "id": 40,
    "title": "Girl Sportive Pink",
    "price": 14.99,
    "description": "A sporty pink dress designed for comfort and style. This dress is perfect for a laid-back day out or a casual gathering.",
    "category": "women's clothing",
    "image": "/images/products/girl-sportive-pink.png",
    "rating": {
      "rate": 4.6,
      "count": 180
    }
  },
  {
    "id": 41,
    "title": "Goal White T-Shirt",
    "price": 9.99,
    "description": "A simple and classic white T-shirt, designed for both comfort and versatility. A must-have for your everyday wardrobe.",
    "category": "women's clothing",
    "image": "/images/products/goal-white-tshirt.png",
    "rating": {
      "rate": 4.4,
      "count": 150
    }
  },
  {
    "id": 42,
    "title": "Gray T-Shirt",
    "price": 10.99,
    "description": "A soft gray T-shirt that's perfect for layering or wearing alone. Its neutral color makes it easy to pair with any outfit.",
    "category": "women's clothing",
    "image": "/images/products/gray-tshirt.png",
    "rating": {
      "rate": 4.5,
      "count": 165
    }
  },
  {
    "id": 43,
    "title": "Green Bomber Jacket",
    "price": 29.99,
    "description": "A trendy green bomber jacket with a comfortable fit. Perfect for cooler weather, this jacket is both stylish and functional.",
    "category": "women's clothing",
    "image": "/images/products/green-bomber-jacket.png",
    "rating": {
      "rate": 4.9,
      "count": 120
    }
  },
  {
    "id": 44,
    "title": "Green Kid Trousers",
    "price": 22.99,
    "description": "Comfortable and stylish green trousers for kids. Designed with a stretchy fabric for all-day wear and a perfect fit.",
    "category": "children's clothing",
    "image": "/images/products/green-kid-trousers.png",
    "rating": {
      "rate": 4.3,
      "count": 95
    }
  },
  {
    "id": 45,
    "title": "Jeans Jacket Boy",
    "price": 24.99,
    "description": "A rugged and durable jeans jacket for boys. Perfect for everyday wear, it provides a cool and casual look.",
    "category": "children's clothing",
    "image": "/images/products/jeans-jacket-boy.png",
    "rating": {
      "rate": 4.6,
      "count": 130
    }
  },
  {
    "id": 46,
    "title": "Jeans Jacket",
    "price": 29.99,
    "description": "A classic blue jeans jacket for a timeless look. With a comfortable fit, it's a perfect addition to any casual outfit.",
    "category": "women's clothing",
    "image": "/images/products/jeans-jacket.png",
    "rating": {
      "rate": 4.8,
      "count": 210
    }
  },
  {
    "id": 47,
    "title": "Kid Trousers",
    "price": 18.49,
    "description": "Durable and comfortable trousers for kids. These trousers come in a variety of colors and are perfect for active days.",
    "category": "children's clothing",
    "image": "/images/products/kid-trousers.png",
    "rating": {
      "rate": 4.4,
      "count": 180
    }
  },
  {
    "id": 48,
    "title": "Long Skirt",
    "price": 19.99,
    "description": "A long, elegant skirt perfect for formal or casual occasions. Features a comfortable fit and flows beautifully with every step.",
    "category": "women's clothing",
    "image": "/images/products/long-skirt.png",
    "rating": {
      "rate": 4.7,
      "count": 160
    }
  },
  {
    "id": 49,
    "title": "Nike Jacket",
    "price": 49.99,
    "description": "A high-quality Nike jacket designed for both performance and style. Ideal for outdoor activities or casual wear.",
    "category": "women's clothing",
    "image": "/images/products/nike-jacket.png",
    "rating": {
      "rate": 4.8,
      "count": 210
    }
  },
  {
    "id": 50,
    "title": "Pikachu T-Shirt",
    "price": 13.49,
    "description": "A fun and quirky Pikachu-themed T-shirt, perfect for fans of the iconic character. A comfortable fit for all-day wear.",
    "category": "women's clothing",
    "image": "/images/products/pikachu-tshirt.png",
    "rating": {
      "rate": 4.7,
      "count": 170
    }
  },
  {
    "id": 51,
    "title": "Pink Trousers for Women",
    "price": 7.95,
    "description": "Chic and comfortable pink trousers designed for both casual and office wear. Features a modern fit that offers elegance and ease.",
    "category": "women's clothing",
    "image": "/images/products/pink-girl.png",
    "rating": {
      "rate": 4.3,
      "count": 120
    }
  },
  {
    "id": 52,
    "title": "Pink Jacket for Women",
    "price": 29.99,
    "description": "A trendy pink jacket made for both casual and office wear, offering comfort and style with a modern touch.",
    "category": "women's clothing",
    "image": "/images/products/pink-jacket-girl.png",
    "rating": {
      "rate": 4.7,
      "count": 210
    }
  },
  {
    "id": 53,
    "title": "Pink Jacket",
    "price": 29.99,
    "description": "Stylish and warm pink jacket designed to keep you cozy while maintaining a fashionable look for various occasions.",
    "category": "women's clothing",
    "image": "/images/products/pink-jacket.png",
    "rating": {
      "rate": 4.6,
      "count": 180
    }
  },
  {
    "id": 54,
    "title": "Pink Sporty Trousers for Women",
    "price": 19.95,
    "description": "Comfortable pink sporty trousers, perfect for active wear or casual outings. A blend of comfort and style for everyday wear.",
    "category": "women's clothing",
    "image": "/images/products/pink-sportive-trousers.png",
    "rating": {
      "rate": 4.2,
      "count": 95
    }
  },
  {
    "id": 55,
    "title": "Pink T-Shirt for Women",
    "price": 12.95,
    "description": "A soft and stylish pink T-shirt that combines comfort with casual chic. Perfect for everyday wear.",
    "category": "women's clothing",
    "image": "/images/products/pink-tshirt.png",
    "rating": {
      "rate": 4.8,
      "count": 300
    }
  },
  {
    "id": 56,
    "title": "Polo Shirt for Boys",
    "price": 15.95,
    "description": "A classic polo shirt for boys that offers both style and comfort. Perfect for casual outings or even semi-formal occasions.",
    "category": "children's clothing",
    "image": "/images/products/polo-boy.png",
    "rating": {
      "rate": 4.1,
      "count": 50
    }
  },
  {
    "id": 57,
    "title": "Polo Shirt for Men (Back)",
    "price": 15.95,
    "description": "A stylish men's polo shirt with a classic fit, designed to be worn for a variety of casual settings.",
    "category": "men's clothing",
    "image": "/images/products/polo-man-back.png",
    "rating": {
      "rate": 4.4,
      "count": 160
    }
  },
  {
    "id": 58,
    "title": "Polo Shirt for Men (Front)",
    "price": 15.95,
    "description": "A versatile men's polo shirt with a neat front design, ideal for casual wear or semi-formal settings.",
    "category": "men's clothing",
    "image": "/images/products/polo-man-front.png",
    "rating": {
      "rate": 4.6,
      "count": 220
    }
  },
  {
    "id": 59,
    "title": "Polo Shirt for Men (Front 2)",
    "price": 15.95,
    "description": "A modern polo shirt for men with a sleek design, perfect for both casual and semi-formal occasions.",
    "category": "men's clothing",
    "image": "/images/products/polo-man-front-2.png",
    "rating": {
      "rate": 4.3,
      "count": 180
    }
  },
  {
    "id": 60,
    "title": "Polo Shirt for Men",
    "price": 15.95,
    "description": "A stylish and comfortable polo shirt for men. A timeless piece for your wardrobe.",
    "category": "men's clothing",
    "image": "/images/products/polo-man.png",
    "rating": {
      "rate": 4.5,
      "count": 300
    }
  },
  {
    "id": 61,
    "title": "Puma Polo Shirt for Boys",
    "price": 19.95,
    "description": "A sporty and stylish Puma polo shirt for boys, combining active wear style with comfort.",
    "category": "children's clothing",
    "image": "/images/products/puma-boy.png",
    "rating": {
      "rate": 4.0,
      "count": 80
    }
  },
  {
    "id": 62,
    "title": "Puma T-Shirt for Women",
    "price": 19.95,
    "description": "A soft and stylish Puma T-shirt designed for active women. Perfect for sports and casual outings.",
    "category": "women's clothing",
    "image": "/images/products/puma-tshirt.png",
    "rating": {
      "rate": 4.6,
      "count": 220
    }
  },
  {
    "id": 63,
    "title": "Red Sporty T-Shirt",
    "price": 11.95,
    "description": "A red sporty T-shirt designed for women who love both style and comfort in their activewear.",
    "category": "women's clothing",
    "image": "/images/products/red-sportive-t-shirt.png",
    "rating": {
      "rate": 4.4,
      "count": 150
    }
  },
  {
    "id": 64,
    "title": "Red Sportive Trousers",
    "price": 19.95,
    "description": "A pair of red sportive trousers made for women who enjoy both active and casual wear. Stylish and functional.",
    "category": "women's clothing",
    "image": "/images/products/red-sportive.png",
    "rating": {
      "rate": 4.3,
      "count": 110
    }
  },
  {
    "id": 65,
    "title": "Shirt for Women",
    "price": 12.95,
    "description": "A classic shirt for women, suitable for casual and professional settings.",
    "category": "women's clothing",
    "image": "/images/products/shirt-woman.png",
    "rating": {
      "rate": 4.2,
      "count": 140
    }
  },
  {
    "id": 66,
    "title": "Sportive Black Trousers for Women",
    "price": 19.95,
    "description": "Black sportive trousers for women that are both stylish and functional. Perfect for active or casual wear.",
    "category": "women's clothing",
    "image": "/images/products/sportive-black-trousers.png",
    "rating": {
      "rate": 4.7,
      "count": 250
    }
  },
  {
    "id": 67,
    "title": "Sportive Girl Trousers",
    "price": 15.95,
    "description": "Comfortable and sporty trousers designed for girls who love to stay active while looking stylish.",
    "category": "children's clothing",
    "image": "/images/products/sportive-girl.png",
    "rating": {
      "rate": 4.0,
      "count": 90
    }
  },
  {
    "id": 68,
    "title": "T-Shirt Boston",
    "price": 12.95,
    "description": "A Boston-themed T-shirt, stylish and perfect for everyday wear, with a comfortable fit.",
    "category": "women's clothing",
    "image": "/images/products/t-shirt-boston.png",
    "rating": {
      "rate": 4.4,
      "count": 170
    }
  },
  {
    "id": 69,
    "title": "T-Shirt for Men",
    "price": 12.95,
    "description": "A comfortable and casual T-shirt designed for men who value both style and ease.",
    "category": "men's clothing",
    "image": "/images/products/t-shirt-man.png",
    "rating": {
      "rate": 4.2,
      "count": 130
    }
  },
  {
    "id": 70,
    "title": "Triangle Trousers",
    "price": 16.95,
    "description": "Trendy triangle-patterned trousers, perfect for women who love modern and fashionable clothing.",
    "category": "women's clothing",
    "image": "/images/products/triangle-trousers.png",
    "rating": {
      "rate": 4.5,
      "count": 200
    }
  },
  {
    "id": 71,
    "title": "Trousers for Boys",
    "price": 14.95,
    "description": "Stylish trousers for boys designed for casual wear, offering comfort and style.",
    "category": "children's clothing",
    "image": "/images/products/trousers-boy.png",
    "rating": {
      "rate": 4.0,
      "count": 75
    }
  },
  {
    "id": 72,
    "title": "White Blouse for Women",
    "price": 18.95,
    "description": "A timeless white blouse perfect for both professional and casual looks.",
    "category": "women's clothing",
    "image": "/images/products/white-bluse.png",
    "rating": {
      "rate": 4.6,
      "count": 220
    }
  },
  {
    "id": 73,
    "title": "White Goal T-Shirt",
    "price": 11.95,
    "description": "A white T-shirt with a sporty goal design, perfect for active women or casual wear.",
    "category": "women's clothing",
    "image": "/images/products/white-goal-tshirt.png",
    "rating": {
      "rate": 4.3,
      "count": 180
    }
  },
  {
    "id": 74,
    "title": "White T-Shirt",
    "price": 10.95,
    "description": "A simple and classic white T-shirt, perfect for layering or wearing alone.",
    "category": "women's clothing",
    "image": "/images/products/white-tshirt.png",
    "rating": {
      "rate": 4.8,
      "count": 300
    }
  },
  {
    "id": 75,
    "title": "Yellow Jacket",
    "price": 29.95,
    "description": "A vibrant yellow jacket perfect for adding a pop of color to any outfit. Stylish, warm, and ideal for chilly weather.",
    "category": "women's clothing",
    "image": "/images/products/yellow-jacket.png",
    "rating": {
      "rate": 4.5,
      "count": 150
    }
  },
];

export default productData;
