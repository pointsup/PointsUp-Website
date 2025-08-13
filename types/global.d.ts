declare global {
  interface Window {
    gtag: (
      command: 'config' | 'event' | 'set',
      targetId: string,
      config?: {
        [key: string]: any
      }
    ) => void
  }
}

export {}
