import { useLocation, useNavigate } from 'react-router'

function Product() {
  const { state } = useLocation()
  const navigate = useNavigate()
  const product = state?.product

  return (

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* Gallery */}
        <div className="bg-white rounded-[40px] p-12 lg:p-20 border border-gray-100 shadow-xl shadow-gray-100/50 flex items-center justify-center min-h-[500px]">
          <img
            src={product.image}
            alt={product.title}
            className="max-h-[500px] object-contain hover:scale-105 transition-transform duration-700"
          />
        </div>

        {/* Details */}
        <div className="flex flex-col pt-4">
          <span className="text-sm font-black uppercase tracking-[0.2em] text-blue-600 mb-6 bg-blue-50 px-4 py-1.5 rounded-full w-fit">
            {product.category}
          </span>
          <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight mb-8">
            {product.title}
          </h1>

          <div className="flex items-center gap-6 mb-10">
            <span className="text-4xl font-black text-gray-900">${product.price}</span>
            <div className="h-8 w-px bg-gray-200"></div>
            <div className="flex items-center">
            </div>
          </div>

          <p className="text-lg text-gray-600 leading-relaxed mb-12 border-l-4 border-blue-500 pl-6 bg-gray-50 py-4 rounded-r-2xl">
            {product.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button className="flex-1 bg-gray-900 text-white h-16 rounded-2xl font-bold text-lg hover:bg-blue-600 hover:scale-[1.02] shadow-xl shadow-gray-200 transition-all active:scale-95">
              Add to Bag
            </button>
            <button className="h-16 w-16 flex items-center justify-center rounded-2xl border-2 border-gray-100 hover:border-gray-200 transition-all group">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-gray-400 group-hover:text-red-500 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </button>
          </div>
        </div>
      </div>

  )
}

export default Product