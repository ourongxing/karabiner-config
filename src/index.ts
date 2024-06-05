import {
  ifApp,
  map,
  mapDoubleTap,
  rule,
  toKey,
  withCondition,
  writeToProfile
} from "karabiner.ts"
import capsModifier from "./rules/caps_modifier"
import reset from "./rules/reset"
import { hammerspoonEvent } from "./utils"
import * as functionKeys from "./rules/function_keys"

const rules = [
  reset,
  capsModifier,
  functionKeys.modifier,
  functionKeys.normal,
  rule("other").manipulators([
    // 飞书 录屏
    mapDoubleTap("print_screen")
      .to(hammerspoonEvent("switch", { app: "com.electron.lark" }))
      .singleTap(toKey("i", "Hyper")),
    // 切换输入法
    map("left_shift").to("left_shift").toIfAlone("spacebar", "Hyper"),
    map("tab", "<⌘").to("tab", "<⌥"),
    map("w", "<⌘⇧").to("w", "<⌥⇧"),
    map("q", "<⌘⇧").to("q", "<⌥⇧")
  ])
]

writeToProfile("Default", rules)
