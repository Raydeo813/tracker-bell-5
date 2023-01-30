function UpdateScoreboard () {
    OLED.clear()
    OLED.writeStringNewLine("Player A" + PA)
    OLED.newLine()
    OLED.writeStringNewLine("Player B" + PB)
    OLED.newLine()
    OLED.writeStringNewLine("Ties" + Ties)
    OLED.newLine()
    OLED.writeStringNewLine("Rounds" + Rounds)
}
let Ties = 0
let Rounds = 0
let PB = 0
let PA = 0
OLED.init(128, 64)
OLED.writeStringNewLine("What's you favorite horror movie?")
PA = 0
PB = 0
Rounds = 0
Ties = 0
basic.pause(2000)
UpdateScoreboard()
