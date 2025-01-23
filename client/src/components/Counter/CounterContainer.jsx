import React, { useState } from "react"
import Counter from "./Counter"

//smart component cause it contains logic
const CounterContainer = () => {
  const [count, setCount] = useState(0)

  const increment = () => setCount((prev) => prev + 1)
  const decrement = () => setCount((prev) => prev - 1)
  const reset = () => setCount(0)

  return (
    <div className="">
      <Counter
        count={count}
        onIncrement={increment}
        onDecrement={decrement}
        onReset={reset}
      />
    </div>

  )
}

export default CounterContainer
