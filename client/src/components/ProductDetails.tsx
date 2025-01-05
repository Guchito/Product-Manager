import { useNavigate , Form, ActionFunctionArgs, redirect, useFetcher } from "react-router-dom"
import { formatCurrency } from "../helpers"
import { Product } from "../types"
import { deleteProduct } from "../services/ProductService"

type ProductDetailsProp = {
    product: Product
}

export async function action({params}:ActionFunctionArgs) {
    if(params.id !== undefined){
        await deleteProduct(+params.id)
        return redirect('/')
    }

}


export default function ProductDetails({product} : ProductDetailsProp) {
    const fetcher = useFetcher()
    const navigate = useNavigate()

    const isAvailable = product.availability
  return (
    <tr className="border-b-4 shadow-lg flex flex-col m-auto max-w-[400px] sm:max-w-[568px] sm:grid sm:grid-cols-2 sm:gap-3 md:max-w-[900px] md:grid lg:grid-cols-4">
        <td className="p-3 text-lg text-gray-800 text-center">
            {product.name}
        </td>
        <td className="p-3 text-lg text-gray-800 text-center">
            {formatCurrency(product.price)}
        </td>
        <td className="p-3 text-lg text-gray-800">
            <fetcher.Form method="POST">
                <button
                    type="submit"
                    name="id"
                    value={product.id}
                    className={`${isAvailable ? 'text-black' : 'text-red-600' } rounded-lg p-2 text-xs uppercase font-bold w-full border border-black-100 hover:cursor-pointer`}
                >
                    {isAvailable ? 'Available' : 'Not available'}
                </button>
            </fetcher.Form>
        </td>
        <td className="p-3 text-lg text-gray-800 ">
            <div className="flex gap-2 items-center">
                <button
                    onClick={() => navigate(`/products/${product.id}/edit`)}
                    className="bg-indigo-600 text-white rounded-lg w-full p-2 uppercase font-bold text-xs text-center"
                >Edit</button>
                
                <Form 
                    className="w-full"
                    method="post"
                    action= {`products/${product.id}/delete`} //same as router
                    onSubmit={ (e ) => {
                        if(!confirm('Do you want to delete this product?')){
                            e.preventDefault()
                        }
                    }}
                >
                    <input 
                        type = 'submit'
                        value = 'Delete'
                        className="bg-red-600 text-white rounded-lg w-full p-2 uppercase font-bold text-xs text-center hover:cursor-pointer"
                    />
                </Form>
            </div>
        </td>
    </tr> 
  )
}
