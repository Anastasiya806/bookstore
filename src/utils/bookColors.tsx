const bookBackgroundColors = ["#D7E4FD", "#F4EEFD", "#FEE9E2", "#CAEFF0"];

export const getBackgroundColor = () => {
    const randomNumber = Math.floor(Math.random()* bookBackgroundColors.length)
    return bookBackgroundColors[randomNumber]
}