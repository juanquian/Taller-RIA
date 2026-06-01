const BASE_URL = 'https://api.jikan.moe/v4'

export async function searchAnime(query) {
  const response = await fetch(`${BASE_URL}/anime?q=${encodeURIComponent(query)}&limit=20`)
  if (!response.ok) throw new Error('Error al conectar con la API')
  const data = await response.json()
  return data.data.map(item => ({
    id: item.mal_id,
    title: item.title,
    image: item.images?.jpg?.image_url ?? null,
    type: item.type ?? '—',
    score: item.score ?? null,
  }))
}
