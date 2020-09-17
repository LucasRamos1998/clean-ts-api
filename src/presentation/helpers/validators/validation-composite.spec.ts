import { ValidationComposite } from './validation-composite'
import { MissingParamsError } from '../../errors'
import { Validation } from './validation'

const makeValidation = (): Validation => {
  class ValidationStub implements Validation {
    validate (input: any): Error {
      return null
    }
  }
  return new ValidationStub()
}

interface SutTypes {
  sut: ValidationComposite
  validationStub: Validation
}

const makeSut = (): SutTypes => {
  const validationStub = makeValidation()
  const sut = new ValidationComposite([validationStub])
  return {
    sut,
    validationStub
  }
}

describe('Validation Composite', () => {
  test('should return an error if any validation fails ', () => {
    const { sut, validationStub } = makeSut()
    jest.spyOn(validationStub, 'validate').mockReturnValue(new MissingParamsError('field'))
    const error = sut.validate({ field: 'any_value' })
    expect(error).toEqual(new MissingParamsError('field'))
  })
})