export interface LoadAccountByToken {
  load (accessToken: string, role?: string): Promise<LoadAccountByToken.result>
}

export namespace LoadAccountByToken {
  export type result = {
    id: string
  }
}
