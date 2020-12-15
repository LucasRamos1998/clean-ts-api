import { AddAccount } from '@/domain/useCases/account/add-account'

export interface AddAccountRepository {
  add (accountData: AddAccountRepository.Params): Promise<AddAccountRepository.result>
}

export namespace AddAccountRepository {
  export type Params = AddAccount.Params
  export type result = boolean
}
