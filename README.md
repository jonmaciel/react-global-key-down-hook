# react-global-key-down

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
  }, 'Esc')

  return <div>{hidden && <div> Press ESC to hide</div>}</div>
}

export default App
```
