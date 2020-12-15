export interface AddSurvey {
  add (data: AddSurvey.Params): Promise<void>
}

export namespace AddSurvey {
  export type Params ={
    question: string
    answers: Answer[]
    date: Date
    didAnswer?: boolean
  }

  type Answer = {
    image?: string
    answer: string
  }
}
