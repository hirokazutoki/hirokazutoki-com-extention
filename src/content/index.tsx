import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// 1. consoleにテキストを出力
console.log('Hello Content')

const root = document.createElement('div')
root.id = 'crx-content-root'
document.body.appendChild(root)

createRoot(root).render(
  <StrictMode>
    {/* 2. アクティブなタブコンテンツにテキストを表示 */}
    <h1 style={{position: 'fixed', left: 0, top: 0, color: "white"}}>
      Hello Content!
    </h1>
  </StrictMode>
)
