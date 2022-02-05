const config = {
  api: {
    BASE_URL: process.env.REACT_APP_API_BASE_URL || "http://localhost:8000",
    PATH_PREFIX: process.env.REACT_APP_API_PATH_PREFIX || "/api"
  }
}

export default config