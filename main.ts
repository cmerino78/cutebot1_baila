basic.showIcon(IconNames.Happy)
basic.forever(function () {
    cuteBot.motors(50, 50)
    basic.pause(200)
    cuteBot.motors(50, 20)
    basic.pause(1000)
    cuteBot.motors(50, 50)
    basic.pause(200)
    cuteBot.motors(20, 50)
    basic.pause(1000)
})
basic.forever(function () {
    cuteBot.colorLight(cuteBot.RGBLights.ALL, 0xff0000)
})
