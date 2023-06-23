'use client'
import styled from 'styled-components'
import Image from 'next/image'
import LabelState from './labelState'
import Atrib from './atrib'
import mini from './printers/mini.svg'
import mk25 from './printers/mk25.svg'
import mk3 from './printers/mk3.svg'
import mk4 from './printers/mk4.svg'
import xl from './printers/xl.svg'

import { getColorSchema } from './type/colors'

type Props = {
  stateText: string
  baseColor: string
  invert: boolean
}

const Link = styled.a`
  margin-bottom: 2rem;
  display: block;
`

const Bg = styled.div<{ $bgColor: string }>`
  background-color: ${(props) => props.$bgColor};
`

const Progress = styled.div<{ $bgColor: string; $progressColor: string; $primaryColor: string; $hoverColor: string }>`
  padding: 10px 20px;
  background: ${(props) => `linear-gradient(to right, ${props.$progressColor} 40%, ${props.$bgColor} 0%)`};
  border-bottom-width: 3px;
  border-bottom-style: solid;
  border-image-slice: 1;
  border-image-source: ${(props) => `linear-gradient(to right, ${props.$primaryColor} 40%, ${props.$bgColor} 0%)`};

  &:hover {
    background: ${(props) => `linear-gradient(to right, ${props.$hoverColor} 40%, ${props.$bgColor} 0%)`};
  }
`

const printers = [
  { icon: mini, printer: 'Original Prusa MINI' },
  { icon: mk25, printer: 'Original Prusa i3 MK2.5' },
  { icon: mk3, printer: 'Original Prusa i3 MK3' },
  { icon: mk4, printer: 'Original Prusa MK4' },
  { icon: xl, printer: 'Original Prusa XL' },
]

export default function Row(props: Props) {
  const schema = getColorSchema(props.baseColor, props.invert)
  const index = Math.floor(Math.random() * printers.length)
  const printer = printers[index].printer
  const icon = printers[index].icon

  return (
    <Link href="#">
      <Bg className="flex flex-row row" $bgColor={schema.backgroundColor}>
        <div className="icon flex justify-center items-center">
          <Image src={icon} alt="Original Prusa MK4" />
        </div>
        <Progress
          className="details flex flex-col w-full"
          $bgColor={schema.backgroundColor}
          $progressColor={schema.progressColor}
          $primaryColor={schema.baseColor}
          $hoverColor={schema.hoverColor}
        >
          <h3>{printer}</h3>
          <div className="flex flex-row gap-10">
            <LabelState invert={props.invert} backgroundColor={schema.backgroundStateColor} borderColor={schema.baseColor} stateText={props.stateText} />
            <div className="flex flex-row gap-10">
              <Atrib name="Printing progress" value="60%" />
              <Atrib name="File" value="SBox_15h_PLA.gcode" />
              <Atrib name="Remaining time" value="1 d&nbsp;2 h&nbsp;41 m" />
            </div>
          </div>
        </Progress>
      </Bg>
    </Link>
  )
}
