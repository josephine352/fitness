input.onPinTouchEvent(TouchPin.P1, input.buttonEventDown(), function () {
    basic.setLedColor(0x00ff00)
})
input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    null.showImage(0, 400)
    basic.setLedColor(0x007fff)
})
input.onButtonEvent(Button.AB, input.buttonEventClick(), function () {
    basic.setLedColor(0xff0000)
})
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    basic.setLedColor(0xffff00)
})
input.onPinTouchEvent(TouchPin.P2, input.buttonEventDown(), function () {
    basic.setLedColor(0xff0080)
})
