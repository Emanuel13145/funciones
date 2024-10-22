let numero = 0
function luz_verde () {
    led.plot(2, 3)
    basic.pause(3000)
    basic.clearScreen()
}
function encender_led () {
    basic.clearScreen()
    led.plot(0, 0)
    led.plot(1, 1)
}
input.onButtonPressed(Button.A, function () {
    encender_led()
})
function mostrar_numero () {
    numero = randint(1, 10)
    basic.showNumber(numero)
    basic.pause(100)
    basic.clearScreen()
    basic.pause(100)
    basic.showIcon(IconNames.Yes)
}
function luz_roja () {
    led.plot(2, 1)
    basic.pause(3000)
    basic.clearScreen()
}
input.onButtonPressed(Button.B, function () {
    mostrar_numero()
})
function luz_amarilla () {
    led.plot(2, 2)
    basic.pause(1000)
    basic.clearScreen()
}
basic.forever(function () {
    luz_roja()
    luz_amarilla()
    luz_verde()
})
