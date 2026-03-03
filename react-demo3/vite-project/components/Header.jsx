import { NavLink } from "react-router"

function Header() {
    return (
        <div className="flex justify-between px-10 items-center py-4 bg-black border-b border-gray-100 shadow-sm sticky top-0 z-50">
            <img width={50} className="rounded-full" src="https://img.freepik.com/free-vector/bird-colorful-gradient-design-vector_343694-2506.jpg?semt=ais_rp_progressive&w=740&q=80" alt="" />



            <ul className="flex justify-between gap-8 text-sm font-semibold m-0">
                <li><NavLink to="/" className={({ isActive }) => isActive ? "text-blue-600" : "text-white hover:text-blue-600 transition-colors"}>Home</NavLink></li>
                <li><NavLink to="/products" className={({ isActive }) => isActive ? "text-blue-600" : "text-white hover:text-blue-600 transition-colors"}>Products</NavLink></li>
                <li><NavLink to="/contact" className={({ isActive }) => isActive ? "text-blue-600" : "text-white hover:text-blue-600 transition-colors"}>Contact</NavLink></li>
            </ul>
        </div>
    )
}

export default Header