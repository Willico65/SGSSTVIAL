import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * Al cambiar de ruta: si hay un #hash, hace scroll hasta ese elemento
 * (usado por los enlaces "Ver detalle" de Inicio hacia /servicios#sst).
 * Si no hay hash, sube al tope de la página.
 */
export default function ScrollManager() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '')
      const el = document.getElementById(id)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' })
        return
      }
    }
    window.scrollTo({ top: 0 })
  }, [pathname, hash])

  return null
}
