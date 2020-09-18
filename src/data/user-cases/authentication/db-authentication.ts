import { Authentication, AuthenticationModel } from '../../../domain/useCases/authentication'
import { LoadAccountByEmailRepository } from '../../protocols/db/load-account-by-email-repository'
import { HashCompare } from '../../protocols/criptography/hash-compare'

export class DbAuthentication implements Authentication {
  private readonly loadAccountByEmailRepository: LoadAccountByEmailRepository
  private readonly hashCompare: HashCompare

  constructor (loadAccountByEmailRepository: LoadAccountByEmailRepository, hashCompare: HashCompare) {
    this.loadAccountByEmailRepository = loadAccountByEmailRepository
    this.hashCompare = hashCompare
  }

  async auth (authentication: AuthenticationModel): Promise<string> {
    const account = await this.loadAccountByEmailRepository.load(authentication.email)
    if (account) {
      await this.hashCompare.compare(authentication.password, account.password)
    }
    return null
  }
}