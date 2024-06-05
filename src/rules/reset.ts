import { map, rule } from "karabiner.ts"

export default rule("reset").manipulators([
  map("q", "⌘").toNone(),
  map("h", "⌘").toNone(),
  map("scroll_lock").toNone(),
  map("pause").toNone(),
  map("caps_lock", "left_shift").toNone(),
  map("caps_lock", "left_command").toNone(),
  map("caps_lock", "left_option").toNone(),
  map("caps_lock", "left_control").toNone()
])
