import { ValidationComposite } from './validation-composite'
import { MissingParamsError } from '../../errors'
import { Validation } from './validation'

describe('Validation Composite', () => {
  test('should return an error if any validation fails ', () => {
    class ValidationStub implements Validation {
      validate (input: any): Error {
        return new MissingParamsError('field')
      }
    }
    const validationStub = new ValidationStub()
    const sut = new ValidationComposite([validationStub])
    const error = sut.validate({ field: 'any_value' })
    expect(error).toEqual(new MissingParamsError('field'))
  })
})
