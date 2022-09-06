
/* eslint-disable  @typescript-eslint/no-namespace */
import React, { useRef, DOMAttributes, ReactNode, useState } from "react";
import { ImperativeCounter } from './Counter';
import './Counter';

// auto-generate these types using: https://github.com/coryrylan/custom-element-types
type CustomEvents<K extends string> = { [key in K] : (event: CustomEvent) => void };
type CustomElement<T, K extends string = ''> = Partial<T & DOMAttributes<T> & { children: any;ref:any } & CustomEvents<`on${K}`>>;

declare global {
  namespace JSX {
    interface IntrinsicElements {
      ['i-counter']: CustomElement<ImperativeCounter, 'Click' | 'Hover'>;
    }
  }
}

function CounterInput(props:{ children:(value:number)=>ReactNode}) {
  const counterElement = useRef(null);

  const [value,setValue] = useState(0)

  const incrementCounters = () => {
    // Increment the imperative counter
    // counterElement?.current?.increment?.();
    setValue(v=>v+1)
  };

  const decrementCounters = () => {
    // Decrement the imperative counter
    // counterElement.current.decrement();
    setValue(v=>v-1)
  };

  return (
    <div>
      <div>
        <h5>Imperative Counter</h5>
        <i-counter ref={counterElement}>
          {props.children(value)}
        </i-counter>
      </div>
      <button onClick={incrementCounters} className="btn btn-primary">
        Increment
      </button>
      <button onClick={decrementCounters} className="btn btn-primary">
        Decrement
      </button>
    </div>
  );
}

export default CounterInput;
