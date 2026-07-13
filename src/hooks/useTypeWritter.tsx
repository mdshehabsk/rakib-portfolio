
import { useState, useEffect } from 'react'

export function useTypewriter(words: string[], speed = 100, pause = 1800) {
  const [text, setText] = useState('')
  const [wordIndex, setWordIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    if (words.length === 0) return

    const currentWord = words[wordIndex % words.length]
    const fullText = currentWord
    const isComplete = text === fullText
    const nextText = isDeleting
      ? fullText.slice(0, Math.max(0, text.length - 1))
      : fullText.slice(0, text.length + 1)

    const delay = !isDeleting && isComplete ? pause : isDeleting ? speed / 2 : speed

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (isComplete) {
          setIsDeleting(true)
        } else {
          setText(nextText)
        }
      } else {
        if (nextText === '') {
          setIsDeleting(false)
          setWordIndex((current) => current + 1)
        }
        setText(nextText)
      }
    }, delay)

    return () => clearTimeout(timeout)
  }, [words, wordIndex, isDeleting, text, speed, pause])

  return text
}
