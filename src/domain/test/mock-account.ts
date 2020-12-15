import { AddAccount } from '../useCases/account/add-account'
import { Authentication } from '../useCases/account/authentication'

export const mockAddAccountParams = (): AddAccount.Params => ({
  name: 'any_name',
  email: 'any_email@mail.com',
  password: 'any_password'
})

export const mockAccountId = (): string => 'any_id'

export const mockAuthentication = (): Authentication.Params => ({
  email: 'any_email@mail.com',
  password: 'any_password'
})
