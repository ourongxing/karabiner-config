import { map, rule, to$, toKey } from "karabiner.ts"

const DOUBAO = "com.bytedance.inputmethod.doubaoime.pinyin"
const WETYPE = "com.tencent.inputmethod.wetype.pinyin"
const ABC = "com.apple.keylayout.ABC"

const IM_SELECT = "/opt/homebrew/bin/im-select"

const toggleWetypeAbc = `/bin/bash -c 'IM=${IM_SELECT};[ ! -x "$IM" ]&&exit 0;CUR=$("$IM" 2>/dev/null);[ "$CUR" = "${WETYPE}" ]&&"$IM" '${ABC}'||"$IM" '${WETYPE}''`
const toggleDoubao = `/bin/bash -c 'IM=${IM_SELECT};[ ! -x "$IM" ]&&exit 0;CUR=$("$IM" 2>/dev/null);[ "$CUR" = "${DOUBAO}" ]&&{ PREV=$(cat /tmp/kb_prev_ime 2>/dev/null);[ -n "$PREV" ]&&"$IM" "$PREV";}||{ "$IM" > /tmp/kb_prev_ime;"$IM" '${DOUBAO}';}'`

export default rule("input source").manipulators([
  map("right_shift")
    .toIfAlone(to$(toggleDoubao)),
  map("left_shift").to("left_shift").toIfAlone([to$(toggleWetypeAbc)])
])