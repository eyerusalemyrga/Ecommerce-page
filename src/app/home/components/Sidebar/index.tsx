
"use client";
const categories = [
  "Woman's Fashion",
  "Men's Fashion",
  "Electronics",
  "Home & Lifestyle",
  "Medicine",
  "Sports & Outdoor",
  "Baby's & Toys",
  "Groceries & Pets",
  "Health & Beauty",
];

const Sidebar = () => {
  return (
    
      <ul className="space-y-4">
        {categories.map((cat) => (
          <li key={cat}>
            <a href="#" className="block px-6 py-2 text-gray-700 hover:bg-gray-100 hover:text-black rounded transition">
              {cat}
            </a>
          </li>
        ))}
      </ul>
   
  );
};

export default Sidebar;
