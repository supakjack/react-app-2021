import Transaction from './components/Transaction'
import './components/app.css'
const Title = () => (
  <h1 style={{ color: 'red', textAlign: 'center' }}>
    แอพบัญชีรายรับ - รายจ่าย
  </h1>
)

function App() {
  return (
    <>
      <Title />
      <Transaction />
    </>
  )
}

export default App
