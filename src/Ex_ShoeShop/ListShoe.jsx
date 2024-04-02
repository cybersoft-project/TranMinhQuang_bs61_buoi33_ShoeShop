import React from 'react'
import ShoeItem from './ShoeItem'
const ListShoe = ({listShoe, addShoeCart, openModal}) => {
  console.log('listShoe', listShoe);
  
  return (
    <div  className="list_shoe grid grid-cols-3 gap-5" >
    {
        listShoe.map((shoe, index) => {
            return (
                // mang giao dien ca item doi giay dua vao ben trong component shoeItem va quan
               <ShoeItem shoe={shoe} key={index} addShoeCart={addShoeCart} openModal={openModal}></ShoeItem>
                    
            );
        })
    }
    </div>
  )
}

export default ListShoe