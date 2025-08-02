import { useState,useEffect } from "react";
import Home from "./Home";

import {
  SaveAll,
  CctvIcon,
  FingerprintIcon,
  ScanFace,
  ScanEye,
  ComputerIcon,
  PrinterIcon,
  ServerIcon,
  NetworkIcon,
  NotebookIcon,
  Filter,
  Heart,
  ShoppingCart,
  Star,
  Search,
  ArrowRight,
  Plus,
  Minus,
  ArrowLeft,
  ChevronRight,
  User,
  Strikethrough,
  Menu,
  X,
  Phone,
  Mail,
  MapPin,
  Zap,
  Sparkles,
  Flame,
} from "lucide-react";
import React from "react";
import Services from "./Services";
import Footer from "./Footer";
import Contact from "./Contact";
import Partners from "./Partners";
import Mission from "./Mission";
import CoreValues from "./CoreValues";
import ServicesPro from "./ServicesPro";
import Internship from "./Internship";

const Amazing = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [currentView, setCurrentView] = useState("home"); // 'home' or 'product'
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cart, setCart] = useState([]);
  const [likes, setLikes] = useState(new Set());
  const [searchTerm, setSearchTerm] = useState("");
  const [showCart, setShowCart] = useState(false);
  const [doubleTapHearts, setDoubleTapHearts] = useState([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  

  const categories = [
    { id: "all", name: "All Products", icon: <SaveAll /> },
    { id: "laptops", name: "Laptops", icon: <ComputerIcon /> },
    { id: "cctv", name: "CCTV", icon: <CctvIcon /> },

    { id: "fingerprint", name: "Fingerprint", icon: <FingerprintIcon /> },
    { id: "laptops", name: "Laptops", icon: <ComputerIcon /> },
    { id: "office", name: "Office Suppliers", icon: <NotebookIcon /> },
    { id: "facial", name: "Facial recognition", icon: <ScanEye /> },
    { id: "printers", name: "Printers", icon: <PrinterIcon /> },
    { id: "servers", name: "Servers", icon: <ServerIcon /> },
    { id: "ups", name: "UPS Units", icon: <ScanFace /> },
    { id: "lan", name: "LAN & WLAN", icon: <NetworkIcon /> },
  ];

  

  // Main homepage products

  const userCard = [
    {
      id: 1,
      name: "Digital Camera",
      category: "Camera",
      image: "user (3).jpeg",
      date: "7/10/2025,6:00 PM",
      story:
        "Lorem ipsum mojer mader mood Lorem ipsum mojer mader mood Lorem ipsum mojer mader mood",
    },
    {
      id: 1,
      name: "CCTV Camera",
      category: "laptops",
      price: 1199,
      originalPrice: 1299,
      image: "./obj (5).jpg",
      rating: 4.9,
      reviews: 2847,
      description:
        "The most advanced iPhone ever with titanium design and A17 Pro chip.",
      features: ["A17 Pro Chip", "48MP Camera", "5G Ready", "Titanium Build"],
      colors: ["Black", "White"],
    },
    {
      id: 1,
      name: "Digital Camera",
      category: "Camera",
      image: "user (2).jpeg",
      date: "7/10/2025,6:00 PM",
      story:
        "Lorem ipsum mojer mader mood Lorem ipsum mojer mader mood Lorem ipsum mojer mader mood",
    },
    {
      id: 1,
      name: "Digital Camera",
      category: "Camera",
      image: "user (1).jpeg",
      date: "7/10/2025,6:00 PM",
      story:
        "Lorem ipsum mojer mader mood Lorem ipsum mojer mader mood Lorem ipsum mojer mader mood",
    },
    {
      id: 1,
      name: "Digital Camera",
      category: "Camera",
      image: "user (4).jpeg",
      date: "7/10/2025,6:00 PM",
      story:
        "Lorem ipsum mojer mader mood Lorem ipsum mojer mader mood Lorem ipsum mojer mader mood",
    },
  ];
  const homepageProducts = [
    
    {
      id: 1,
      name: "CCTV Camera",
      category: "laptops",
      price: 1199,
      originalPrice: 1299,
      image: "./obj (5).jpg",
      rating: 4.9,
      reviews: 2847,
      description:
        "The most advanced iPhone ever with titanium design and A17 Pro chip.",
      features: ["A17 Pro Chip", "48MP Camera", "5G Ready", "Titanium Build"],
      colors: ["Black", "White"],
    },
    
    {
      id: 2,
      name: 'MacBook Pro 16"',
      category: "laptops",
      price: 2499,
      originalPrice: 2699,
      image:
        "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=400&fit=crop",
      rating: 4.8,
      reviews: 1923,
      description:
        "Supercharged by M3 Pro chip for professional creators and developers.",
      features: ["M3 Pro Chip", "18GB RAM", "512GB SSD", "Liquid Retina XDR"],
      colors: ["Space Gray", "Silver"],
    },

    {
      id: 3,
      name: "AirPods Pro 2",
      category: "headphones",
      price: 249,
      originalPrice: 279,
      image:
        "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=400&h=400&fit=crop&auto=format",
      rating: 4.7,
      reviews: 5672,
      description:
        "Next-generation AirPods Pro with adaptive transparency and spatial audio.",
      features: [
        "Active Noise Cancellation",
        "Spatial Audio",
        "Adaptive Transparency",
        "MagSafe Charging",
      ],
      colors: ["White"],
    },
    {
      id: 4,
      name: "Apple Watch Ultra 2",
      category: "smartwatch",
      price: 799,
      originalPrice: 849,
      image:
        "https://images.unsplash.com/photo-1434493907317-a46b5bbe7834?w=400&h=400&fit=crop",
      rating: 4.8,
      reviews: 1456,
      description:
        "The most rugged and capable Apple Watch designed for extreme adventures.",
      features: [
        "49mm Titanium Case",
        "Action Button",
        "36-hour Battery",
        "Precision GPS",
      ],
      colors: ["Natural", "Blue", "Orange"],
    },
    {
      id: 5,
      name: "PlayStation 5 Pro",
      category: "gaming",
      price: 699,
      originalPrice: 799,
      image:
        "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=400&h=400&fit=crop",
      rating: 4.9,
      reviews: 3241,
      description:
        "The most powerful PlayStation console with 8K gaming capabilities.",
      features: ["8K Gaming", "Ray Tracing", "2TB SSD", "DualSense Controller"],
      colors: ["White", "Black"],
    },
    {
      id: 6,
      name: "Canon EOS R6 Mark II",
      category: "cameras",
      price: 2499,
      originalPrice: 2699,
      image:
        "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=400&h=400&fit=crop",
      rating: 4.8,
      reviews: 892,
      description:
        "Professional mirrorless camera with advanced autofocus and 4K video.",
      features: [
        "24.2MP Full-Frame",
        "Dual Pixel CMOS AF II",
        "4K 60p Video",
        "In-Body Stabilization",
      ],
      colors: ["Black"],
    },
  ];

  const trends = [
    {
      id: 1,
      name: "Canon Camera",
      description: "High quality camera with high ultra violet",
      category: "camera",
      image: "cam (2).jpeg",
    },
  ];

  // Extended products that show only on product pages (related products)
  const allProducts = [
    ...homepageProducts,
    // Audio Category Related Products
    {
      id: 7,
      name: "Sony WH-1000XM5",
      category: "smartphones",
      price: 399,
      originalPrice: 449,
      image: "cam (2).jpeg",
      rating: 4.6,
      reviews: 4327,
      description:
        "Industry-leading noise canceling with premium sound quality.",
      features: [
        "30hr Battery",
        "Quick Charge",
        "Multipoint Connection",
        "Touch Controls",
      ],
      colors: ["Black", "Silver"],
    },
    {
      id: 8,
      name: "Bose QuietComfort Ultra",
      category: "smartphones",
      price: 429,
      originalPrice: 479,
      image: "cam (1).jpg",
      rating: 4.5,
      reviews: 2891,
      description:
        "World-class noise cancellation with spatial audio technology.",
      features: ["Immersive Audio", "24hr Battery", "CustomTune", "Aware Mode"],
      colors: ["Black", "White Smoke", "Moonstone Blue"],
    },
    {
      id: 9,
      name: "AirPods Max",
      category: "headphones",
      price: 549,
      originalPrice: 599,
      image:
        "https://images.unsplash.com/photo-1625298124159-2e0db7c6b84c?w=400&h=400&fit=crop",
      rating: 4.4,
      reviews: 1567,
      description:
        "High-fidelity headphones with computational audio and premium build.",
      features: [
        "Computational Audio",
        "Adaptive EQ",
        "20-hour Battery",
        "Digital Crown",
      ],
      colors: ["Space Gray", "Silver", "Sky Blue", "Green", "Pink"],
    },
    {
      id: 10,
      name: "Beats Studio Pro",
      category: "headphones",
      price: 349,
      originalPrice: 399,
      image:
        "https://images.unsplash.com/photo-1545127398-14699f92334b?w=400&h=400&fit=crop",
      rating: 4.3,
      reviews: 2134,
      description:
        "Premium wireless headphones with personalized spatial audio.",
      features: [
        "Personalized Spatial Audio",
        "40hr Battery",
        "Active Noise Cancelling",
        "USB-C Audio",
      ],
      colors: ["Black", "Deep Brown", "Navy", "Sandstone"],
    },
    {
      id: 11,
      name: "Sennheiser Momentum 4",
      category: "headphones",
      price: 399,
      originalPrice: 449,
      image: "obj (3).jpg",
      rating: 4.7,
      reviews: 987,
      description:
        "Audiophile-grade wireless headphones with exceptional sound quality.",
      features: [
        "60hr Battery",
        "Adaptive Noise Cancellation",
        "Audiophile Sound",
        "Touch Controls",
      ],
      colors: ["Black", "White"],
    },
    {
      id: 12,
      name: "JBL Tour One M2",
      category: "headphones",
      price: 299,
      originalPrice: 349,
      image: "obj (5).jpg",
      rating: 4.2,
      reviews: 1423,
      description:
        "Smart noise cancelling headphones with True Adaptive technology.",
      features: [
        "True Adaptive Noise Cancelling",
        "50hr Battery",
        "Spatial Sound",
        "Multi-Point Connection",
      ],
      colors: ["Black", "Blue", "Champagne"],
    },
    // Smartphone Related Products
    {
      id: 13,
      name: "Samsung Galaxy S24 Ultra",
      category: "smartphones",
      price: 1299,
      originalPrice: 1399,
      image: "obj (4).jpg",
      rating: 4.7,
      reviews: 2156,
      description:
        "Ultimate Android flagship with S Pen and AI-powered features.",
      features: [
        "200MP Camera",
        "S Pen Included",
        "Snapdragon 8 Gen 3",
        "AI Features",
      ],
      colors: [
        "Titanium Gray",
        "Titanium Black",
        "Titanium Violet",
        "Titanium Yellow",
      ],
    },
    {
      id: 14,
      name: "Google Pixel 8 Pro",
      category: "smartphones",
      price: 999,
      originalPrice: 1099,
      image: "obj (1).jpg",
      rating: 4.6,
      reviews: 1789,
      description:
        "AI-powered photography with Google's most advanced Tensor G3 chip.",
      features: ["Tensor G3 Chip", "Magic Eraser", "Best Take", "Night Sight"],
      colors: ["Obsidian", "Porcelain", "Bay"],
    },
    // Accessories
    {
      id: 15,
      name: "MagSafe Charger",
      category: "accessories",
      price: 39,
      originalPrice: 49,
      image: "./obj (2).jpg",
      rating: 4.4,
      reviews: 3456,
      description: "Wireless charging made effortless with magnetic alignment.",
      features: [
        "15W Wireless Charging",
        "Magnetic Alignment",
        "Compatible with MagSafe",
        "USB-C Cable",
      ],
      colors: ["White"],
    },
    {
      id: 16,
      name: "Apple Pencil 2nd Gen",
      category: "accessories",
      price: 129,
      originalPrice: 149,
      image: "./obj (3).jpg",
      rating: 4.8,
      reviews: 2789,
      description:
        "Precision tool for drawing, note-taking, and marking up documents.",
      features: [
        "Pixel-Perfect Precision",
        "Tilt & Pressure Sensitive",
        "Double-Tap to Switch",
        "Wireless Charging",
      ],
      colors: ["White"],
    },

    // Laptops related products

     {
      id: 16,
      name: "Apple Pencil 2nd Gen",
      category: "laptops",
      price: 129,
      originalPrice: 149,
      image: "com (1).jpeg",
      rating: 4.8,
      reviews: 2789,
      description:
        "Precision tool for drawing, note-taking, and marking up documents.",
      features: [
        "Pixel-Perfect Precision",
        "Tilt & Pressure Sensitive",
        "Double-Tap to Switch",
        "Wireless Charging",
      ],
      colors: ["White"],
    },
     {
      id: 16,
      name: "Apple Pencil 2nd Gen",
      category: "laptops",
      price: 129,
      originalPrice: 149,
      image: "com (2).jpeg",
      rating: 4.8,
      reviews: 2789,
      description:
        "Precision tool for drawing, note-taking, and marking up documents.",
      features: [
        "Pixel-Perfect Precision",
        "Tilt & Pressure Sensitive",
        "Double-Tap to Switch",
        "Wireless Charging",
      ],
      colors: ["White"],
    },
     {
      id: 16,
      name: "Apple Pencil 2nd Gen",
      category: "laptops",
      price: 129,
      originalPrice: 149,
      image: "com (3).jpeg",
      rating: 4.8,
      reviews: 2789,
      description:
        "Precision tool for drawing, note-taking, and marking up documents.",
      features: [
        "Pixel-Perfect Precision",
        "Tilt & Pressure Sensitive",
        "Double-Tap to Switch",
        "Wireless Charging",
      ],
      colors: ["White"],
    },
     {
      id: 16,
      name: "Apple Pencil 2nd Gen",
      category: "laptops",
      price: 129,
      originalPrice: 149,
      image: "com (4).jpeg",
      rating: 4.8,
      reviews: 2789,
      description:
        "Precision tool for drawing, note-taking, and marking up documents.",
      features: [
        "Pixel-Perfect Precision",
        "Tilt & Pressure Sensitive",
        "Double-Tap to Switch",
        "Wireless Charging",
      ],
      colors: ["White"],
    },
     {
      id: 16,
      name: "Apple Pencil 2nd Gen",
      category: "laptops",
      price: 129,
      originalPrice: 149,
      image: "com (5).jpeg",
      rating: 4.8,
      reviews: 2789,
      description:
        "Precision tool for drawing, note-taking, and marking up documents.",
      features: [
        "Pixel-Perfect Precision",
        "Tilt & Pressure Sensitive",
        "Double-Tap to Switch",
        "Wireless Charging",
      ],
      colors: ["White"],
    },
     {
      id: 16,
      name: "Apple Pencil 2nd Gen",
      category: "laptops",
      price: 129,
      originalPrice: 149,
      image: "com (6).jpeg",
      rating: 4.8,
      reviews: 2789,
      description:
        "Precision tool for drawing, note-taking, and marking up documents.",
      features: [
        "Pixel-Perfect Precision",
        "Tilt & Pressure Sensitive",
        "Double-Tap to Switch",
        "Wireless Charging",
      ],
      colors: ["White"],
    },
     {
      id: 16,
      name: "Apple Pencil 2nd Gen",
      category: "laptops",
      price: 129,
      originalPrice: 149,
      image: "com (7).jpeg",
      rating: 4.8,
      reviews: 2789,
      description:
        "Precision tool for drawing, note-taking, and marking up documents.",
      features: [
        "Pixel-Perfect Precision",
        "Tilt & Pressure Sensitive",
        "Double-Tap to Switch",
        "Wireless Charging",
      ],
      colors: ["White"],
    },
     {
      id: 16,
      name: "Apple Pencil 2nd Gen",
      category: "laptops",
      price: 129,
      originalPrice: 149,
      image: "com (8).jpeg",
      rating: 4.8,
      reviews: 2789,
      description:
        "Precision tool for drawing, note-taking, and marking up documents.",
      features: [
        "Pixel-Perfect Precision",
        "Tilt & Pressure Sensitive",
        "Double-Tap to Switch",
        "Wireless Charging",
      ],
      colors: ["White"],
    },
     {
      id: 16,
      name: "Apple Pencil 2nd Gen",
      category: "laptops",
      price: 129,
      originalPrice: 149,
      image: "com (9).jpeg",
      rating: 4.8,
      reviews: 2789,
      description:
        "Precision tool for drawing, note-taking, and marking up documents.",
      features: [
        "Pixel-Perfect Precision",
        "Tilt & Pressure Sensitive",
        "Double-Tap to Switch",
        "Wireless Charging",
      ],
      colors: ["White"],
    },
     {
      id: 16,
      name: "Apple Pencil 2nd Gen",
      category: "laptops",
      price: 129,
      originalPrice: 149,
      image: "cam (10).jpeg",
      rating: 4.8,
      reviews: 2789,
      description:
        "Precision tool for drawing, note-taking, and marking up documents.",
      features: [
        "Pixel-Perfect Precision",
        "Tilt & Pressure Sensitive",
        "Double-Tap to Switch",
        "Wireless Charging",
      ],
      colors: ["White"],
    },
     {
      id: 16,
      name: "Apple Pencil 2nd Gen",
      category: "laptops",
      price: 129,
      originalPrice: 149,
      image: "cam (11).jpeg",
      rating: 4.8,
      reviews: 2789,
      description:
        "Precision tool for drawing, note-taking, and marking up documents.",
      features: [
        "Pixel-Perfect Precision",
        "Tilt & Pressure Sensitive",
        "Double-Tap to Switch",
        "Wireless Charging",
      ],
      colors: ["White"],
    },
  ];

  const getDisplayProducts = () => {
    if (currentView === "home") {
      return homepageProducts.filter((product) => {
        const matchesCategory =
          selectedCategory === "all" || product.category === selectedCategory;
        const matchesSearch = product.name
          .toLowerCase()
          .includes(searchTerm.toLowerCase());
        return matchesCategory && matchesSearch;
      });
    }
    return allProducts.filter((product) => {
      const matchesCategory =
        selectedCategory === "all" || product.category === selectedCategory;
      const matchesSearch = product.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  };

  const getRelatedProducts = (currentProduct) => {
    const relatedProducts = allProducts.filter(
      (p) =>
        p.id !== currentProduct.id &&
        p.category === currentProduct.category &&
        !homepageProducts.some((hp) => hp.id === p.id)
    );

    if (relatedProducts.length < 4) {
      const additionalProducts = homepageProducts.filter(
        (p) =>
          p.id !== currentProduct.id && p.category === currentProduct.category
      );
      relatedProducts.push(...additionalProducts);
    }

    return relatedProducts.slice(0, 6);
  };

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setCurrentView("product");
  };

  const handleBackToHome = () => {
    setCurrentView("home");
    setSelectedProduct(null);
  };

  const toggleLike = (productId) => {
    const newLikes = new Set(likes);
    if (newLikes.has(productId)) {
      newLikes.delete(productId);
    } else {
      newLikes.add(productId);
    }
    setLikes(newLikes);
  };

  const handleDoubleClick = (e, productId) => {
    e.preventDefault();

    if (!likes.has(productId)) {
      toggleLike(productId);
    }

    const rect = e.currentTarget.getBoundingClientRect();
    const heart = {
      id: Date.now() + Math.random(),
      x: rect.left + rect.width / 2,
      y: rect.top + rect.height / 2,
    };

    setDoubleTapHearts((prev) => [...prev, heart]);

    setTimeout(() => {
      setDoubleTapHearts((prev) => prev.filter((h) => h.id !== heart.id));
    }, 1500);
  };

  const addToCart = (product, quantity = 1) => {
    const existingItem = cart.find((item) => item.id === product.id);
    if (existingItem) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity }]);
    }
  };

  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity === 0) {
      setCart(cart.filter((item) => item.id !== productId));
    } else {
      setCart(
        cart.map((item) =>
          item.id === productId ? { ...item, quantity: newQuantity } : item
        )
      );
    }
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  // Shocking Menu Component
  

  const ProductCard = ({ product, isRelated = false }) => (
    <div
      className={`group cursor-pointer transition-all duration-300 hover:scale-105 ${
        isRelated ? "w-full" : ""
      }`}
      onDoubleClick={(e) => handleDoubleClick(e, product.id)}
    >
      <div className="relative overflow-hidden bg-gray-100 w-full h-48 sm:h-56 md:h-64 lg:h-72 xl:h-74 mb-4 rounded-2xl mt-5">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />

        {/* Quick actions */}
        <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 right-2 sm:right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
          <button
            onClick={(e) => {
              e.stopPropagation();
              addToCart(product);
            }}
            className="w-full bg-black text-white py-2 sm:py-3 rounded-full font-semibold hover:bg-gray-800 transition-colors duration-200 flex items-center justify-center gap-2 text-xs sm:text-sm md:text-base"
          >
            <Plus className="w-3 sm:w-4 h-3 sm:h-4" />
            Quick Add
          </button>
        </div>
      </div>

      <div
        onClick={() => handleProductClick(product)}
        className="space-y-1 sm:space-y-2"
      >
        <h3 className="font-semibold text-xs sm:text-sm md:text-base lg:text-lg text-gray-900 group-hover:text-[#202b44] transition-colors line-clamp-2">
          {product.name}
        </h3>

        <div className="flex items-center gap-1 sm:gap-2">
          <span className="text-gray-500 text-xs sm:text-sm md:text-base">
            Rwf {product.price} -{" "}
            <strike className="text-[#b8b8b9]">Rwf 100</strike>
          </span>
        </div>
      </div>
    </div>
  );

  const UserCase = () => {
    return (
      <>
        {userCard.map((usecard, index) => (
          <div
            key={usecard.id || index} // Add unique key
            className={`group cursor-pointer transition-all duration-300 hover:scale-105 `}
            onDoubleClick={(e) => handleDoubleClick(e, usecard.id)} // Use usecard.id instead of product.id
          >
            <div className="relative overflow-hidden bg-gray-100 w-full h-48 sm:h-56 md:h-64 lg:h-72 xl:h-74 mb-4 rounded-2xl mt-5 ">
              <img
                src={usecard.image}
                alt={usecard.name}
                className="w-full h-full object-cover transition-transform duration-500  group-hover:blur-xl "
              />

              {/* Quick actions */}
              <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 right-2 sm:right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                <div className="text-white ">
                  <h3 className="font-bold p-2">{usecard.date}</h3>
                  <p className="font-light p-2">"{usecard.story}"</p>
                </div>
              </div>
            </div>

            <div
              onClick={() => handleProductClick(usecard)} // Use usecard instead of product
              className="space-y-1 sm:space-y-2"
            >
              <h3 className="font-semibold text-xs sm:text-sm md:text-base lg:text-lg text-gray-900 group-hover:text-[#202b44] transition-colors line-clamp-2">
                {usecard.name}
              </h3>
            </div>
          </div>
        ))}
      </>
    );
  };

  

const TrendsComponent = () => {
  const trends = [
    {
      id: 1,
      name: "Canon EOS R5 Full-Frame Mirrorless Camera",
      description: "Professional 45MP full-frame camera with 8K video and in-body stabilization",
      features: ["8K RAW video recording", "45MP Full-Frame CMOS Sensor", "Dual Pixel CMOS AF II", "In-body stabilization (8 stops)"],
      category: "photography",
      image: "cam (1).jpeg",
      price: "450000",
      availability: "In Stock",
      rating: 5
    },
    {
      id: 2,
      name: "Sony A7 IV Mirrorless Camera",
      description: "Versatile 33MP full-frame hybrid camera for photos and videos",
      features: ["33MP Exmor R CMOS Sensor", "4K 60p 10-bit video", "Real-time Eye AF", "Improved touch interface"],
      category: "photography",
      image: "cam (2).jpeg",
      price: "380000",
      availability: "In Stock",
      rating: 4.5
    },
    {
      id: 3,
      name: "Nikon Z7 II Mirrorless Camera",
      description: "High-resolution pro mirrorless with dual processors and 4K video",
      features: ["45.7MP BSI CMOS Sensor", "Dual EXPEED 6 processors", "4K UHD 60p video", "493-point phase-detection AF"],
      category: "photography",
      image: "cam (3).jpeg",
      price: "390000",
      availability: "Limited Stock",
      rating: 4.8
    },
    {
      id: 4,
      name: "Fujifilm X-T5 Mirrorless Camera",
      description: "Classic design meets modern 40MP APS-C performance",
      features: ["40MP APS-C X-Trans CMOS 5 HR", "7-stop IBIS", "6.2K 30p video", "19 film simulation modes"],
      category: "photography",
      image: "cam (4).jpeg",
      price: "320000",
      availability: "In Stock",
      rating: 4.7
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [currentFeaturedSlide, setCurrentFeaturedSlide] = useState(0);

  useEffect(() => {
    let interval;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentSlide(prev => (prev + 1) % trends.length);
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying, trends.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const currentProduct = trends[currentSlide];

  return (
    <div className="max-w-7xl mx-auto p-4 relative group">
      <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-gradient-to-br from-gray-50 to-white">
        {trends.length > 0 && (
          <div className="relative aspect-[16/9] md:aspect-auto md:h-auto">
            {trends.map((trend, index) => (
              <div
                key={trend.id}
                className={`absolute inset-0 transition-opacity duration-700 ${index === currentSlide ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
              >
                <div className="flex flex-col md:flex-row h-full">
                  {/* Product Image */}
                  <div className="w-full md:w-1/2 h-96 md:h-auto relative">
                    <img
                      src={trend.image}
                      alt={trend.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-4 left-4 bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">
                      {trend.availability}
                    </div>
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-md">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <span key={i} className={`text-lg ${i < Math.floor(trend.rating) ? 'text-yellow-400' : 'text-gray-300'}`}>
                            ★
                          </span>
                        ))}
                        <span className="ml-1 text-sm text-gray-600">{trend.rating}</span>
                      </div>
                    </div>
                  </div>

                  {/* Product Details */}
                  <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col justify-center">
                    <div className="mb-2 flex items-center">
                      <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                        {trend.category}
                      </span>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold mb-3 text-gray-800 leading-tight">
                      {trend.name}
                    </h2>
                    <p className="text-gray-600 mb-4 text-lg">
                      {trend.description}
                    </p>

                    {/* Features List */}
                    <div className="mb-6">
                      <h3 className="font-semibold text-gray-700 mb-2">Key Features:</h3>
                      <ul className="space-y-2">
                        {trend.features.map((feature, i) => (
                          <li key={i} className="flex items-start">
                            <span className="flex-shrink-0 w-5 h-5 text-blue-500 mr-2">
                              ✓
                            </span>
                            <span className="text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center justify-between mt-auto">
                      <div className="mb-4 sm:mb-0">
                        <span className="text-xs text-gray-500">Starting at</span>
                        <div className="text-2xl font-bold text-[#202b44]">
                          Rwf {trend.price}
                        </div>
                      </div>
                      <div className="flex space-x-3">
                        <button className="bg-[#202b44] hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition duration-300 shadow-md hover:shadow-lg">
                          Buy Now
                        </button>
                        <button className="border border-[#202b44] text-[#202b44] hover:bg-gray-100 px-6 py-3 rounded-lg transition duration-300">
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Navigation Dots */}
        <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2 z-10">
          {trends.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${index === currentSlide ? 'w-6 bg-[#202b44]' : 'bg-gray-300'}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={() => setCurrentSlide(prev => (prev + trends.length - 1) % trends.length)}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full w-12 h-12 flex items-center justify-center transition-all duration-300 shadow-lg hover:scale-110 opacity-0 group-hover:opacity-100"
          aria-label="Previous slide"
        >
          <span className="text-2xl">&#10094;</span>
        </button>
        <button
          onClick={() => setCurrentSlide(prev => (prev + 1) % trends.length)}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full w-12 h-12 flex items-center justify-center transition-all duration-300 shadow-lg hover:scale-110 opacity-0 group-hover:opacity-100"
          aria-label="Next slide"
        >
          <span className="text-2xl">&#10095;</span>
        </button>
      </div>

      {/* Auto-play Toggle and Featured Products */}
      <div className="flex flex-col mt-8">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-semibold text-gray-800">Featured Products</h3>
          <button
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className="flex items-center text-gray-600 hover:text-gray-800"
          >
            {isAutoPlaying ? (
              <>
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20"><rect x="6" y="4" width="3" height="12" rx="1" /><rect x="13" y="4" width="3" height="12" rx="1" /></svg>
                Pause Slides
              </>
            ) : (
              <>
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20"><path d="M6.3 2.8L17.2 10 6.3 17.2V2.8z" /></svg>
                Play Slides
              </>
            )}
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {trends.map((trend, index) => (
            <div 
              key={trend.id} 
              className={`border rounded-lg p-3 cursor-pointer transition-all ${currentSlide === index ? 'ring-2 ring-[#202b44] bg-gray-50' : 'hover:bg-gray-50'}`}
              onClick={() => goToSlide(index)}
            >
              <div className="aspect-square mb-2">
                <img
                  src={trend.image}
                  alt={trend.name}
                  className="w-full h-full object-cover rounded"
                />
              </div>
              <h4 className="font-medium text-gray-800 truncate">{trend.name}</h4>
              <div className="text-[#202b44] font-semibold">Rwf {trend.price}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};





  const ProductDetailPage = ({ product }) => {
    const [selectedColor, setSelectedColor] = useState(product.colors[0]);
    const [quantity, setQuantity] = useState(1);
    const [selectedImage, setSelectedImage] = useState(0);
    const relatedProducts = getRelatedProducts(product);

    const productImages = [
      product.image,
      "./obj (1).jpg",
      "./obj (2).jpg",
      "./obj (3).jpg",
      "./obj (1).jpg",
      "./obj (2).jpg",
      "./obj (3).jpg",
    ];

    return (
      <div className="min-h-screen bg-white">
        {/* Breadcrumb */}
        <div className="bg-gray-50 py-3 sm:py-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-2 text-xs sm:text-sm">
              <button
                onClick={handleBackToHome}
                className="text-blue-600 hover:text-blue-800 flex items-center gap-1"
              >
                <ArrowLeft className="w-3 sm:w-4 h-3 sm:h-4" />
              </button>
              <ChevronRight className="w-3 sm:w-4 h-3 sm:h-4 text-gray-400" />
              <span className="text-gray-600 capitalize">
                {product.category}
              </span>
              <ChevronRight className="w-3 sm:w-4 h-3 sm:h-4 text-gray-400" />
              <span className="font-semibold truncate">{product.name}</span>
            </div>
          </div>
        </div>

        {/* Product Detail */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12">
            {/* Product Images */}
            <div className="space-y-4">
              <div
                className="aspect-square rounded-2xl sm:rounded-3xl bg-gray-100 overflow-hidden relative"
                onDoubleClick={(e) => handleDoubleClick(e, product.id)}
              >
                <img
                  src={productImages[selectedImage]}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Thumbnail images */}
              <div className="flex w-full h-16 sm:h-20 overflow-x-auto gap-2">
                <div className="flex gap-2">
                  {productImages.map((img, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      className={`flex-shrink-0 aspect-square w-16 sm:w-20 rounded-xl overflow-hidden border-2 transition-all ${
                        selectedImage === index
                          ? "border-black"
                          : "border-gray-200 hover:border-gray-300"
                      }`}
                    >
                      <img
                        src={img}
                        alt=""
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-6 lg:space-y-8">
              <div>
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-gray-900 mb-4">
                  {product.name}
                </h1>
                <p className="text-gray-600 text-sm sm:text-base lg:text-lg leading-relaxed">
                  {product.description}
                </p>
                <p className="font-medium mt-5 text-xl sm:text-2xl text-gray-900">
                  Rwf {product.price}
                </p>
              </div>

              {/* Features */}
              <div>
                <h3 className="font-medium text-lg sm:text-xl mb-4">
                  Key Features
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {product.features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl"
                    >
                      <span className="font-light text-sm sm:text-base">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Colors */}
              <div>
                <h3 className="font-medium text-lg sm:text-xl mb-4">
                  Available Colors
                </h3>
                <div className="flex flex-wrap gap-2 sm:gap-3">
                  {product.colors.map((color) => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`px-3 sm:px-6 py-2 sm:py-3 rounded-xl border-2 flex-1 sm:flex-none min-w-0 font-semibold transition-all text-sm sm:text-base ${
                        selectedColor === color
                          ? "border-none bg-[#202b44] text-white"
                          : "border-gray-300 hover:border-gray-400 bg-white"
                      }`}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity and Add to Cart */}
              <div className="space-y-6">
                <div>
                  <h3 className="font-medium text-lg sm:text-xl mb-4">
                    Quantity
                  </h3>
                  <div className="flex items-center gap-4">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="p-2 sm:p-3 border-2 border-gray-300 rounded-xl hover:bg-gray-50 transition-colors"
                    >
                      <Minus className="w-4 sm:w-5 h-4 sm:h-5" />
                    </button>
                    <span className="text-xl sm:text-2xl font-bold w-12 sm:w-16 text-center">
                      {quantity}
                    </span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="p-2 sm:p-3 border-2 border-gray-300 rounded-xl hover:bg-gray-50 transition-colors"
                    >
                      <Plus className="w-4 sm:w-5 h-4 sm:h-5" />
                    </button>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="bg-[#202b44] p-3 sm:p-5 text-white w-full sm:w-auto rounded-xl hover:cursor-pointer text-sm sm:text-base">
                    Order
                  </button>
                  <button
                    onClick={() => {
                      addToCart(product, quantity);
                      alert("Added to cart!");
                    }}
                    className="flex-1 bg-[#202b44] text-white py-3 sm:py-4 px-6 sm:px-8 rounded-2xl font-bold text-sm sm:text-lg hover:bg-gray-800 transition-colors flex items-center justify-center gap-2 sm:gap-3"
                  >
                    <ShoppingCart className="w-5 sm:w-6 h-5 sm:h-6" />
                    Add to Cart - Rwf {(product.price * quantity).toFixed(2)}
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <div className="mt-16 sm:mt-20">
              <div className="text-center mb-8 sm:mb-12">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
                  You might also like
                </h2>
                <p className="text-gray-600 text-sm sm:text-base lg:text-lg">
                  Discover more amazing products in the same category
                </p>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6 lg:gap-10">
                {relatedProducts.map((relatedProduct) => (
                  <ProductCard
                    key={relatedProduct.id}
                    product={relatedProduct}
                    isRelated
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    );
  };

  const CartSidebar = () => (
    <div
      className={`fixed top-0 right-0 h-full w-full sm:w-96 bg-white shadow-2xl transform transition-transform duration-300 z-50 ${
        showCart ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="p-4 sm:p-6 border-b">
        <div className="flex justify-between items-center">
          <h2 className="text-lg sm:text-xl font-bold">
            Shopping Cart ({cart.length})
          </h2>
          <button
            onClick={() => setShowCart(false)}
            className="text-gray-500 hover:text-gray-700 text-2xl"
          >
            ×
          </button>
        </div>
      </div>

      <div className="flex-1 overflow-auto p-4 sm:p-6">
        {cart.length === 0 ? (
          <div className="text-center py-8">
            <ShoppingCart className="w-12 sm:w-16 h-12 sm:h-16 mx-auto text-gray-300 mb-4" />
            <p className="text-gray-500">Your cart is empty</p>
          </div>
        ) : (
          <div className="space-y-4">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex gap-4 p-4 border border-gray-200 rounded-lg"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-12 sm:w-16 h-12 sm:h-16 object-cover rounded-lg"
                />
                <div className="flex-1">
                  <h4 className="font-semibold text-sm sm:text-base">
                    {item.name}
                  </h4>
                  <p className="text-gray-600 text-sm">Rwf {item.price}</p>
                  <div className="flex items-center gap-2 mt-2">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="p-1 border border-gray-300 rounded"
                    >
                      <Minus className="w-3 h-3" />
                    </button>
                    <span className="w-8 text-center text-sm">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="p-1 border border-gray-300 rounded"
                    >
                      <Plus className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {cart.length > 0 && (
        <div className="p-4 sm:p-6 border-t">
          <div className="flex justify-between items-center mb-4">
            <span className="text-base sm:text-lg font-semibold">Total:</span>
            <span className="text-xl sm:text-2xl font-bold">
              Rwf {getTotalPrice()}
            </span>
          </div>
          <button className="w-full bg-black text-white py-3 rounded-full font-semibold hover:bg-gray-800 transition-colors">
            Checkout
          </button>
        </div>
      )}
    </div>
  );

  const HomePage = () => {
    const displayProducts = getDisplayProducts();

    return (
      <>
        {/* Hero Section */}

        {/* Categories */}
        <section className="py-8 sm:py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-center">
              <div className="flex gap-2 overflow-x-auto pb-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`flex items-center gap-2 px-3 sm:px-6 py-2 sm:py-3 rounded-full font-semibold whitespace-nowrap transition-all text-xs sm:text-sm ${
                      selectedCategory === category.id
                        ? "bg-[#202b44] opacity-70 text-white"
                        : "bg-white text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    <span className="w-4 h-4 sm:w-5 sm:h-5">
                      {category.icon}
                    </span>
                    <span className="hidden sm:inline">{category.name}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section id="all products" className="py-8 sm:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 sm:mb-8 gap-4">
              <h2 className="text-xl sm:text-2xl font-bold">
                {selectedCategory === "all"
                  ? "Featured Products"
                  : categories.find((c) => c.id === selectedCategory)?.name}
              </h2>
              <div className="flex items-center gap-4 w-full sm:w-auto">
                <span className="text-gray-600 text-sm">
                  {displayProducts.length} products
                </span>
                <button className="flex items-center gap-2 px-3 sm:px-4 py-2 border border-gray-300 rounded-full hover:bg-gray-50 text-sm">
                  <Filter className="w-4 h-4" />
                  Filter
                </button>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 lg:gap-5 h-100 overflow-y-auto">
              {displayProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            {displayProducts.length === 0 && (
              <div className="text-center py-16">
                <div className="text-gray-400 text-4xl sm:text-6xl mb-4">
                  🔍
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-600 mb-2">
                  No products found
                </h3>
                <p className="text-gray-500 text-sm sm:text-base">
                  Try adjusting your search or category filter
                </p>
              </div>
            )}
          </div>
        </section>

        <section id="products" className="py-8 sm:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 sm:mb-8 gap-4 ">
              <h2 className="text-xl sm:text-2xl font-bold">
                Showcase From Our Users
              </h2>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 lg:gap-5 h-100 overflow-y-auto">
              {displayProducts.map((product) => (
                <UserCase key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>

        <section id="trends" className="py-8 sm:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 sm:mb-8 gap-4 ">
              <h2 className="text-xl sm:text-2xl font-bold">
                Trends Now
              </h2>
            </div>

            <div className="">
              {trends.map((product) => (
                <TrendsComponent product={product} />
              ))}
            </div>
          </div>
        </section>
      </>
    );
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Double-tap heart animations */}
      {doubleTapHearts.map((heart) => (
        <div
          key={heart.id}
          className="fixed pointer-events-none z-[9999]"
          style={{
            left: heart.x - 25,
            top: heart.y - 25,
            animation: "heartFloat 1.5s ease-out forwards",
          }}
        >
          <Heart className="w-8 sm:w-12 h-8 sm:h-12 fill-red-500 text-red-500 animate-ping" />
        </div>
      ))}

     


  
    <header className="sticky top-0 z-40 bg-gradient-to-r from-[#202b44] via-[#2a3654] to-[#202b44] border-b border-none text-white shadow-2xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img src="./logo.png" alt="Logo" className="h-8 sm:h-12" />
          </div>

          {/* Search - Hidden on mobile, shown on tablet+ */}
          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-300 w-4 h-4 sm:w-5 sm:h-5" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-8 sm:pl-10 pr-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-transparent placeholder-gray-300 text-white"
              />
            </div>
          </div>

          {/* Mobile Search Toggle */}
          <div className="md:hidden flex-1 max-w-xs mx-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-300 w-4 h-4" />
              <input
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-8 pr-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-transparent placeholder-gray-300 text-white text-sm"
              />
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2 sm:gap-4">
            <button className="p-2 hover:bg-white/20 rounded-full transition-colors duration-300">
              <User  className="w-5 sm:w-6 h-5 sm:h-6" />
            </button>

            <button
              onClick={() => setShowCart(true)}
              className="p-2 hover:bg-white/20 rounded-full relative transition-colors duration-300"
            >
              <ShoppingCart className="w-5 sm:w-6 h-5 sm:h-6" />
              {cart.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-green-400 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center animate-bounce">
                  {cart.length}
                </span>
              )}
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 hover:bg-white/20 rounded-full transition-colors duration-300"
              aria-label="Toggle mobile menu"
            >
              <span className="block w-6 h-0.5 bg-white mb-1"></span>
              <span className="block w-6 h-0.5 bg-white mb-1"></span>
              <span className="block w-6 h-0.5 bg-white"></span>
            </button>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="ml-80 hidden md:flex space-x-3 text-white py-4">
          {[
            "All Products",
            "Internship",
            "Mission",
            "Partners",
            "Values",
            "Contact",
            "Our Services"
          ].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="relative group px-3 py-2 rounded-md text-sm  transition-colors focus:outline-none focus:ring-offset-2 focus:ring-sky-400"
            >
              <span className="transition-colors duration-200 text-white">
                {item}
              </span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
            </a>
          ))}
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden flex flex-col space-y-2 text-white py-4">
            {[
              "All Products",
              "Our Services",
              "Internship",
              "Mission",
              "Partners",
              "Values",
              "Contact",
            ].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="relative group px-3 py-2 rounded-md text-sm font-light transition-colors focus:outline-none focus:ring-offset-2 focus:ring-sky-400"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span className="transition-colors duration-200 text-white">
                  {item}
                </span>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </div>
        )}
      </div>
    </header>






     

      <Home />

      {/* Main Content */}
      {currentView === "home" ? (
        <HomePage />
      ) : (
        <ProductDetailPage product={selectedProduct} />
      )}

      {/* Cart Sidebar */}
      <CartSidebar />

      {/* Overlay for cart */}
      {showCart && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setShowCart(false)}
        ></div>
      )}

      {/* CSS for animations */}
      <style jsx>{`
        @keyframes heartFloat {
          0% {
            transform: translateY(0) scale(0);
            opacity: 0;
          }
          15% {
            transform: translateY(-10px) scale(1.2);
            opacity: 1;
          }
          100% {
            transform: translateY(-100px) scale(0.8);
            opacity: 0;
          }
        }

        @keyframes slideInUp {
          0% {
            transform: translateY(100px);
            opacity: 0;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }

        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }

        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }

        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
       <Partners/>
  
    <Mission/>
    <CoreValues/>
    <ServicesPro/>
    <Internship/>
    <div className="mt-10">
  <Footer/>
    </div>
    
    </div>
  );
};

export default Amazing;
