let new_dt = 0
let distance = 0
basic.showString("Ping")
basic.pause(500)
mbit_小車類.RGB_Car_Big(255, 0, 0)
music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
mbit_小車類.RGB_Car_Big(0, 255, 0)
music.play(music.tonePlayable(330, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
mbit_小車類.RGB_Car_Big(0, 0, 255)
music.play(music.tonePlayable(392, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
basic.pause(2000)
mbit_小車類.RGB_Car_Big(0, 0, 0)
basic.forever(function () {
    new_dt = mbit_小車類.Ultrasonic_Car()
    if (distance == new_dt) {
        mbit_小車類.RGB_Car_Big(255, 0, 0)
        basic.pause(500)
        mbit_小車類.RGB_Car_Big(0, 0, 255)
        basic.pause(500)
    } else {
        mbit_小車類.RGB_Car_Big(0, 0, 0)
        basic.showString("" + (new_dt))
        distance = new_dt
        basic.pause(100)
    }
})
