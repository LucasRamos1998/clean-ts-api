import { AuthenticationModel } from '@/domain/models/authentication'

export type AuthenticationParams = {
  email
  password
}

export interface Authentication {
  auth (Authentication: AuthenticationParams): Promise<AuthenticationModel>
}
