export const useAssetUrl = (path: string) => {
  const runtimeConfig = useRuntimeConfig()
  const base = (runtimeConfig.app?.baseURL || '/').replace(/^\/+|\/+$/g, '')
  const normalizedPath = path.startsWith('/') ? path : `/${path}`

  if (!base) {
    return normalizedPath
  }

  const basePath = `/${base}`
  if (normalizedPath === basePath || normalizedPath.startsWith(`${basePath}/`)) {
    return normalizedPath
  }

  return `${basePath}${normalizedPath}`
}
