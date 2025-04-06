import { useRouter } from "next/navigation";
import { useState } from "react";


const merchandiseItems = [
    {
    id: 1,
    name: "Developer Hoodie",
    category: "Hoodie",
    price : 59.99,
    image: "/merchandise/hoodie.png",
    sizes: [ "S", "M", "L", "XL", "XXL" ],
    featured : true,
    bestsellter : true,
    description : "Stay warm while coding with this stylish developer hoodie. Perfect for those late-night coding sessions.",
    },
    {
    id: 2,
    name: "Developer T-shirt",
    category : "T-shirt",
    price : 29.99,
    image : "/merchandise/tshirt.png",
    sizes : [ "S", "M", "L", "XL", "XXL"],
    featured : true,
    bestseller : false,
    descritpion : "Comfy cotton t-shirt for developers. Show off your coding skills in style.",
    },
    {
    id : 3,
    name : "Developer Hat",
    cateogory : "Hat",
    price : 19.99,
    image : "/merchandise/hat.png",
    sizes : [ "S", "M", "L", "XL"],
    featured : true,
    bestseller : false,
    description : "Stylish hat for developers. Keep the sun out of your eyes while coding.",
    },
    {
    id : 4,
    name : "Developer Joggers",
    category : "pants",
    price : 39.99,
    image : "/merchandise/sweatpants.png",
    sizes : [ "S", "M", "L", "XL"],
    featured : false,
    bestseller : false,
    description : "Comfortable sweat pants for developers. Perfect for lounging around while coding.",
    },
    {
    id : 5,
    name : "Tech Beanie",
    category : "Beanie",
    price : 19.99,
    image : "/merchandise/beanie.png",
    sizes : [ "S", "M", "L", "XL"],
    featured : true,
    bestseller : false,
    description : "Warm beanie for developers. Keep your head warm while coding.",
    },
    
]

// alright were going to be filtering out categories
const categories = [ "All" , "Hoodie", "Shirt", "Hat", "Pants"]

export default function MerchandisePage() {
    const router = useRouter(); 
    const [activeCategory, setActiveCategory] = useState("All")
    const [hoveredItem, setHoveredItem] = useState(null)

    // Filter merchandise based on selected category - ill explain later if you want
    const filteredItems = activeCategory === "All"
    ? merchandiseItems
    : merchandiseItems.filter(item => item.category === activeCategory);
    
}