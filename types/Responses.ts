import { Network, Speed } from './Parameters'

export interface SmartContractResponse {
  id: string
  name: string
  description: string
  network: Network
  abi: unknown[]
  projectId: string
  address: string
  params: string[]
  compilationDetails: unknown
  creationHash: string
  status: 'UNSIGNED' | 'CONFIRMED' | string
  minedDate: string
  blockNumber: number
  createdAt: string
  updatedAt: string
}

export interface SmartContractList {
  meta: {
    itemCount: number
    totalItems: number
    itemsPerPage: number
    totalPages: number
    currentPage: number
  }
  items: SmartContractResponse[]
}

export interface SmartContractFunctions {
  call: string[]
  read: string[]
  events: string[]
}

export interface SmartContractDeploy {
  smartContract: SmartContractResponse
  transaction: unknown
}

export interface SmartContractCallResponse {
  id: string
  blockHash: string
  blockNumber: number
  chainId: number
  data: string
  from: string
  gasLimit: string
  gasPrice: string
  maxFeePerGas: string
  maxPriorityFeePerGas: string
  metadata: string
  network: Network
  nonce: number
  type: number
  signerWallet: string
  publishedDate: string
  signedDate: string
  minedDate: string
  signedTransaction: string
  status: 'UNSIGNED' | string
  to: string
  transactionHash: string
  value: string
  projectId: string
  createdAt: string
  updatedAt: string
}

export interface SmartContractReadResponse {
  response: string
  functionName: string
  params: string[]
}

export interface TransactionResponse {
  id: string
  blockHash: string
  blockNumber: number
  chainId: number
  data: string
  from: string
  gasLimit: string
  gasPrice: string
  maxFeePerGas: string
  maxPriorityFeePerGas: string
  metadata: string
  network: Network
  nonce: number
  type: number
  signerWallet: string
  publishedDate: string
  signedDate: string
  minedDate: string
  signedTransaction: string
  status: "CONFIRMED" | string
  state: "SUCCESS" | string
  speed: Speed
  logs: Array<{
    message: string
    type: "UNSIGNED" | string
    context: object
    createdAt: string
  }>
  to: string
  transactionHash: string
  value: string
  automaticNonce: boolean
  projectId: string
  createdAt: string
  updatedAt: string
}

export interface TransactionCreateResponse<T extends Network> {
  id: string
  blockHash: string
  blockNumber: number
  chainId: number
  data: string
  from: string
  gasLimit: string
  gasPrice: string
  maxFeePerGas: string
  maxPriorityFeePerGas: string
  metadata: string
  network: T
  nonce: number
  type: number
  signerWallet: string
  publishedDate: string
  signedDate: string
  minedDate: string
  signedTransaction: string
  status: "CONFIRMED" | string
  state: "SUCCESS" | string
  speed: Speed
  logs: Array< {
    message: string
    type: "UNSIGNED" | string
    context: object
    createdAt: string
  }>
  to: string
  transactionHash: string
  value: string
  automaticNonce: boolean
  projectId: string
  createdAt: string
  updatedAt: string
}

export interface SmartContractImportResponse {
  id: string
  name: string
  description: string
  network: Network
  abi: Array<any>
  address: string
  params: Array<any>
  compilationDetails: {
    source: string
    bytecode: string
    compilerVersion: string
    contractName: string
    optimizationUsed: boolean
    runs: number
  }
  creationHash: string
  status: string
  state: string
  minedDate: string
  blockNumber: number
  templateId: string
  projectId: string
  createdAt: string
  updatedAt: string
}

export interface KmsWalletResponse {
  items: Array<{
    address: string
    providerKeyId: string
    kmsId: string
    name: string
    description: string
    metadata: string
    projectId: string
    createdAt: string
    updatedAt: string
  }>
  meta: {
    itemCount: number
    totalItems: number
    itemsPerPage: number
    totalPages: number
    currentPage: number
  }
}
