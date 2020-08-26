export class MissingParamsError extends Error {
  constructor (paramName: String) {
    super(`Missing Param: ${paramName}`)
    this.name = 'MissingParamError'
  }
}
