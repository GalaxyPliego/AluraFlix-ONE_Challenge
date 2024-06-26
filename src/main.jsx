import React from 'react'
import ReactDOM from 'react-dom/client'
import { AluraFlixApp } from './AluraFlixApp'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { AppTheme } from './theme/AppTheme'
import { Provider } from 'react-redux'
import { store } from '@store'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <AppTheme>
          <AluraFlixApp />
        </AppTheme>
      </BrowserRouter>
    </Provider>
  // </React.StrictMode>
)