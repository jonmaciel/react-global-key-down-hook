import { useEffect } from 'react'

export default (
  callBack: (pressedKey: string) => any,
  key: string | string[],
  disabled?: boolean
) => {
  const handleKeyDown = ({ key: pressedKey }: KeyboardEvent) => {
    if (key instanceof Array) {
      if (!key.includes(pressedKey)) return
    } else {
      if (key !== pressedKey) return
    }

    callBack(pressedKey)
  }

  useEffect(() => {
    if (disabled) return
    document.addEventListener('keydown', handleKeyDown, false)
    return () => document.removeEventListener('keydown', handleKeyDown)
  })
}
