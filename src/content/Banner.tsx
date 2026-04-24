import {useState} from "react";

type BannerProps = {
  height: number
  animationMs: number
}

export const Banner = ({ height, animationMs }: BannerProps) => {
  const [isOpen, setIsOpen] = useState(true)
  const [isClosing, setIsClosing] = useState(false)

  const handleClose = () => {
    setIsClosing(true)
    window.setTimeout(() => {
      setIsOpen(false)
    }, animationMs)
  }

  if (!isOpen) return null

  return (
    <>
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: `${height}px`,
          backgroundColor: 'whitesmoke',
          color: '#333',
          textAlign: 'center',
          lineHeight: `${height}px`,
          fontWeight: 'bold',
          zIndex: 9999,
          animation: isClosing
            ? `slideUp ${animationMs/2}ms ease-in forwards`
            : `slideDown ${animationMs}ms ease-out forwards`,
        }}
      >
        Hi, there! 👋

        <button
          type="button"
          onClick={handleClose}
          aria-label="バナーを閉じる"
          style={{
            position: 'absolute',
            right: '24px',
            top: '50%',
            transform: 'translateY(-50%)',
            border: 'none',
            background: 'transparent',
            color: '#333',
            fontSize: '20px',
            cursor: 'pointer',
            padding: 0,
            lineHeight: 1,
          }}
        >×</button>
      </div>

      <div
        style={{
          width: '100%',
          height: 0,
          animation: isClosing
            ? `pushUp ${animationMs/2}ms ease-in forwards`
            : `pushDown ${animationMs}ms ease-out forwards`,
        }}
      />

      <style>{`
        @keyframes slideDown {
          from {
            transform: translateY(-100%);
          }
          to {
            transform: translateY(0);
          }
        }

        @keyframes slideUp {
          from {
            transform: translateY(0);
          }
          to {
            transform: translateY(-100%);
          }
        }

        @keyframes pushDown {
          from {
            height: 0;
          }
          to {
            height: ${height}px;
          }
        }

        @keyframes pushUp {
          from {
            height: ${height}px;
          }
          to {
            height: 0;
          }
        }
      `}</style>
    </>
  )
}