import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [
  
  {
    pid: 0,
    risk: 5,
    isTokenOnly: false,
    lpSymbol: 'LEOPARD - USDC',
    lpAddresses: {
      97: '',
      56: '0x19e7cbecdd23a16dfa5573df54d98f7caae03019',
      137: '0x979c97092b2DE102f5EEc631914Cf64f93E8EB48',
    },
    tokenSymbol: 'LEOPARD',
    tokenAddresses: {
      97: '',
      56: '0xf952fc3ca7325cc27d15885d37117676d25bfda6',
      137: '0x175C6304E5fa120586FCd33eF724254F659b4E83',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 1,
    risk: 5,
    isTokenOnly: false,
    lpSymbol: 'LEOPARD - MATIC',
    lpAddresses: {
      97: '',
      56: '0x19e7cbecdd23a16dfa5573df54d98f7caae03019',
      137: '0xb0C98D5148ad42D3B2b293d212Bce986a2dfc772',
    },
    tokenSymbol: 'LEOPARD',
    tokenAddresses: {
      97: '',
      56: '0xf952fc3ca7325cc27d15885d37117676d25bfda6',
      137: '0x175C6304E5fa120586FCd33eF724254F659b4E83',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 2,
    risk: 3,
    lpSymbol: 'WMATIC - USDC',
    lpAddresses: {
      97: '',
      56: '0x6e7a5fafcec6bb1e78bae2a1f0b612012bf14827',
      137: '0x6e7a5fafcec6bb1e78bae2a1f0b612012bf14827', // WMATIC - USDC
    },
    tokenSymbol: 'WMATIC',
    tokenAddresses: {
      97: '',
      56: '0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270',
      137: '0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270', // WMATIC
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 3,
    risk: 5,
    isTokenOnly: true,
    lpSymbol: 'LEOPARD',
    lpAddresses: {
      97: '',
      56: '0x19e7cbecdd23a16dfa5573df54d98f7caae03019',
      137: '0x979c97092b2DE102f5EEc631914Cf64f93E8EB48', // LEOPARD - USDC
    },
    tokenSymbol: 'LEOPARD',
    tokenAddresses: {
      97: '',
      56: '0xf952fc3ca7325cc27d15885d37117676d25bfda6',
      137: '0x175C6304E5fa120586FCd33eF724254F659b4E83',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 4,
    isTokenOnly: true,
    risk: 3,
    lpSymbol: 'WMATIC',
    lpAddresses: {
      97: '',
      56: '0x6e7a5fafcec6bb1e78bae2a1f0b612012bf14827',
      137: '0x6e7a5fafcec6bb1e78bae2a1f0b612012bf14827', // WMATIC - USDC
    },
    tokenSymbol: 'MATIC',
    tokenAddresses: {
      97: '',
      56: '0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270',
      137: '0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270', // WMATIC
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  // {
  //   pid: 5,
  //   isTokenOnly: true,
  //   risk: 3,
  //   lpSymbol: 'WBTC',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x6e7a5fafcec6bb1e78bae2a1f0b612012bf14827',
  //     137: '0xf6a637525402643b0654a54bead2cb9a83c8b498', // WBTC - USDC
  //   },
  //   tokenSymbol: 'WBTC',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270',
  //     137: '0x1bfd67037b42cf73acf2047067bd4f2c47d9bfd6', // WBTC
  //   },
  //   quoteTokenSymbol: QuoteToken.BUSD,
  //   quoteTokenAdresses: contracts.busd,
  // },
  // {
  //   pid: 6,
  //   isTokenOnly: true,
  //   risk: 3,
  //   lpSymbol: 'WETH',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x6e7a5fafcec6bb1e78bae2a1f0b612012bf14827',
  //     137: '0x853ee4b2a13f8a742d64c8f088be7ba2131f670d', // ETH - USDC
  //   },
  //   tokenSymbol: 'WETH',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270',
  //     137: '0x7ceb23fd6bc0add59e62ac25578270cff1b9f619', // ETH
  //   },
  //   quoteTokenSymbol: QuoteToken.BUSD,
  //   quoteTokenAdresses: contracts.busd,
  // },
  // {
  //   pid: 7,
  //   risk: 5,
  //   isTokenOnly: true,
  //   lpSymbol: 'KRILL',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x19e7cbecdd23a16dfa5573df54d98f7caae03019',
  //     137: '0x6405ebc22cb0899fc21f414085ac4044b4721a0d', // KRILL - USDC
  //   },
  //   tokenSymbol: 'KRILL',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0xf952fc3ca7325cc27d15885d37117676d25bfda6',
  //     137: '0x05089C9EBFFa4F0AcA269e32056b1b36B37ED71b',
  //   },
  //   quoteTokenSymbol: QuoteToken.BUSD,
  //   quoteTokenAdresses: contracts.busd,
  // },
  // {
  //   pid: 8,
  //   isTokenOnly: true,
  //   risk: 3,
  //   lpSymbol: 'USDC',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x6e7a5fafcec6bb1e78bae2a1f0b612012bf14827',
  //     137: '0x2cf7252e74036d1da831d11089d326296e64a728', // USDC - USDC
  //   },
  //   tokenSymbol: 'USDC',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270',
  //     137: '0x2791bca1f2de4661ed88a30c99a7a9449aa84174', // USDC
  //   },
  //   quoteTokenSymbol: QuoteToken.BUSD,
  //   quoteTokenAdresses: contracts.busd,
  // },
  // {
  //   pid: 9,
  //   isTokenOnly: true,
  //   risk: 3,
  //   lpSymbol: 'USDT',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x6e7a5fafcec6bb1e78bae2a1f0b612012bf14827',
  //     137: '0x2cf7252e74036d1da831d11089d326296e64a728', // USDT - USDC
  //   },
  //   tokenSymbol: 'USDT',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270',
  //     137: '0xc2132d05d31c914a87c6611c10748aeb04b58e8f', // USDT
  //   },
  //   quoteTokenSymbol: QuoteToken.BUSD,
  //   quoteTokenAdresses: contracts.busd,
  // },  
  // {
  //   pid: 10,
  //   isTokenOnly: true,
  //   risk: 1,
  //   lpSymbol: 'AAVE',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x6e7a5fafcec6bb1e78bae2a1f0b612012bf14827',
  //     137: '0x0554059d42e26f35cc958581c71fdfd92405d02f', // AAVE - USDC
  //   },
  //   tokenSymbol: 'AAVE',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270',
  //     137: '0xd6df932a45c0f255f85145f286ea0b292b21c90b', // AAVE
  //   },
  //   quoteTokenSymbol: QuoteToken.BNB,
  //   quoteTokenAdresses: contracts.wbnb,
  // },
  // {
  //   pid: 11,
  //   risk: 5,
  //   isTokenOnly: false,
  //   lpSymbol: 'WETH - USDC',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x19e7cbecdd23a16dfa5573df54d98f7caae03019',
  //     137: '0x853ee4b2a13f8a742d64c8f088be7ba2131f670d',
  //   },
  //   tokenSymbol: 'WETH',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0xf952fc3ca7325cc27d15885d37117676d25bfda6',
  //     137: '0x7ceb23fd6bc0add59e62ac25578270cff1b9f619',
  //   },
  //   quoteTokenSymbol: QuoteToken.BUSD,
  //   quoteTokenAdresses: contracts.busd,
  // },  
  
]

export default farms
