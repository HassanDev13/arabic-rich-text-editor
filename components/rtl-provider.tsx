"use client"

import * as React from "react"

interface RTLProviderProps {
  children: React.ReactNode
}

export function RTLProvider({ children }: RTLProviderProps) {
  React.useEffect(() => {
    document.documentElement.dir = "rtl"
    return () => {
      document.documentElement.dir = "rtl"
    }
  }, [])

  return <>{children}</>
}

