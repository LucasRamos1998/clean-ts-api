import { SurveyMongoRepository } from '@/infra/db/mongodb/survey/survey-mongo-repository'
import { LoadSurveys } from '@/domain/useCases/load-surveys'
import { DbLoadSurveys } from '@/data/user-cases/load-surveys/db-load-surveys'

export const makeDbLoadSurveys = (): LoadSurveys => {
  const accountMongoRepository = new SurveyMongoRepository()
  return new DbLoadSurveys(accountMongoRepository)
}