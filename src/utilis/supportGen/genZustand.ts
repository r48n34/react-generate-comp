import { strToSmallAndBig } from "./bigSmallLetter";

export function genZustand( storeName: string = '', isTypescript: boolean = true): string{
    const [ bigLetterSliceName, lowLetterSliceName ] = strToSmallAndBig(storeName);

    let genText = isTypescript ? `import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

interface ${bigLetterSliceName}State {
  data: number
  increase: (by: number) => void
}

const use${bigLetterSliceName}Store = create<${bigLetterSliceName}State>()(
  devtools(
    persist(
      (set) => ({
        data: 0,
        increase: (by) => set((state) => ({ data: state.data + by })),
      }),
      { name: '${lowLetterSliceName}-storage' }
    )
  )
)
`
: `
import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

const use${bigLetterSliceName}Store = create()(
  devtools(
    persist(
      (set) => ({
        data: 0,
        increase: (by) => set((state) => ({ data: state.data + by })),
      }),
      { name: '${lowLetterSliceName}-storage' }
    )
  )
)
`
    return genText
}