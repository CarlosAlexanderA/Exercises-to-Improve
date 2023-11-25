import { createRoot } from 'react-dom/client'
import { App } from './src/App'
import { SearchProvider } from './src/context/search'
import { PagesProvider } from './src/context/pages'

const root = createRoot(document.getElementById('app'))
root.render(
  <SearchProvider>
    <PagesProvider>
      <App />
    </PagesProvider>
  </SearchProvider>
)
