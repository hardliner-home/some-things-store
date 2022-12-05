const get = (target: any, fieldName: string, defaultValue: any) => {
  const depthArray = fieldName.split('.')

  let interObject = target
  for (let i = 0; depthArray.length; i++) {
    if (depthArray[i] in interObject) {
      interObject = interObject[depthArray[i]]
    } else {
      interObject = defaultValue
      return
    }
  }

  return interObject
}

const titleize = (str: string) => {
  return str.substr(0,1).toUpperCase() + str.substr(1).toLowerCase()
}

const toSnakeCase = (str: string) => str.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`)

const diff = (pure: any, dirty: any) => {
  let result = {}

  for (const key in pure) {
    // @ts-ignore
    if (pure[key] !== dirty[key]) result[key] = dirty[key]
  }

  return result
}

export {
  get,
  titleize,
  toSnakeCase,
  diff
}