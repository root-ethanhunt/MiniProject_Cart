import React from 'react'

const CartItem =(props)=>{
        const {price,title,qty}= props.product;
        const {product,onDecreaseQuantity,onIncreaseQuantity,onDeleteProduct} = props

        return(
            <div className="cart-item">
                <div className="left-block">
                  <img style={styles.image} src={product.img}/>
                </div>
                <div className="right-block">
                    <div style={{fontSize:25}}>{title}</div>
                    <div style={{ color: '#777' }}>Rs {price}</div>
                    <div style={{ color:'#777' }}>Qty: {qty}</div>
                    <div className="cart-item-actions">
                        {/* {Buttons} */}
                        <img alt="increase" className="action-icons" src="https://www.flaticon.com/svg/static/icons/svg/1828/1828926.svg" 
                        onClick={() =>onIncreaseQuantity(product)}/>

                        <img alt="decrease" className="action-icons" src="https://www.flaticon.com/svg/static/icons/svg/1828/1828906.svg" 
                        onClick={()=>onDecreaseQuantity(product)}/>

                        <img alt="delete" className="action-icons" src="https://www.flaticon.com/svg/static/icons/svg/3096/3096673.svg"
                         onClick={()=>onDeleteProduct(product.id)}/>
                    </div>
                </div>
            </div>
        )
}


const styles = {
    image:{
        height:110,
        width:110,
        borderRadius: 4,
        background:"#ccc"
    }
}

export default CartItem;