import { Validation } from './validation'
import { MissingParamsError } from '../../errors'

export class RequiredFieldValidation implements Validation {
  private readonly fieldName: string

  constructor (fieldName: string) {
    this.fieldName = fieldName
  }

  validate (input: any): Error {
    if (!this.fieldName) {
      return new MissingParamsError(this.fieldName)
    }
  }
}
