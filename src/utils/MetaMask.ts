enum ChainId {
  ETHEREUM_MAIN_NETWORK = '0x1',
  ROPSTEN_TEST_NETWORK = '0x3',
  RINKEBY_TEST_NETWORK = '0x4',
  GOERLI_TEST_NETWORK = '0x5',
  KOVAN_TEST_NETWORK = '0x2a'
}

export interface Chain {
  hex: ChainId
  decimal: number
  network: string
}

const CHAINS = [
  {
    hex: ChainId.ETHEREUM_MAIN_NETWORK,
    decimal: parseInt(String(ChainId.ETHEREUM_MAIN_NETWORK)),
    network: 'Ethereum Main Network (Mainnet)'
  },
  {
    hex: ChainId.ROPSTEN_TEST_NETWORK,
    decimal: parseInt(String(ChainId.ROPSTEN_TEST_NETWORK)),
    network: 'Ropsten Test Network'
  },
  {
    hex: ChainId.RINKEBY_TEST_NETWORK,
    decimal: parseInt(String(ChainId.RINKEBY_TEST_NETWORK)),
    network: 'Rinkeby Test Network'
  },
  {
    hex: ChainId.GOERLI_TEST_NETWORK,
    decimal: parseInt(String(ChainId.GOERLI_TEST_NETWORK)),
    network: 'Goerli Test Network'
  },
  {
    hex: ChainId.KOVAN_TEST_NETWORK,
    decimal: parseInt(String(ChainId.KOVAN_TEST_NETWORK)),
    network: 'Kovan Test Network'
  }
]

export const findChainById = (hex: ChainId): Chain | undefined => {
  return CHAINS.find((chain) => chain.hex === hex)
}
