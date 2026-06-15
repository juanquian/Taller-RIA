export function useSessionSearch() {
  const KEY = 'searchHistory'

  const saveSearch = (query) => {
    if (typeof window === 'undefined') return

    let history = JSON.parse(sessionStorage.getItem(KEY) || '[]')
    history = history.filter(item => item !== query)
    history.unshift(query)
    history = history.slice(0, 5)
    sessionStorage.setItem(KEY, JSON.stringify(history))
  }

  const getSearchHistory = () => {
    if (typeof window === 'undefined') return []

    return JSON.parse(sessionStorage.getItem(KEY) || '[]')
  }

  return {
    saveSearch,
    getSearchHistory
  }
}