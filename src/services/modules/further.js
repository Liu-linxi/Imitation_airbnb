import lxRequest from '..'

export function getFurtherRoomList(offset = 0, size = 20) {
  return lxRequest.get({
    url: "/entire/list",
    params: {
      offset,
      size
    }
  })
}