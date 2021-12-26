import {useState} from 'react'
import Questions from './Questions'
import data from './data'

const App = () => {
  const [questions,setQuestions] = useState(data)
  return(
    <main>
      <div className='container'>
        <h3>questions and answers about login</h3>
        <section className='info'>
          {questions.map((questions)=>(
            <Questions key={questions.id} {...questions} />
          ))}
        </section>
      </div>
    </main>
  )
}

export default App;
