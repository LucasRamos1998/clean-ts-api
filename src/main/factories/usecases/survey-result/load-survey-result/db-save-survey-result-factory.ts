import { LoadSurveyResult } from '@/domain/useCases/survey-result/load-survey-result'
import { DbLoadSurveyResult } from '@/data/user-cases/survey-result/load-survey-result/db-load-survey-result'
import { SurveyResultMongoRepository } from '@/infra/db/mongodb/survey-result/survey-result-mongo-repository'
import { SurveyMongoRepository } from '@/infra/db/mongodb/survey/survey-mongo-repository'

export const makeDbLoadSurveyResult = (): LoadSurveyResult => {
  const surveyResultMongoRespository = new SurveyResultMongoRepository()
  const surveyMongoRespository = new SurveyMongoRepository()
  return new DbLoadSurveyResult(surveyResultMongoRespository, surveyMongoRespository)
}
