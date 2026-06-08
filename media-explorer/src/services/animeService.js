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
export async function getAnimeById(id) {
  const response = await fetch(
    `${BASE_URL}/anime/${id}`
  )

  if (!response.ok)
    throw new Error('Error al obtener anime')

  const { data } = await response.json()

  return {
    id: data.mal_id,
    title: data.title,
    image: data.images.jpg.image_url,
    synopsis: data.synopsis,
    score: data.score,
    episodes: data.episodes,
    status: data.status,
    genres: data.genres,
    trailer: data.trailer?.embed_url ?? null
  }
}
export async function getTopAnime(page = 1) {
  const response = await fetch(
    `${BASE_URL}/top/anime?page=${page}&limit=10`
  )

  const { data } = await response.json()

  return data.map(item => ({
    id: item.mal_id,
    title: item.title,
    image: item.images?.jpg?.image_url ?? null,
    type: item.type ?? '—',
    score: item.score ?? null,
  }))
}