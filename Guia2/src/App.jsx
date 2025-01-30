import { useState, useEffect} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { db } from './data/db'
import { Guitar } from './components/Guitar'

function App() {

  function initialCart(){
    const localStorageCart=localStorage.getItem('cart')
    return localStorageCart? JSON.parse(localStorageCart):[]
  }

  const [data, setData]=useState(db)
  //carrito
  const [cart, setCart]= useState(initialCart)

  useEffect(()=>{
    localStorage.setItem('cart', JSON.stringify(cart))
  },[cart])
  //use efect se ejecuta cuando se cambie la variable de estado, efectos secundarios
  //recibe dos parametros y una funcion flecha de lo que debe pasar


  function addToCart(guitar){
    const itemIndex=cart.findIndex((item)=>guitar.id===item.id)
    console.log(itemIndex);
    if(itemIndex===-1){//ese articulo aun no existe en el carrito
      guitar.quantity=1;
      setCart([...cart,guitar]) //a lo que esta en cart le agregamos guitarra
    }
    else{ //si la guitarra ya se habia agregado al carrito
      const updatedCart=[...cart] //creo una copia de la variable de estado
      updatedCart[itemIndex].quantity++;
      setCart(updatedCart);
      
    }
    
  }

  //funcion para agregar +
  function increaseQuantity(id) {
    setCart(prevCart => 
      prevCart.map(item => 
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  }

  //funcion para disminuir la cantidad de productos -
  function decreaseQuantity(id) {
    setCart(cart =>
      cart
        .map(item =>
          item.id === id && item.quantity > 1
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
    );
  }

  //funcion para eliminar producto del carrito
  function removeProduct(id) {
    setCart(cart => cart.filter(item => item.id !== id));
  }

  //funcion para vaciar carrito
  function clearCart() {
    setCart([]);
  }



  function calculateTotal(){
    /*let total=0
    for (const guitar of cart) {
      total+=guitar.price * guitar.quantity;
    } */

    let total= cart.reduce((total, item)=>total+item.price*item.quantity,0)
    return total;
  }

 

  return (
    <>

      <Header cart={cart} total={calculateTotal()} increaseQuantity={increaseQuantity} 
      decreaseQuantity={decreaseQuantity} removeProduct={removeProduct} clearCart={clearCart}/>
      <main className="container-xl mt-5">
        <h2 className="text-center">Nuestra Colección</h2>

        <div className="row mt-5">
          {data.map((guitar)=>(
            <Guitar guitar={guitar} key={guitar.id} addToCart={addToCart}/>
          ))}
          
          
            
          
        </div>
      </main> 
      <Footer/>
    </>
  )
}

export default App
