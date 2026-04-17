import { rule, map, mapDoubleTap, toKey, withCondition, ifApp } from "karabiner.ts"
import { hammerspoonEvent } from "../utils"
export default rule("other").manipulators([
  // 飞书 录屏
  mapDoubleTap("print_screen")
    .to(hammerspoonEvent("switch", { app: "com.electron.lark" }))
    .singleTap(toKey("i", "Hyper")),
  map("tab", "<⌘").to("tab", "<⌥"),
  map("caps_lock", "<⌘").to("escape", "<⌘"),
  map("w", "<⌥").to("w", "<⌘"),
  map("w", "<⌘⇧").to("w", "<⌥⇧"),
  map("q", "<⌘⇧").to("q", "<⌥⇧"),
  withCondition(ifApp("QReader.MarginStudy.easy"))([
    map("delete_forward").to("delete_or_backspace", "<⌘")
  ])
])