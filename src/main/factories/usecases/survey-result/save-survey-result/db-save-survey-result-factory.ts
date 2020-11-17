import { SaveSurveyResult } from '@/domain/useCases/survey-result/save-survey-result'
import { DbSaveSurveyResult } from '@/data/user-cases/survey-result/save-survey-result/db-save-survey-result'
import { SurveyResultMongoRepository } from '@/infra/db/mongodb/survey-result/survey-result-mongo-repository'

export const makeDbSaveSurveyResult = (): SaveSurveyResult => {
  const saveSurveyResultMongoRespository = new SurveyResultMongoRepository()
  return new DbSaveSurveyResult(saveSurveyResultMongoRespository, saveSurveyResultMongoRespository)
}
