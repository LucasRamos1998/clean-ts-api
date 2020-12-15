import { AddAccount } from '@/domain/useCases/account/add-account'
import { AccountModel } from '@/domain/models/account'

export interface AddAccountRepository {
  add (accountData: AddAccountRepository.Params): Promise<AddAccountRepository.result>
}

export namespace AddAccountRepository {
  export type Params = AddAccount.Params
  export type result = AccountModel
}
