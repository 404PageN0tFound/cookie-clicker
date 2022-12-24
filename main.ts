input.onButtonPressed(Button.A, function () {
    clicks += 1
})
let clicks = 0
basic.forever(function () {
    basic.showString("" + (clicks))
})
