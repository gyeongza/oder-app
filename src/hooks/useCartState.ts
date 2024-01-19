import { useRecoilState } from 'recoil';
import { cartState } from '../atoms/cart';
import { useEffect, useState } from 'react';

const useCartState = (productId: string) => {
  const initialQuantity = 0;
  const [cartList, setCartList] = useRecoilState(cartState);
  const [quantity, setQuantity] = useState(initialQuantity);

  useEffect(() => {
    const productInCart = cartList.find((item) => item.id === productId);

    setQuantity(productInCart?.quantity || 0);
  }, [cartList, productId]);

  const updateCartList = (newQuantity: number) => {
    setCartList((prevCartList) => {
      const existingItemIndex = prevCartList.findIndex(
        (product) => product.id === productId,
      );

      if (existingItemIndex >= 0) {
        const newCartList = [...prevCartList];
        newCartList[existingItemIndex] = {
          ...newCartList[existingItemIndex],
          quantity: newQuantity,
        };

        return newCartList;
      } else {
        return [...prevCartList, { id: productId, quantity: newQuantity }];
      }
    });
  };

  const increaseQuantity = () => {
    if (quantity >= 999) return;

    const newQuantity = quantity + 1;

    setQuantity(newQuantity);
    updateCartList(newQuantity);
  };

  const decreaseQuantity = () => {
    if (quantity <= 0) return;

    const newQuantity = quantity - 1;

    setQuantity(newQuantity);
    updateCartList(newQuantity);
  };

  const handleQuantityChange = (inputValue: string) => {
    const inputNumber = parseInt(inputValue, 10);

    if (isNaN(inputNumber) || inputNumber < 0 || inputNumber > 999) return;

    setQuantity(inputNumber);
    updateCartList(inputNumber);
  };

  return {
    quantity,
    increaseQuantity,
    decreaseQuantity,
    handleQuantityChange,
  };
};

export default useCartState;
