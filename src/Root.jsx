import { Theme } from '@radix-ui/themes'

import App from './App.jsx'

/* Shared by the browser entry (main.jsx) and the build-time renderer
   (entry-server.jsx), so both produce exactly the same tree. Each entry wraps
   this in its own router. */
export default function Root() {
  return (
    <Theme
      appearance="dark"
      accentColor="brown"
      grayColor="sand"
      radius="large"
      hasBackground={false}
    >
      <App />
    </Theme>
  )
}
