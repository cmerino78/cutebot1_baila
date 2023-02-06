let Velocidad = 40
music.startMelody(music.builtInMelody(Melodies.Entertainer), MelodyOptions.Once)
basic.showLeds(`
    . . . # .
    # . # . #
    # . # . #
    # . # . #
    . # . . .
    `)
basic.forever(function () {
    if (cuteBot.tracking(cuteBot.TrackingState.L_R_line)) {
        cuteBot.motors(Velocidad, Velocidad)
        cuteBot.colorLight(cuteBot.RGBLights.ALL, 0x00ffff)
    }
    if (cuteBot.tracking(cuteBot.TrackingState.L_unline_R_line)) {
        cuteBot.colorLight(cuteBot.RGBLights.RGB_L, 0xffff00)
        cuteBot.motors(Velocidad, 0)
    }
    if (cuteBot.tracking(cuteBot.TrackingState.L_line_R_unline)) {
        cuteBot.colorLight(cuteBot.RGBLights.RGB_R, 0xffff00)
        cuteBot.motors(0, Velocidad)
    }
    if (cuteBot.tracking(cuteBot.TrackingState.L_R_unline)) {
        cuteBot.colorLight(cuteBot.RGBLights.ALL, 0xff0000)
        cuteBot.stopcar()
    }
})
