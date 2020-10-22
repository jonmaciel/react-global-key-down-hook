# react-global-key-down-hook

A simple package to bind keys on components.

---

## Setup

`yarn add react-global-key-down-hook`

OR

`npm install --save react-global-key-down-hook`

---

## Example

```javascript
import React from 'react'
import useGlobalKeyDown from 'react-global-key-down-hook'

const App = () => {
  const [hidden, setHidden] = useState(false)

  useGlobalKeyDown(() => {
    setHidden(true)
  }, ['Esc', 'Escape'])

  return <div>{hidden && <div> Press ESC to hide</div>}</div>
}

export default App
```

or just using one key:

```javascript
import React from 'react'
import useGlobalKeyDown from 'react-global-key-down-hook'

const App = () => {
  const [hidden, setHidden] = useState(false)

  useGlobalKeyDown(() => {
    setHidden(true)
  }, 'Enter')

  return <div>{hidden && <div> Press Enter to hide</div>}</div>
}

export default App
```

### Params

```javascript
  useGlobalKeyDown(
    callBack: (pressedKey: string) => any,
    key: string | string[],
    disabled?: boolean
  )
```
