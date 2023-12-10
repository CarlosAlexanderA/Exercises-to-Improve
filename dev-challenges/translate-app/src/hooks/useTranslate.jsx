import { useMemo, useState } from 'react'
import { translateText } from '../services/translate'

export function useTranslate({ sourceLan, targetLan }) {
  const [showText, setShowText] = useState(null)
  const getTranslate = useMemo(() => {
    return async ({ text }) => {
      if (text === '' || text === null) return

      try {
        const newTranslate = await translateText({ text, sourceLan, targetLan })
        setShowText(newTranslate)
      } catch (e) {
        console.log(e)
      }
    }
  }, [sourceLan, targetLan])
  return { showText, getTranslate }
}
