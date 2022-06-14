import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IBook, IBookCost } from "../common/types";
import { getBackgroundColor } from "../utils/bookColors";
import "./cartItem.css"

const CartItem = (props: {
    bookId: string,
    priceHandler: any,
    totalPrice: IBookCost
}) => {
    const [data, setData] = useState<IBook | null> (null)
    const [backgroundColor, setBackgroundColor] = useState("") 
    const [bookPrice, setBookPrice] = useState("")
    const [bookCount, setBookCount] = useState(1)
    const navigate = useNavigate ()

    useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(
        `https://api.itbook.store/1.0/books/${props.bookId}`
      );
      const resJson = await result.json();
      setData(resJson);
      const bookPrice = resJson.price.slice(1)
      setBookPrice(bookPrice)
    };

    fetchData();
    setBackgroundColor(getBackgroundColor());
  }, []);

  useEffect(() => {
      const bookPriceNum = +bookPrice
      props.priceHandler({
          ...props.totalPrice, [props.bookId]:bookPriceNum * bookCount
      })
  },[bookCount, bookPrice])

  const deleteBook = useCallback ((bookId:string) => {
      const cartBooks = localStorage.getItem("cartBooks")
      if (cartBooks && bookId) {
          const addedBooks = JSON.parse(cartBooks).filter((book:string) => book !== bookId)
          localStorage.setItem("cartBooks" , JSON.stringify([...addedBooks]))
      }
      navigate(0)
  }, [])

    const minusCount = useCallback(() => {
        if (bookCount === 1){
            return
        }
        const currentCount = bookCount -1
        setBookCount(currentCount)
    }, [bookCount])

    const plusCount = useCallback(() => {
        const currentCount = bookCount +1
        setBookCount(currentCount)
    }, [bookCount])

    return (
        <div className="cartItem-wrapper">
            <div className="cartItem-img" style={{backgroundColor:backgroundColor}}>
                <img src={data?.image} alt="" />
            </div>
            <div className="cartItem-info">
                <div className="cartItem-description">
                    <div className="cartItem-title">{data?.title}</div>
                    <div className="cartItem-authors">{data?.authors}</div>
                    <div className="book-count">
                        <div onClick={minusCount}>-</div>
                        <div>{bookCount}</div>
                        <div onClick={plusCount}>+</div>
                    </div>
                </div>
                <div className="cartItem-cost">{data?.price}</div>
                <div className="cartItem-basket" onClick={() => deleteBook(props.bookId)}></div>
            </div>
        </div>
    );
}

export default CartItem;