import { useEffect, useRef } from 'react'

export function useReveal() {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
    )

    // Observe all .reveal and .reveal-left inside ref
    const targets = el.querySelectorAll('.reveal, .reveal-left')
    targets.forEach((t) => observer.observe(t))

    // Also observe self if it has the class
    if (el.classList.contains('reveal') || el.classList.contains('reveal-left')) {
      observer.observe(el)
    }

    return () => observer.disconnect()
  }, [])

  return ref
}
