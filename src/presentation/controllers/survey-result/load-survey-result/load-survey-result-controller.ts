import { Controller, HttpRequest, HttpResponse, LoadSurveyById } from './load-survey-result-controller-protocols'
import { forbidden } from '@/presentation/helpers/http/http-helper'
import { InvalidParamsError } from '@/presentation/errors'

export class LoadSurveyResultController implements Controller {
  constructor (private readonly loadSurveyById: LoadSurveyById) {}

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    const survey = await this.loadSurveyById.loadById(httpRequest.params.surveyId)
    if (!survey) {
      return forbidden(new InvalidParamsError('surveyId'))
    }
    return Promise.resolve(null)
  }
}
