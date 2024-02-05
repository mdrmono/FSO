import { useState } from 'react'


const StatisticLine = ({text, value}) => {
  return (
    <tr>
      <td>{text}</td>
      <td> {value}</td>
    </tr>
  )
}

const Statistics = ({good, bad, neutral}) => {
  if (good+bad+neutral == 0) {
    return (
      <div>
        <h1>statistics</h1>
        <div>No feedback given</div>
      </div>
    )
  }
  return ( 
    <>
      <h1>statistics</h1>
      <table>
        <tbody>
          <StatisticLine text = 'good' value = {good}/>
          <StatisticLine text = 'neutral' value = {neutral}/>
          <StatisticLine text = 'bad' value = {bad}/>
          <StatisticLine text = 'all' value = {good+neutral+bad}/>
          <StatisticLine text = 'average' value = {good+neutral+bad/3}/>
          <StatisticLine  text = {'positive'} value = {good/(good+neutral+bad)*100 + '%'}/>
        </tbody>
      </table>
    </>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  
  return (
    <>
      <h1>give feedback</h1>
      <button onClick={() => setGood(good + 1)}>good</button>
      <button onClick={() => setNeutral(neutral + 1)}>neutral</button>
      <button onClick={() => setBad(bad + 1)}>bad</button>
      <Statistics good = {good} neutral = {neutral} bad = {bad}/>
    </>
  )
}

export default App