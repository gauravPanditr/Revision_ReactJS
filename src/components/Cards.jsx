function ProductCard({ product }) {
  return (
    <div className="w-72 bg-white rounded-xl shadow-lg hover:shadow-2xl transition duration-300 hover:-translate-y-1">
      
      <div className="h-56 bg-gray-100 flex items-center justify-center p-4">
        <img
          src={product.image}
          alt={product.title}
          className="h-full object-contain"
        />
      </div>

      <div className="p-4 space-y-2">
        <h3 className="text-sm font-semibold line-clamp-2">
          {product.title}
        </h3>

        <p className="text-xs text-gray-500 capitalize">
          {product.category}
        </p>

        <div className="text-sm">
          ⭐ {product.rating.rate}
          <span className="text-gray-500"> ({product.rating.count})</span>
        </div>

        <div className="flex items-center justify-between pt-2">
          <span className="text-lg font-bold text-gray-800">
            ₹ {product.price}
          </span>

          <button className="bg-orange-500 hover:bg-orange-600 text-white text-xs px-3 py-2 rounded-lg">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;