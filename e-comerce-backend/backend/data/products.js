const products = [
  {
    name: "QuantumBook Pro Laptop",
    imageUrl: "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    description: "16-inch 4K OLED display, 12th Gen Intel Core i9 processor, 32GB RAM, 1TB SSD storage. Perfect for creative professionals with 10-hour battery life and Thunderbolt 4 ports.",
    price: 2499,
    countInStock: 8,
  },
  {
    name: "Nova X Smartphone",
    imageUrl: "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1367&q=80",
    description: "6.7-inch AMOLED 120Hz display, triple camera system with 108MP main sensor, 5000mAh battery with 65W fast charging. Includes IP68 water resistance.",
    price: 899,
    countInStock: 15,
  },
  {
    name: "Zenith Pro Wireless Earbuds",
    imageUrl: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80",
    description: "Active noise cancellation, 30-hour battery life with case, wireless charging compatible. Crystal clear calls with beamforming microphones.",
    price: 179,
    countInStock: 22,
  },
  {
    name: "Aurora 4K Smart TV",
    imageUrl: "https://images.unsplash.com/photo-1593305841991-05c297ba4575?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1357&q=80",
    description: "65-inch QLED display with HDR10+, built-in Google TV, 120Hz refresh rate. Includes Dolby Atmos sound and voice remote control.",
    price: 1299,
    countInStock: 6,
  },
  {
    name: "Titan Gaming Desktop",
    imageUrl: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80",
    description: "AMD Ryzen 9 5900X, NVIDIA RTX 3080, 32GB DDR4 RAM, 1TB NVMe SSD + 2TB HDD. RGB lighting and liquid cooling system included.",
    price: 2799,
    countInStock: 4,
  },
  {
    name: "Pulse Fitness Smartwatch",
    imageUrl: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1399&q=80",
    description: "1.4-inch AMOLED display, blood oxygen monitoring, 50m water resistance. Tracks 100+ sports modes with 14-day battery life.",
    price: 249,
    countInStock: 18,
  },
  {
    name: "Nexus Pro Tablet",
    imageUrl: "https://images.unsplash.com/photo-1546054454-aa26e2b734c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80",
    description: "12.9-inch Liquid Retina display, M2 chip, 256GB storage. Supports Apple Pencil and Magic Keyboard with 10-hour battery life.",
    price: 1099,
    countInStock: 9,
  },
  {
    name: "Echo Studio Smart Speaker",
    imageUrl: "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1459&q=80",
    description: "High-fidelity smart speaker with 3D audio and Alexa. Five built-in speakers produce powerful bass and dynamic midrange.",
    price: 199,
    countInStock: 14,
  },
  {
    name: "Vortex Gaming Monitor",
    imageUrl: "https://images.unsplash.com/photo-1547036967-23d11aacaee0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
    description: "27-inch QHD 240Hz gaming monitor with 1ms response time. NVIDIA G-SYNC compatible with HDR400 support.",
    price: 499,
    countInStock: 7,
  },
  {
    name: "SnapShot Mirrorless Camera",
    imageUrl: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1528&q=80",
    description: "24.2MP full-frame mirrorless camera with 4K video. Includes 28-70mm lens and in-body image stabilization.",
    price: 1599,
    countInStock: 5,
  },
  {
    name: "AirFlow Wireless Keyboard",
    imageUrl: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1465&q=80",
    description: "Ultra-slim mechanical keyboard with low-profile switches. Bluetooth 5.1 connectivity with 6-month battery life.",
    price: 129,
    countInStock: 25,
  },
  {
    name: "PowerBeam Laser Projector",
    imageUrl: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
    description: "4K UHD laser projector with 3000 ANSI lumens. Android TV built-in with support for Netflix and Disney+.",
    price: 2199,
    countInStock: 3,
  }
];

module.exports = products;