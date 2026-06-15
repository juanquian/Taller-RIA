export function useAnimeViews() {
  const getViews = (id) => {
    if (typeof window === 'undefined') return 0

    const value = localStorage.getItem(`animeViews:${id}`)
    const num = Number(value)

    return Number.isFinite(num) ? num : 0
  }

  const incrementViews = (id) => {
    if (typeof window === 'undefined') return 0

    const key = `animeViews:${id}`

    const current = getViews(id)
    const newCount = current + 1

    localStorage.setItem(key, String(newCount))

    return newCount
  }

  return {
    getViews,
    incrementViews
  }
}