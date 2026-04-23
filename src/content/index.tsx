import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// 1. consoleにテキストを出力
console.log('Hello Content')

const BANNER_HEIGHT = 60

const removeFixedClassFromHeader = () => {
  const header = document.querySelector('header')
  if (!header) return false

  header.classList.remove('fixed')
  return true
}

const root = document.createElement('div')
root.id = 'crx-content-root'
document.body.prepend(root)

createRoot(root).render(
  <StrictMode>
    <>
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: `${BANNER_HEIGHT}px`,
          backgroundColor: '#ffcc00',
          color: '#333',
          textAlign: 'center',
          lineHeight: `${BANNER_HEIGHT}px`,
          fontWeight: 'bold',
          zIndex: 9999,
          animation: 'slideDown 0.5s ease-out forwards',
        }}
      >
        ページ読み込み時に上から降りてくるバナー
      </div>

      {/* spacer */}
      <div
        style={{
          width: '100%',
          height: 0,
          animation: 'pushDown 0.5s ease-out forwards',
        }}
      />

      <style>{`
        @keyframes slideDown {
          0% {
            transform: translateY(-100%);
          }
          100% {
            transform: translateY(0);
          }
        }

        @keyframes pushDown {
          0% {
            height: 0;
          }
          100% {
            height: ${BANNER_HEIGHT}px;
          }
        }
      `}</style>
    </>
  </StrictMode>
)

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