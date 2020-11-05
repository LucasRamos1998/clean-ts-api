import { SaveSurveyResultRepository } from '../protocols/db/survey-result/save-survey-result-repository'
import { SaveSurveyResultParams, SurveyResultModel } from '../user-cases/survey-result/save-survey-result/db-save-survey-result-protocols'
import { mockSurveyResultModel } from '@/domain/test/mock-survey-result'

export const mockSaveSurveyResultRepository = (): SaveSurveyResultRepository => {
  class SaveSurveyResultRepositoryStub implements SaveSurveyResultRepository {
    async save (data: SaveSurveyResultParams): Promise<SurveyResultModel> {
      return Promise.resolve(mockSurveyResultModel())
    }
  }
  return new SaveSurveyResultRepositoryStub()
}
