import { AddSurvey } from '../../../../../domain/useCases/add-survey'
import { SurveyMongoRepository } from '../../../../../infra/db/mongodb/survey/survey-mongo-repository'
import { DbAddSurvey } from '../../../../../data/user-cases/add-survey/db-add-survey'

export const makeDbAddSurvey = (): AddSurvey => {
  const accountMongoRepository = new SurveyMongoRepository()
  return new DbAddSurvey(accountMongoRepository)
}
