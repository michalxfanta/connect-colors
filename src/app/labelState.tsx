'use client'
import styled from 'styled-components'

type Props = {
  backgroundColor: string
  borderColor: string
  stateText: string
  invert: boolean
}

const Label = styled.div<{ $backgroundColor: string; $borderColor: string; }>`
  background-color: ${(props) => props.$backgroundColor};
  border-left-color: ${(props) => props.$borderColor};
`

const State = styled.span<{ $invert: boolean }>`
  color: ${(props) => props.$invert ? 'white' : 'black'};
`

export default function LabelState(props: Props) {
  return (
    <Label className={`state`} $backgroundColor={props.backgroundColor} $borderColor={props.borderColor}>
      <span>
        <State $invert={props.invert}>{props.stateText}</State>
      </span>
    </Label>
  )
}
