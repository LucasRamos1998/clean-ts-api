export type AuthenticationModel = {
  email
  password
}

export interface Authentication {
  auth (Authentication: AuthenticationModel): Promise<string>
}