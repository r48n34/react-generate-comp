"use strict";Object.defineProperty(exports,"__esModule",{value:true});Object.defineProperty(exports,"genZustand",{enumerable:true,get:()=>genZustand});const _bigSmallLetter=require("./bigSmallLetter");function genZustand(storeName="",isTypescript=true){const[bigLetterSliceName,lowLetterSliceName]=(0,_bigSmallLetter.strToSmallAndBig)(storeName);let genText=isTypescript?`import { create } from 'zustand'
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
`:`
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
`;return genText}