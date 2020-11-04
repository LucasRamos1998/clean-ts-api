export type AuthenticationParams = {
  email
  password
}

export interface Authentication {
  auth (Authentication: AuthenticationParams): Promise<string>
}
