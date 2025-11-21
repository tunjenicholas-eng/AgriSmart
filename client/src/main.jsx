import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

console.log("[v0] Initializing React app...")

const rootElement = document.getElementById('root')
console.log("[v0] Root element:", rootElement)

if (!rootElement) {
  console.error("[v0] ERROR: Root element not found!")
  document.body.innerHTML = '<h1 style="color: red; padding: 20px;">ERROR: React root element not found</h1>'
} else {
  try {
    ReactDOM.createRoot(rootElement).render(
      <React.StrictMode>
        <App />
      </React.StrictMode>,
    )
    console.log("[v0] App mounted successfully")
  } catch (error) {
    console.error("[v0] ERROR rendering app:", error)
    document.body.innerHTML = `<h1 style="color: red; padding: 20px;">ERROR: ${error.message}</h1><p style="padding: 20px; color: red;">${error.stack}</p>`
  }
}
