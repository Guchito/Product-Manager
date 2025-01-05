import { ActionFunctionArgs, Link, useLoaderData } from "react-router-dom"
import { getProducts, updateProductAvailability } from "../services/ProductService"
import ProductDetails from "../components/ProductDetails";
import { Product } from "../types";

export async function loader() {
  const products = await getProducts()
  
  return products

}

export async function action({request} : ActionFunctionArgs) {
  const data = Object.fromEntries(await request.formData())
  await updateProductAvailability(+data.id)
  return {}
}

export default function Products() {

  const data = useLoaderData() as Product[]
  

  return (
    <>
      <div className="flex justify-between">
          <h2 className="text-4xl font-black text-slate-500">Products</h2>
          <Link
              to={"products/new"}
              className="rounded-md bg-indigo-600 p-3 text-sm font-bold text-white shadow-sm hover:bg-indigo-500"
          >
              Add product
          </Link>
      </div>

      <div className="p-2">
      <table className="w-full mt-5 table-fixed">
        <tbody>
          {data.map(product => (
              <ProductDetails
                  key={product.id}
                  product={product}
              />
          ))}
        </tbody>
  </table>
</div>

    </>
  )
}
