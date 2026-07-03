import React from 'react'
import ReactDOM from 'react-dom/client'
import { Theme } from '@radix-ui/themes'
import '@radix-ui/themes/styles.css'
import App from './App.jsx'
import './styles/global.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Theme
      appearance="dark"
      accentColor="brown"
      grayColor="sand"
      radius="large"
      hasBackground={false}
    >
      <App />
    </Theme>
  </React.StrictMode>,
)
