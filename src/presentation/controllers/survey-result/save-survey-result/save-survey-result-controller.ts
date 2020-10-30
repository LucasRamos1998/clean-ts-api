import { Controller, HttpRequest, HttpResponse, LoadSurveyById, SaveSurveyResult } from './save-survey-result-controller-protocols'
import { forbidden, serverError } from '@/presentation/helpers/http/http-helper'
import { InvalidParamsError } from '@/presentation/errors'

export class SurveySaveResultController implements Controller {
  constructor (
    private readonly loadSurveyById: LoadSurveyById,
    private readonly surveySaveResult: SaveSurveyResult
  ) {}

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const { surveyId } = httpRequest.params
      const { answer } = httpRequest.body
      const { accountId } = httpRequest
      const survey = await this.loadSurveyById.loadById(surveyId)
      if (survey) {
        const answers = survey.answers.map(a => a.answer)
        if (!answers.includes(answer)) {
          return forbidden(new InvalidParamsError('answer'))
        }
      } else {
        return forbidden(new InvalidParamsError('surveyId'))
      }
      await this.surveySaveResult.save({
        accountId,
        surveyId,
        answer,
        date: new Date()
      })
      return null
    } catch (error) {
      return serverError(error)
    }
  }
}