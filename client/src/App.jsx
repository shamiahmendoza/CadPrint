
import { useEffect, useState } from 'react'
import { checkApiHealth } from './services/api'

function App() {
  const [status, setStatus] = useState('Connecting to backend...')

  useEffect(() => {
    async function testConnection() {
      try {
        const data = await checkApiHealth()
        setStatus(data.message)
      } catch (error) {
        setStatus(error.message)
      }
    }

    testConnection()
  }, [])

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-blue-600">
          CADPRINT
        </h1>

        <p className="mt-4 text-gray-700">
          {status}
        </p>
      </div>
    </div>
  )
}

export default App
