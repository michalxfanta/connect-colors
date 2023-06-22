import Color from 'color'

function getTextColor(baseColor: Color) {
  const blackContrast = baseColor.contrast(Color('black'))
  const whiteContrast = baseColor.contrast(Color('white'))

  return blackContrast > whiteContrast ? 'black' : 'white'
}

export function getColorScheme(baseColor: string, inverse = false) {
  const color = Color(baseColor)
  const secondaryColor = inverse ? color.darken(0.55) : color.lighten(0.3)
  const lightBackground = inverse ? color.darken(0.45) : color.lighten(0.45)
  const progressBarColor = inverse ? color.darken(0.38) : color.lighten(0.38)
  const textColor = getTextColor(secondaryColor)

  return {
    primaryColor: color.hex(),
    secondaryColor: secondaryColor.hex(),
    lightBackground: lightBackground.hex(),
    progressBarColor: progressBarColor.hex(),
    textColor
  }
}
