import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { Toaster } from 'react-hot-toast'
import { store } from './store/store.ts'
import { APIProvider } from '@vis.gl/react-google-maps';
import App from './App.tsx'
import './index.css'

const googleMapsApiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <APIProvider apiKey={googleMapsApiKey} libraries={['marker']}>
      <App />
      <Toaster position="top-right" />
    </APIProvider>
  </Provider>
)
