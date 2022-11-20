export type EthereumNetwork =
  | 'ethereum-mainnet'
  | 'ethereum-ropsten'
  | 'ethereum-goerli'

export type BinanceNetwork =
  | 'binance-mainnet'
  | 'binance-testnet'

export type AvalancheNetwork =
  | 'avalanche-mainnet'
  | 'avalanche-fuji'

export type PolygonNetwork =
  | 'polygon-mainnet'
  | 'polygon-mumbai'

export type Network =
  | EthereumNetwork
  | BinanceNetwork
  | AvalancheNetwork
  | PolygonNetwork

export type Speed =
  | 'low'
  | 'average'
  | 'fast'
  | 'fastest'
  | 'custom'

export type CustomGas<T extends Network> =
  T extends (EthereumNetwork | PolygonNetwork)
    ?
      {
        maxFeePerGas: string
        maxPriorityFeePerGas: string
      }
    : T extends (BinanceNetwork | AvalancheNetwork)
      ? { gasPrice: string }
      : unknown

export interface SmartContractListOptions {
  page?: number
  limit?: number
  address?: string
  includeAbi?: boolean
  includeCompilationDetails?: boolean
}

export interface SmartContractByteCodeBody {
  abi: unknown[]
  params: unknown[]
  network: string
  bytecode: string
  compilerVersion: string
  name: string
  signerWallet: string
  speed?: string
  customGas?: object
  gasLimit?: string
  description?: string
  nonce?: number
  value?: string
}

export interface SmartContractTemplateBody {
  network: Network
  signerWallet: string
  templateId: string
  name: string
  params: unknown[]
  description?: string
  speed?: string
  gasLimit?: string
  customGas?: object
  nonce?: number
  value?: string
}

export interface SmartContractCallBody {
  functionName: string
  params: unknown[]
  speed?: string
  gasLimit?: string
  customGas?: object
  nonce?: number
  value?: string
}

export interface SmartContractReadBody {
  functionName: string
  params: unknown[]
}

export interface TransactionFetchOptions {
  page?: number // offset
  limit?: number
  address?: number
  network?: Network
  transactionHash?: string
  to?: string
  from?: string
  status?: string
  state?: string
  logs?: unknown[]
  automaticNonce?: boolean
}

export interface TransactionCreateBody<T extends Network> {
  network: T
  signerWallet: string
  chainId?: number
  data?: string
  from?: string
  gasLimit?: string
  speed?: Speed
  customGas?: CustomGas<T>
  metadata?: string
  nonce?: number
  state?: string
  logs?: unknown[]
  to?: string
  value?: string
  automaticNonce?: string
}
