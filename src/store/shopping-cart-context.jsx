import { createContext } from 'react';

export const CartContext = createContext({
    items: [],
    addItemToCart: () => {},
});
// createContext는 react compontent가 들어있는 객체이다.
// 숫자, 문자열, 객체나 배열 모든것을 기본값으로 전달할 수 있다.

