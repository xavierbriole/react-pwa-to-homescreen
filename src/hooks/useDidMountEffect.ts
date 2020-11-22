import * as React from 'react'

export default (effect: React.EffectCallback, deps?: React.DependencyList) => {
  const didMount = React.useRef(false)

  React.useEffect(() => {
    if (didMount.current) effect()
    else didMount.current = true
  }, deps)
}
