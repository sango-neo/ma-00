'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'

const SCRIPT_SRC_BASE = 'https://app.termly.io'

export default function TermlyCMP({ autoBlock, masterConsentsOrigin, websiteUUID }) {
  const [shouldRender, setShouldRender] = useState(false)
  const scriptSrc = useMemo(() => {
    const src = new URL(SCRIPT_SRC_BASE)
    src.pathname = `/resource-blocker/${websiteUUID}`
    if (autoBlock) {
      src.searchParams.set('autoBlock', 'on')
    }
    if (masterConsentsOrigin) {
      src.searchParams.set('masterConsentsOrigin', masterConsentsOrigin)
    }
    return src.toString()
  }, [autoBlock, masterConsentsOrigin, websiteUUID])

  const isScriptAdded = useRef(false)

  useEffect(() => {
    // Add 5 second delay before rendering
    const timer = setTimeout(() => {
      setShouldRender(true)
    }, 5000)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (!shouldRender || isScriptAdded.current) return
    const script = document.createElement('script')
    script.src = scriptSrc
    document.head.appendChild(script)
    isScriptAdded.current = true
  }, [scriptSrc, shouldRender])

  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    if (!shouldRender) return
    window.Termly?.initialize()
  }, [pathname, searchParams, shouldRender])

  return null
}