import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { SettingsConsumer, SettingsProvider } from './contexts/settingsContext.tsx'

import ReactHotToast, { Toaster } from './layouts/Toaster.tsx'
import ThemeComponentProvider from './themes/ThemeProvider.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <SettingsProvider>
      <SettingsConsumer>
        {({ settings }) => {
          return (
            <ThemeComponentProvider settings={settings}>
              <App />
              <ReactHotToast>
                <Toaster position={settings.toastPosition} toastOptions={{ className: 'react-hot-toast' }} />
              </ReactHotToast>
            </ThemeComponentProvider>
          )
        }}
      </SettingsConsumer>
    </SettingsProvider>
  </React.StrictMode>
)
