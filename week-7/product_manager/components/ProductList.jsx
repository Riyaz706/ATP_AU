import { useState } from "react"
import { useEffect } from "react"
import { useNavigate } from "react-router"

function ProductList() {
  let [product, setProduct] = useState([])
  let [error, setError] = useState(null)
  let [loading, setLoading] = useState(true)
  let [searchTerm, setSearchTerm] = useState("")
  const navigate = useNavigate()

  const gotoProduct = (p) => {
    //navigate to product page with full product data
    navigate('/product-details', { state: { product: p } })
  }

  const filteredProducts = product.filter(p =>
    p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    p.category.toLowerCase().includes(searchTerm.toLowerCase())
  )

  useEffect(() => {
    async function getProducts() {
      try {
        let res = await fetch('https://fakestoreapi.com/products')
        if (res.status === 200) {
          //extract json data from response
          let products = await res.json()
          setProduct(products)
          //update state with products
        } else {
          console.log("Something went wrong")
        }
      } catch (error) {
        setError(error.message)
      } finally {
        setLoading(false)
      }
    }
    getProducts()
  }, []);

  if (loading === true) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
      </div>
    )
  }

  if (error !== null) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[400px] p-8 text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Something went wrong</h2>
        <p className="text-gray-600">{error}</p>
      </div>
    )
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Search and Header Section */}
      <div className="flex flex-col gap-10 mb-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-gray-100 pb-10">
          <div>
            <h1 className="text-5xl font-black text-gray-900 tracking-tight mb-4">Products</h1>
          </div>
          <div className="px-6 py-3 bg-blue-50 text-blue-700 rounded-2xl font-black text-sm border border-blue-100 shadow-sm whitespace-nowrap">
            ?? {filteredProducts.length} {filteredProducts.length === 1 ? 'Product' : 'Products'} Found
          </div>
        </div>

        {/* Search Bar */}
        <div className="relative max-w-3xl group">
          <div className="absolute inset-y-0 left-0 pl-6 flex items-center pointer-events-none">
            <svg className="h-6 w-6 text-gray-400 group-focus-within:text-blue-600 transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <input
            type="text"
            placeholder="Search"
            className="block w-full pl-16 pr-14 py-6 bg-white border-2 border-gray-50 rounded-[32px] focus:outline-none focus:ring-8 focus:ring-blue-50 focus:border-blue-500 transition-all text-gray-900 text-xl shadow-2xl shadow-gray-200/40 placeholder:text-gray-400 font-semibold"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          {searchTerm && (
            <button
              onClick={() => setSearchTerm("")}
              className="absolute inset-y-0 right-0 pr-6 flex items-center text-gray-300 hover:text-gray-500 transition-colors duration-300"
            >
              <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          )}
        </div>
      </div>

      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
          {filteredProducts.map((p) => {
            return (
              <div
                key={p.id}
                className="group flex flex-col bg-white rounded-[40px] border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-700 overflow-hidden relative"
              >
                {/* Image Container */}
                <div
                  className="relative h-80 w-full p-10 bg-gray-50/50 flex items-center justify-center overflow-hidden cursor-pointer"
                  onClick={() => gotoProduct(p)}
                >
                  <img
                    src={p.image}
                    alt={p.title}
                    className="max-h-full max-w-full object-contain group-hover:scale-110 transition-transform duration-1000 ease-out"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/3 transition-colors duration-700"></div>
                </div>

                {/* Content */}
                <div className="p-8 flex flex-col flex-grow">
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-600 mb-4 bg-blue-50 px-3 py-1.5 rounded-full w-fit">
                    {p.category || 'Curated'}
                  </span>
                  <h2 className="text-xl font-extrabold text-gray-900 mb-4 leading-snug line-clamp-2 min-h-14 group-hover:text-blue-600 transition-colors duration-300">
                    {p.title}
                  </h2>
                  <div className="mt-auto pt-6 flex items-center justify-between border-t border-gray-50">
                    <span className="text-2xl font-black text-gray-900">${p.price}</span>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        gotoProduct(p);
                      }}
                      className="bg-gray-900 text-white px-5 py-2.5 rounded-xl font-bold text-sm hover:bg-blue-600 transition-all duration-300"
                    >
                      Details
                    </button>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-32 px-10 text-center bg-gray-50/50 rounded-[56px] border border-dashed border-gray-200">
          <div className="text-7xl mb-8 animate-bounce">🔍</div>
          <h3 className="text-3xl font-black text-gray-900 mb-4 tracking-tight">No results found</h3>
          <p className="text-gray-500 max-w-lg text-lg font-medium leading-relaxed">
            We couldn't find any products matching "{searchTerm}". <br className="hidden md:block" />
            Check for typos or try searching a broader category like "electronics" or "clothing".
          </p>
          <button
            onClick={() => setSearchTerm("")}
            className="mt-10 px-8 py-4 bg-white text-blue-600 font-black rounded-2xl border-2 border-blue-100 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all duration-300 shadow-xl shadow-blue-100/20"
          >
            Clear Search
          </button>
        </div>
      )}
    </div>
  )
}

export default ProductList