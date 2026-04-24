import {useState} from "react";

type BannerProps = {
  height: number
}

export const Banner = ({ height }: BannerProps) => {
  const [isOpen, setIsOpen] = useState(true)

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
          animation: 'slideDown 0.5s ease-out forwards',
          overflow: 'hidden',
        }}
      >
        Hi, there! 👋

        <button
          type="button"
          onClick={() => setIsOpen(false)}
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
            height: ${height}px;
          }
        }
      `}</style>
    </>
  )
}