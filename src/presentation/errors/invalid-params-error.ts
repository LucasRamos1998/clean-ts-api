export class InvalidParamsError extends Error {
  constructor (paramName: String) {
    super(`Invalid Param: ${paramName}`)
    this.name = 'InvalidParamsError'
  }
}
