import { type $Fetch } from 'ofetch'

export default class DefaultModule {
  public readonly client: $Fetch

  constructor(client: $Fetch) {
    this.client = client
  }
}
