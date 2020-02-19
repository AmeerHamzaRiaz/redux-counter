import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

function Counter() {
  const count = useSelector(state => state.count);
  const dispatch = useDispatch();

    return (
      <div>
        <h2 className="center">Counter</h2>
        <div className="center">
          <button onClick={() => dispatch({ type: "DECREMENT"})} className="success">-</button>
          <span>{count}</span>
          <button onClick={() => dispatch({ type: "INCREMENT"})} className="reject">+</button>
        </div>
      </div>
    )
  
}



export default Counter;