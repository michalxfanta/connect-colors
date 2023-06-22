type Props = {
  name: string
  value: string
}

export default function Atrib(props: Props) {
  return (
    <div>
      <div className="atribName">{props.name}</div>
      <div className="atribValue">{props.value}</div>
    </div>
  )
}
