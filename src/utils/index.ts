import { to$ } from "karabiner.ts"

export function hammerspoonEvent(event: string, params?: Record<string, any>) {
  let url = `hammerspoon://${event}`
  if (params) {
    const query = new URLSearchParams(params).toString()
    url += `?${query}`
  }
  return to$(`open -g "${url}"`)
}
