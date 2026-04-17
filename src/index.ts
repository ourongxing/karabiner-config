import { writeToProfile } from "karabiner.ts"
import capsModifier from "./rules/caps_modifier"
import reset from "./rules/reset"
import inputSource from "./rules/input_source"
import * as functionKeys from "./rules/function_keys"
import other from "./rules/other"


writeToProfile("Default", [
  reset,
  inputSource,
  capsModifier,
  functionKeys.modifier,
  functionKeys.normal,
  other,
])
