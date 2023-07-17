import React from "react"

export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  )
}

function Counter() {
  const [count, setCount] = React.useState(0)
  const [step, setStep] = React.useState(1)

  const today = new Date()
  const options = {
    weekday: "short",
    month: "short",
    day: "numeric",
    year: "numeric",
  }

  function formatDate(d) {
    return new Intl.DateTimeFormat("en-US", options).format(d).replace(",", " ")
  }

  function handlePlusStep() {
    setStep((prevStep) => prevStep + 1)
  }

  function handleMinusStep() {
    setStep((prevStep) => prevStep - 1)
  }

  function handlePlusCount() {
    setCount((prevCount) => prevCount + step)
  }

  function handleMinusCount() {
    setCount((prevCount) => prevCount - step)
  }

  function getNewDate(date, days) {
    const dateCopy = new Date(date)
    dateCopy.setDate(date.getDate() + days)
    return formatDate(dateCopy)
  }

  function displayNewDate(count, today) {
    if (count >= 1)
      return `${count} days from today is ${getNewDate(today, count)}`
    else return `${Math.abs(count)} days ago was ${getNewDate(today, count)}`
  }

  return (
    <div>
      <div>
        <button onClick={handleMinusStep}>-</button>
        <span>Step: {step}</span>
        <button onClick={handlePlusStep}>+</button>
      </div>
      <div>
        <button onClick={handleMinusCount}>-</button>
        <span>Count: {count}</span>
        <button onClick={handlePlusCount}>+</button>
      </div>
      <div>
        {count === 0 ? (
          <p>Today is {formatDate(today)}</p>
        ) : (
          <p>{displayNewDate(count, today)}</p>
        )}
      </div>
    </div>
  )
}
