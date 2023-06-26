import Color from 'color'

export function getColorSchemaConstants(inverse: boolean) {
  return {
    baseColor: 0,
    backgroundColor: inverse ? 0.85 : 0.45,
    progressColor: inverse ? 0.7 : 0.35,
    backgroundStateColor: inverse ? 0.60 : 0.25,
    hoverColor: inverse ? 0.5 : 0.15,
    borderStateColor: inverse ? 0 : 0,
  }
}

export function getColorSchema(baseColor: string, inverse: boolean) {
  const constants = getColorSchemaConstants(inverse)

  const color: Color = Color(baseColor)

  const backgroundColor: Color = inverse ? color.darken(constants.backgroundColor).desaturate(0.75) : color.lighten(constants.backgroundColor).desaturate(0.25)
  const progressColor: Color = inverse ? color.darken(constants.progressColor).desaturate(0.75) : color.lighten(constants.progressColor).desaturate(0.25)
  const backgroundStateColor: Color = inverse
    ? color.darken(constants.backgroundStateColor).desaturate(0.75)
    : color.lighten(constants.backgroundStateColor).desaturate(0.25)
  const hoverColor: Color = inverse ? color.darken(constants.hoverColor).desaturate(0.75) : color.lighten(constants.hoverColor).desaturate(0.25)
  const borderStateColor: Color = inverse
    ? color.darken(constants.borderStateColor).desaturate(0.75)
    : color.lighten(constants.borderStateColor).desaturate(0.25)

  return {
    baseColor: color.hex(),
    backgroundColor: backgroundColor.hex(),
    progressColor: progressColor.hex(),
    backgroundStateColor: backgroundStateColor.hex(),
    hoverColor: hoverColor.hex(),
    borderStateColor: borderStateColor.hex(),
  }
}
