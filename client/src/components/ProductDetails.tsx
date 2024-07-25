import { formatCurrency } from "../helpers"
import { Product } from "../types"

type ProductDetailsProp = {
    product: Product
}

export default function ProductDetails({product} : ProductDetailsProp) {
    const isAvailable = product.availability
  return (
    <tr className="border-b ">
        <td className="p-3 text-lg text-gray-800">
            {product.name}
        </td>
        <td className="p-3 text-lg text-gray-800">
            {formatCurrency(product.price)}
        </td>
        <td className="p-3 text-lg text-gray-800">
            {isAvailable ? 'Available' : 'Not available'}
        </td>
        <td className="p-3 text-lg text-gray-800 ">
        
        </td>
    </tr> 
  )
}
