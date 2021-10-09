let row = 0
let col = 0
basic.showIcon(IconNames.Ghost)
basic.forever(function () {
    if (input.soundLevel() > 128) {
        col = randint(0, 4)
        row = randint(0, 4)
    }
    if (led.point(col, row)) {
        led.unplot(col, row)
        led.plot(col + 1, row)
    }
})
