import { useMemo, useState } from 'react'
import { translateText } from '../services/translate'

export function useTranslate() {
  const [showText, setShowText] = useState(null)
  const getTranslate = useMemo(() => {
    return async ({ text }) => {
      if (text === '' || text === null) return

      try {
        const newTranslate = await translateText({ text })
        setShowText(newTranslate)
      } catch (e) {
        console.log(e)
      }
    }
  }, [])
  return { showText, getTranslate }
}
