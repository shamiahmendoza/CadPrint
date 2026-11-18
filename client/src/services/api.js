const API_URL = import.meta.env.VITE_API_URL || ''

export async function checkApiHealth() {
  const response = await fetch(`${API_URL}/api/health`)

  if (!response.ok) {
    throw new Error('Unable to connect to CADPRINT API')
  }

  return response.json()
}
