import { map, rule, to$, toKey } from "karabiner.ts"

const DOUBAO = "com.bytedance.inputmethod.doubaoime.pinyin"
const WETYPE = "com.tencent.inputmethod.wetype.pinyin"
const ABC = "com.apple.keylayout.ABC"

const IM_SELECT = "/opt/homebrew/bin/im-select"

const toggleWetypeAbc = `/bin/bash -c 'IM=${IM_SELECT};[ ! -x "$IM" ]&&exit 0;CUR=$("$IM" 2>/dev/null);[ "$CUR" = "${WETYPE}" ]&&"$IM" '${ABC}'||"$IM" '${WETYPE}''`
const switchToDoubao = `/bin/bash -c 'IM=${IM_SELECT};[ ! -x "$IM" ]&&exit 0;"$IM" > /tmp/kb_prev_ime;"$IM" '${DOUBAO}''`
const restoreIme = `/bin/bash -c 'IM=${IM_SELECT};[ ! -x "$IM" ]&&exit 0;PREV=$(cat /tmp/kb_prev_ime);[ -n "$PREV" ]&&"$IM" "$PREV"'`

export default rule("input source").manipulators([
  map("right_shift")
    .toIfAlone(to$(switchToDoubao)),
  map("left_shift").to("left_shift").toIfAlone([to$(toggleWetypeAbc)])
])