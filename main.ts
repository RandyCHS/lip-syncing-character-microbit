let mouth = 0
basic.showIcon(IconNames.Yes)
pins.servoWritePin(AnalogPin.P0, 0)
basic.pause(500)
basic.clearScreen()
basic.forever(function () {
    mouth = Math.map(input.soundLevel(), 0, 180, 0, 55)
    pins.servoWritePin(AnalogPin.P0, mouth)
})
