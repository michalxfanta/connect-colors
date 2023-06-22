'use client'
import styled from 'styled-components'
import Color from 'color'
import { IStateBaseColor } from './type/state'

import { Colors } from './colors'
import Row from './row'
import { IConnectState } from './type/state'

const Td = styled.td<{ $bgColor: string }>`
  background-color: ${(props) => props.$bgColor};
  text-align: center;
  width: 100px;
  height: 30px;
`

export default function Home() {
  const keys = Object.keys(IConnectState)

  return (
    <main className="flex flex-row">
      <div className="flex-grow p-12">
        <h2>Light mode</h2>

        {Object.keys(IStateBaseColor).map((key) => (
          <>
            <h3 key={key}>{key}</h3>
            <Colors baseColor={IStateBaseColor[key as keyof typeof IStateBaseColor]} invert={false} />
            <Row stateText={key} baseColor={IStateBaseColor[key as keyof typeof IStateBaseColor]} invert={false} />
          </>
        ))}
      </div>
      <div className="flex-grow p-12 bg-[#1C1E21] dark">
        <h2>Dark mode</h2>

        {Object.keys(IStateBaseColor).map((key) => (
          <>
            <h3 key={key}>{key}</h3>
            <Colors baseColor={IStateBaseColor[key as keyof typeof IStateBaseColor]} invert={true} />
            <Row stateText={key} baseColor={IStateBaseColor[key as keyof typeof IStateBaseColor]} invert={true} />
          </>
        ))}
      </div>
    </main>
  )
}
