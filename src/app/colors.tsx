'use client'
import styled from 'styled-components'
import { getColorSchema, getColorSchemaConstants } from './type/colors'

type Props = {
  baseColor: string
  invert: boolean
}

const Table = styled.table`
  margin-bottom: 1rem;
`

const Th = styled.th<{ $invert: boolean }>`
  color: ${(props) => (props.$invert ? 'white' : 'black')};
  font-size: 0.8rem;
  padding: 4px 10px;
`

const Td = styled.td<{ $bgColor: string; $invert: boolean }>`
  background-color: ${(props) => props.$bgColor};
  text-align: left;
  width: 180px;
  height: 30px;
  color: ${(props) => (props.$invert ? 'white' : 'black')};
  font-size: 0.8rem;
  padding: 4px 10px;
`

export function Colors(props: Props) {
  const constants = getColorSchemaConstants(props.invert)
  const schema = getColorSchema(props.baseColor, props.invert)

  return (
    <Table>
      <tbody>
        <tr>
          <Th $invert={props.invert}>base</Th>
          <Th $invert={props.invert}>&nbsp;</Th>
          <Th $invert={props.invert}>border state</Th>
          <Th $invert={props.invert}>hover</Th>
          <Th $invert={props.invert}>background state</Th>
          <Th $invert={props.invert}>progress</Th>
          <Th $invert={props.invert}>background</Th>
        </tr>
        <tr>
          <Td $bgColor={schema.baseColor} $invert={props.invert}>
            {schema.baseColor}
          </Td>

          <td>&nbsp;</td>

          <Td $bgColor={schema.borderStateColor} $invert={props.invert}>
            {schema.borderStateColor} {props.invert ? ' darken ' : ' lighten '} {constants.borderStateColor}
          </Td>

          <Td $bgColor={schema.hoverColor} $invert={props.invert}>
            {schema.hoverColor} {props.invert ? ' darken ' : ' lighten '} {constants.hoverColor}
          </Td>

          <Td $bgColor={schema.backgroundStateColor} $invert={props.invert}>
            {schema.backgroundStateColor} {props.invert ? ' darken ' : ' lighten '} {constants.backgroundStateColor}
          </Td>

          <Td $bgColor={schema.progressColor} $invert={props.invert}>
            {schema.progressColor} {props.invert ? ' darken ' : ' lighten '} {constants.progressColor}
          </Td>

          <Td $bgColor={schema.backgroundColor} $invert={props.invert}>
            {schema.backgroundColor} {props.invert ? ' darken ' : ' lighten '} {constants.backgroundColor}
          </Td>
        </tr>
      </tbody>
    </Table>
  )
}
