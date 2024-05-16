import styles from './App.module.css'
import Form from './components/Form/Form'
import Record from './components/RecordForm/RecordForm'
function App() {
  return (
    <>
    <div className={styles.app}>
      <Form/>
      <Record/>
    </div>
    </>
  )
}

export default App
