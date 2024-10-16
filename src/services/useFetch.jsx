import { useEffect, useState } from "react"

import {
  FormatUserData,
  FormatPerfData,
  FormatAverageSessionData,
  FormatActivityData,
} from "./data"

function useFetch(path, userId) {
  const [fetchedData, setData] = useState({})
  const [isError, setIsError] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  let url

  if (import.meta.env.VITE_DATA_IS_MOCKED === "true") {
    url = `${import.meta.env.VITE_BASE_URL_MOCKED}${userId}/`
    if (path === "user") url += "user.json"
    if (path === "userActivity") url += "activity.json"
    if (path === "userAverageSessions") url += "average-sessions.json"
    if (path === "userPerformance") url += "performance.json"
  } else {
    url = `${import.meta.env.VITE_BASE_URL}${userId}/`
    if (path === "userActivity") url += "activity"
    if (path === "userAverageSessions") url += "average-sessions"
    if (path === "userPerformance") url += "performance"
  }

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch(url)
        const data = await res.json()

        if (path === "user" || !path) {
          const formattedData = new FormatUserData(data.data).getUserData()
          setData(formattedData)
        } else if (path === "userPerformance") {
          const formattedData = new FormatPerfData(data.data).getPerfData()
          setData(formattedData)
        } else if (path === "userAverageSessions") {
          const formattedData = new FormatAverageSessionData(
            data.data
          ).getAverageSessionData()
          setData(formattedData)
        } else if (path === "userActivity") {
          const formattedData = new FormatActivityData(
            data.data
          ).getActivityData()
          setData(formattedData)
        } else {
          setData(data.data)
        }
      } catch (error) {
        setIsError(true)
        console.log("🚀 ~getData error:", { error })
      } finally {
        setIsLoading(false)
      }
    }
    getData()
  }, [url, path])

  return { fetchedData, isError, isLoading }
}

// 3 fonctions user perf et activité

// + promise all => envoie les données qui sont bonnes si les autres ne sont pas la elle envoie que ce qu'il ya
// promize.race => renvoie le premier qui repond


export default useFetch
