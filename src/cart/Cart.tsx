import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { IBookCost } from "../common/types";
import "./cart.css";
import CartItem from "./CartItem";

const Cart = () => {
  const [data, setData] = useState<string[] | null>(null);
  const [totalPrice, setTotalPrice] = useState<IBookCost>({});
  const [totalVat, setTotalVat] = useState(11.99);

  useEffect(() => {
    const cartBooks = localStorage.getItem("cartBooks");

    if (cartBooks) {
      const cartBooksData = JSON.parse(cartBooks);
      setData(cartBooksData);
    }
  }, []);
  
  const memoTotalPrice = useMemo (() =>{
      const currentPrice = Object.values(totalPrice).reduce((sum, cur) => sum+cur, 0)
      return parseFloat(`${currentPrice}`).toFixed(2)
  }, [totalPrice])

  const memoTotalPriceSale = useMemo (() => {
      const currentPrice = Object.values(totalPrice).reduce(
        (sum, cur) => sum + cur,
        0
      );
      const currentPriceSale = currentPrice-totalVat
      return parseFloat(`${currentPriceSale}`).toFixed(2);
  }, [totalPrice])

  if (!data || data.length === 0) {
    return (
      <>
        <Link to="/">
          <div className="common-buttonBack"></div>
        </Link>
        <p className="cart-title">Your cart</p>
        <p>You don`t have books</p>
      </>
    );
  }


  return (
    <div className="cart-wrapper">
      <>
        <Link to="/">
          <div className="common-buttonBack"></div>
        </Link>
        <p className="cart-title">Your cart</p>
        {data?.map((bookId) => (
          <CartItem
            bookId={bookId}
            priceHandler={setTotalPrice}
            totalPrice={totalPrice}
          />
        ))}
        <div className="total-wrapper">
          <div className="total-info">
            <div className="total-sum">
              <p>Sum total</p>
              <p>$ {memoTotalPrice}</p>
            </div>
            <div className="total-vat">
              <p>Sum VAT</p>
              <p>$ {totalVat}</p>
            </div>
            <div className="total-total">
              <p>Sum TOTAL</p>
              <p>$ {memoTotalPriceSale}</p>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default Cart;
