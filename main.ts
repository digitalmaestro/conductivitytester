let current = 0
basic.forever(function () {
    current = pins.analogReadPin(AnalogPin.P0)
    basic.showNumber(current)
    basic.pause(500)
    basic.clearScreen()
    if (current > 418) {
        basic.showIcon(IconNames.Yes)
    } else {
        basic.showIcon(IconNames.No)
    }
})
