export interface Authentication {
  auth (Authentication: Authentication.Params): Promise<Authentication.result>
}

export namespace Authentication {
  export type Params = {
    email: string
    password: string
  }
  export type result = {
    accessToken: string
    name: string
  }
}
