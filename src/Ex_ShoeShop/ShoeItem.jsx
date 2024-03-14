import React from 'react'

const ShoeItem = ({shoe, addShoeCart, openModal}) => {
  return (
    <div className="border border-5 space-y-2 py-5">
                        <img src={shoe.image} />
                        <h2 className="text-2xl font-semibold">{shoe.name}</h2>
                        <p className="text-lg text-gray-500">Giá tiền: {shoe.price}</p>
                        <button onClick={()=>{addShoeCart(shoe); openModal()}} className="py-2 px-5 rounded-md bg-black text-white">
                            Add to cart
                        </button >
                    </div>

  )
}

export default ShoeItem