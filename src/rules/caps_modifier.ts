import {
  layer,
  map,
  mapDoubleTap,
  toInputSource,
  toKey,
  withModifier
} from "karabiner.ts"
import { hammerspoonEvent } from "../utils"
// caps_lock 这才只一层，还能继续加修饰键的，比如 caps + shift，只能说 karabiner 是真牛逼，这个 API 设计得也牛逼。
export default layer("caps_lock", "caps modifier mode")
  .configKey(
    v =>
      // vim
      v.toIfAlone([
        toKey("escape"),
        toInputSource({
          input_source_id: "com.apple.keylayout.ABC"
        })
      ]),
    true
  )
  .manipulators([
    // 可选按键，叠加效果，否则不触发。
    withModifier("optionalAny")([
      // Vim 方向键
      map("k").to("up_arrow"),
      map("j").to("down_arrow"),
      map("h").to("left_arrow"),
      map("l").to("right_arrow"),
      map(";").to("home"),
      map("'").to("end")
    ]),

    // 声音和亮度
    map("up_arrow").to("volume_increment"),
    map("down_arrow").to("volume_decrement"),
    map("left_arrow").to("apple_top_case_display_brightness_decrement"),
    map("right_arrow").to("apple_display_brightness_increment"),

    // 最近下载的文件
    map("n").to$(
      `open -a "QSpace Pro" ~/Downloads/"$(ls -t ~/Downloads | head -n 1)"`
    ),
    map("n", "shift").to$(
      `open ~/Downloads/"$(ls -t ~/Downloads | head -n 1)"`
    ),

    map("r").to(hammerspoonEvent("reload")),

    // Bob 翻译 OCR
    map("a").to("a", "Hyper"),
    map("s").to("s", "Hyper"),
    map("d").to("d", "Hyper"),
    map("f").to("f", "Hyper"),

    // PicGo 图床
    mapDoubleTap("u")
      .to(hammerspoonEvent("switch", { app: "com.molunerfinn.picgo" }))
      .singleTap(toKey("u", "Hyper")),

    map("return_or_enter").toApp("Warp"),
    // Menubar X flomo
    map("x").to("x", "Hyper"),

    map("c").to("c", "Hyper"),
    // Menubar X github
    map("v").to("v", "Hyper"),

    // Reminders MenuBar
    map("z").to("z", "Hyper"),

    // Screen Studio
    mapDoubleTap("print_screen")
      .to(hammerspoonEvent("switch", { app: "com.timpler.screenstudio" }))
      .singleTap(toKey("print_screen", "Hyper")),
    // Shotter 截图
    map("o").to("o", "Hyper"),
    map("p").to("p", "Hyper"),
    map("[").to("[", "Hyper"),
    map("]").to("]", "Hyper")
  ])
