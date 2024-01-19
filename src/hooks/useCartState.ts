import { useRecoilState } from 'recoil';
import { cartState } from '../atoms/cart';

const useCartState = (productId: string) => {
  const [cartList, setCartList] = useRecoilState(cartState);

  const currentQuantity =
    cartList.find((item) => item.id === productId)?.quantity || 0;

  const increaseQuantity = () => {
    setCartList((prevCartList) => {
      const existingItem = prevCartList.find(
        (product) => product.id === productId,
      );

      if (existingItem) {
        return prevCartList.map((product) =>
          product.id === productId
            ? { ...product, quantity: product.quantity + 1 }
            : product,
        );
      } else {
        return [...prevCartList, { id: productId, quantity: 1 }];
      }
    });
  };

  const decreaseQuantity = () => {
    setCartList((prevCartList) => {
      const existingItem = prevCartList.find(
        (product) => product.id === productId,
      );

      if (existingItem) {
        return prevCartList.map((product) =>
          product.id === productId
            ? { ...product, quantity: product.quantity - 1 }
            : product,
        );
      } else {
        return [...prevCartList, { id: productId, quantity: 1 }];
      }
    });
  };

  return { currentQuantity, increaseQuantity, decreaseQuantity };
};

export default useCartState;
