
function debounce(func: () => void, timeout = 300) {
  let timer: any
  return (...args: any) => {
    if (!timer) {
      // @ts-ignore
      func.apply(this, args)
    }
    clearTimeout(timer)
    timer = setTimeout(() => {
      timer = undefined
    }, timeout)
  }
}

function loadScript(src: string, position: HTMLElement | null, id: string) {
  if (!position) return

  const script = document.createElement('script')
  script.setAttribute('async', '')
  script.setAttribute('id', id)
  script.src = src
  position.appendChild(script)
}

const autocompleteService = { current: null }


export {
  debounce,
  loadScript,
  autocompleteService,
}
