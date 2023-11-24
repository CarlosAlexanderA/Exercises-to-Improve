import { createRoot } from 'react-dom/client'
import { App } from './src/App'
import { SearchProvider } from './src/context/search'

const root = createRoot(document.getElementById('app'))
root.render(
  <SearchProvider>
    <App />
  </SearchProvider>
)
