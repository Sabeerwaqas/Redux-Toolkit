import React from 'react'
import "./counter.css"
import {useSelector, useDispatch} from "react-redux";
import { increment,decrement } from './counterSlice';

const Counter = () => {
    const count = useSelector((state) => state.counter.count);
    const dispatch = useDispatch();
  return (
    <>
        <div className='counter-parent'>
            <p className='number'>{count}</p>
            <button className='button btn-one' onClick={() => dispatch(increment())}>+</button>
            <button className='button btn-two' onClick={() => dispatch(decrement())}>-</button>
        </div>
    </>
  )
}
 
export default Counter