export interface iTheme {
  colors: {
    grey : string[],
    primary : string[]
  },
  radius : string
}

export const theme : iTheme = {
  colors: {
    grey: ["#333333", "#828282", "#BDBDBD", "#E0E0E0", "#F5F5F5"],
    primary: ["#27AE60", "#21A759"]
  },
  radius: "8px"
}