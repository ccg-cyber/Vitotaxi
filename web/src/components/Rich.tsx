import { Fragment } from 'react'

/* Renders "Plain *gold italic*" copy: text between asterisks becomes a gold <em>. */
export function Rich({ text }: { text: string }) {
  return (
    <>
      {text.split(/(\*[^*]+\*)/g).filter(Boolean).map((part, i) =>
        part.startsWith('*') ? <em key={i} className="g">{part.slice(1, -1)}</em> : <Fragment key={i}>{part}</Fragment>,
      )}
    </>
  )
}
