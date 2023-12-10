import { useEffect, useState } from 'react'
import './App.css'
import { CardTranslate } from './components/CardTranslate'
import { LanguajeSolid } from './icons'
import { useTranslate } from './hooks/useTranslate'

function App() {
  const [text, setText] = useState('')
  const [entryLanguage, setEntryLanguage] = useState('')
  const [targetLanguage, setTargetLanguage] = useState('')
  const { showText, getTranslate } = useTranslate({
    sourceLan: entryLanguage,
    targetLan: targetLanguage,
  })

  const handleSubmit = event => {
    event.preventDefault()
    const formData = new FormData(event.target)
    const newText = formData.get('text')
    setText(newText)
  }
  useEffect(() => {
    getTranslate({ text }) // Aquí verás el valor actualizado de 'text'
  }, [getTranslate, text])

  const updateTargetLan = e => {
    setTargetLanguage(e.target.value)
  }
  const updateEntryLan = e => {
    setEntryLanguage(e.target.value)
  }
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
            updateLanguaje={updateEntryLan}
            text={'text'}
          />
          <CardTranslate
            isResponse={false}
            showText={showText}
            updateLanguaje={updateTargetLan}
          />
        </section>
      </main>
    </>
  )
}

export default App
