import {
  ofetch,
  type $Fetch,
  type FetchContext,
  type FetchResponse
} from 'ofetch'
import SmartContract from './modules/SmartContract'
import Transaction from "./modules/Transaction"
import Kms from "./modules/Kms"

export * from './../types/Parameters'
export * from './../types/Responses'

export default class Starton {
  public readonly client: $Fetch
  public readonly smartContract: SmartContract
  public readonly transaction: Transaction
  public readonly kms: Kms

  constructor(
    API_KEY: string,
    onRequest?: (context: FetchContext) => Promise<void> | void,
    onResponse?: (context: FetchContext & { response: FetchResponse<ResponseType> }) => Promise<void> | void,
    onRequestError?: (context: FetchContext & { error: Error }) => Promise<void> | void,
    onResponseError?: (context: FetchContext & { response: FetchResponse<ResponseType> }) => Promise<void> | void
  ) {
    this.client = ofetch.create({
      baseURL: 'https://api.starton.io/v3',
      headers: { 'x-api-key': API_KEY },
      onRequest,
      onResponse,
      onRequestError,
      onResponseError
    })
    this.smartContract = new SmartContract(this.client)
    this.transaction = new Transaction(this.client)
    this.kms = new Kms(this.client)
  }
}
