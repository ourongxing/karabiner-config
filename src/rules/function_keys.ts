import {
  FunctionKeyCode,
  ifApp,
  ifDevice,
  layer,
  map,
  rule,
  withCondition,
  withMapper
} from "karabiner.ts"

const mediaFN = [
  map("f1").to("display_brightness_decrement"),
  map("f2").to("display_brightness_increment"),
  map("f3").to("launchpad"),
  // raycast
  map("f4").to("spacebar", "left_option"),
  map("f5").toConsumerKey("dictation"),
  // 切换勿扰模式
  map("f6").to("=", "Hyper"),
  map("f7").to("rewind"),
  map("f8").to("play_or_pause"),
  map("f9").to("fastforward"),
  map("f10").to("mute"),
  map("f11").to("volume_decrement"),
  map("f12").to("volume_increment")
]

const fnKeys: FunctionKeyCode[] = [
  "f1",
  "f2",
  "f3",
  "f4",
  "f5",
  "f6",
  "f7",
  "f8",
  "f9",
  "f10",
  "f11",
  "f12"
]

function ohmymn(v4?: boolean) {
  return withMapper(fnKeys)((key, i) =>
    i < 8
      ? map(key).to$(
          `open -g '${
            v4 ? "marginnote4app" : "marginnote3app"
          }://addon/ohmymn?type=card&shortcut=${i + 1}'`
        )
      : map(key).to$(
          `open -g '${
            v4 ? "marginnote4app" : "marginnote3app"
          }://addon/ohmymn?type=text&shortcut=${i - 7}'`
        )
  )
}

const standFN = [
  withCondition(ifApp("QReader.MarginStudyMac"))([ohmymn()]),
  withCondition(ifApp("QReader.MarginStudy.easy"))([ohmymn(true)]),
  withMapper(fnKeys)(key => map(key).to(key))
]

export const normal = rule("function key").manipulators([
  withCondition(ifDevice({ is_built_in_keyboard: false }))(standFN),
  withCondition(ifDevice({ is_built_in_keyboard: true }))(mediaFN)
])

export const modifier = layer(
  "escape",
  "escape as fnKey modifier"
).manipulators([
  withCondition(ifDevice({ is_built_in_keyboard: false }))(mediaFN),
  withCondition(ifDevice({ is_built_in_keyboard: true }))(standFN)
])
