import { createContext, useState } from 'react'

export const PagesContext = createContext()

export function PagesProvider ({ children }) {
  const [pages, setPages] = useState(0)

  return (
    <PagesContext.Provider value={{ pages, setPages }}>
      {children}
    </PagesContext.Provider>
  )
}
