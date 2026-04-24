import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Banner } from './Banner'

// 1. consoleにテキストを出力
console.log('Hello Content')

const BANNER_HEIGHT = 60
const BANNER_DELAY_MS = 400

const removeFixedClassFromHeader = () => {
  const header = document.querySelector('header')
  if (!header) return false

  header.classList.remove('fixed')
  return true
}

const root = document.createElement('div')
root.id = 'crx-content-root'
document.body.prepend(root)

const renderBanner = () => {
  createRoot(root).render(
    <StrictMode>
      <Banner height={BANNER_HEIGHT} />
    </StrictMode>
  )
}

setTimeout(() => {
  renderBanner()
}, BANNER_DELAY_MS)

if (!removeFixedClassFromHeader()) {
  const observer = new MutationObserver(() => {
    if (removeFixedClassFromHeader()) {
      observer.disconnect()
    }
  })

  observer.observe(document.body, {
    childList: true,
    subtree: true,
  })
}