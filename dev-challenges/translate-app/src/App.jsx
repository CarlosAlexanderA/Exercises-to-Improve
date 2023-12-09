import { useEffect, useState } from 'react'
import './App.css'
import { CardTranslate } from './components/CardTranslate'
import { LanguajeSolid } from './icons'
import { useTranslate } from './hooks/useTranslate'

function App() {
  const { showText, getTranslate } = useTranslate()
  const [text, setText] = useState('')

  const handleSubmit = event => {
    event.preventDefault()
    const formData = new FormData(event.target)
    const newText = formData.get('text')
    setText(newText)
  }
  useEffect(() => {
    console.log(text)
    getTranslate({ text }) // Aquí verás el valor actualizado de 'text'
  }, [getTranslate, text])

  return (
    <>
      <header>
        <div className="logo">
          <LanguajeSolid color="white" />
        </div>
        <h3>Translate.io</h3>
      </header>
      <main>
        <section className="hero">
          <CardTranslate
            isResponse={true}
            submitFunc={handleSubmit}
            text={'text'}
          />
          <CardTranslate isResponse={false} showText={showText} />
        </section>
      </main>
    </>
  )
}

export default App
