import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// 1. consoleにテキストを出力
console.log('Hello Popup')

const root = document.createElement('div')
root.id = 'crx-popup-root'
document.body.appendChild(root)

createRoot(root).render(
  <StrictMode>
    {/* 2. ポップアップ画面にテキストを表示*/}
    <h1>Hello Popup!</h1>
  </StrictMode>
)
