import Color from 'color'

export function getColorSchemaConstants(inverse: boolean) {
  return {
    baseColor: 0,
    backgroundColor: inverse ? 0.90 : 0.45,
    progressColor: inverse ? 0.80 : 0.35,
    backgroundStateColor: inverse ? 0.70 : 0.25,
    hoverColor: inverse ? 0.60 : 0.15,
    borderStateColor: inverse ? 0 : 0,
  }
}

export function getColorSchema(baseColor: string, inverse: boolean) {
  const constants = getColorSchemaConstants(inverse)

  const color: Color = Color(baseColor)

  const backgroundColor: Color = inverse ? color.darken(constants.backgroundColor) : color.lighten(constants.backgroundColor)
  const progressColor: Color = inverse ? color.darken(constants.progressColor) : color.lighten(constants.progressColor)
  const backgroundStateColor: Color = inverse ? color.darken(constants.backgroundStateColor) : color.lighten(constants.backgroundStateColor)
  const hoverColor: Color = inverse ? color.darken(constants.hoverColor) : color.lighten(constants.hoverColor)
  const borderStateColor: Color = inverse ? color.darken(constants.borderStateColor) : color.lighten(constants.borderStateColor)

  return {
    baseColor: color.hex(),
    backgroundColor: backgroundColor.hex(),
    progressColor: progressColor.hex(),
    backgroundStateColor: backgroundStateColor.hex(),
    hoverColor: hoverColor.hex(),
    borderStateColor: borderStateColor.hex(),
  }
}
