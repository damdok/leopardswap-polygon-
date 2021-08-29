import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Exchange',
        href: 'https://quickswap.exchange/#/swap?outputCurrency=0x2AF8667854584e69a08DB92DD3C150f53A339D06',
      },
      {
        label: 'Liquidity',
        href: 'https://quickswap.exchange/#/add/ETH/0x2AF8667854584e69a08DB92DD3C150f53A339D06',        
      },
    ],
  }, 
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: 'Pools',
    icon: 'PoolIcon',
    href: '/pools',
  },
  // {
  //   label: 'Jungles',
  //   icon: 'JungleIcon',
  //   href: '/craters',
  // },
  {
    label: 'Lottery',
    icon: 'TicketIcon',
    href: '/lottery',
  },
  {
    label: 'Refferals',
    icon: 'GroupsIcon',
    href: '/refferals',
  },
  {
    label: "Audits",
    icon: "AuditIcon",
    href: "https://docs.leopardswap.net/"
  },
  {
    label: 'Features',
    icon: 'PriceGuardIcon',
    items: [
      {
        label: 'Automatic LP',
        href: 'https://docs.leopardswap.net/tokenomics/leopardtoken-leopard/automatic-liquidity',
      },
      {
        label: 'Automatic Burning',
        href: 'https://docs.leopardswap.net/tokenomics/leopardtoken-leopard/automatic-burning',
      },
      {
        label: 'Referral Program',
        href: 'https://docs.leopardswap.net/tokenomics/referral-program',
      },
      {
        label: 'Anti Whale',
        href: 'https://docs.leopardswap.net/tokenomics/leopardtoken-leopard/anti-whale',
      },
    ],
  },
  {
    label: 'Listing',
    icon: 'ListingIcon',
    items: [
      // {
      //   label: 'BscScan',
      //   href: 'https://bscscan.com/address/0x8d9087a2B7E446bb69343542e1430E974f12a18F',
      // },
      // {
      //   label: 'DappRadar',
      //   href: 'https://dappradar.com/binance-smart-chain/defi/moonharvest',
      // },
      // {
      //   label: 'CoinGecko',
      //   href: 'https://www.coingecko.com/en/coins/moonharvest',
      // },
      // {
      //   label: 'LiveCoinWatch',
      //   href: 'https://www.livecoinwatch.com/price/PantherSwap-PANTHER',
      // },
      // {
      //   label: 'Vfat',
      //   href: 'https://vfat.tools/bsc/moonharvest/',
      // },
    ],
  },
  // {
  //   label: 'NFT',
  //   icon: 'NftIcon',
  //   href: '/nft',
  // },
  /* {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'PancakeSwap',
        href: 'https://pancakeswap.info/token/0xF952Fc3ca7325Cc27D15885d37117676d25BfdA6',
      },
      {
        label: 'CoinGecko',
        href: 'https://www.coingecko.com/en/coins/goose-finance',
      },
      {
        label: 'CoinMarketCap',
        href: 'https://coinmarketcap.com/currencies/goose-finance/',
      },
      {
        label: 'AstroTools',
        href: 'https://app.astrotools.io/pancake-pair-explorer/0x19e7cbecdd23a16dfa5573df54d98f7caae03019',
      },
    ],
  }, */
  // {
  //   label: 'Analytic',
  //   icon: 'InfoIcon',
  //   items: [
  //     {
  //       label: 'Overview',
  //       href: 'https://pantherswap.info/',
  //     },
  //     {
  //       label: 'Tokens',
  //       href: 'https://pantherswap.info/tokens',
  //     },
  //     {
  //       label: 'Pairs',
  //       href: 'https://pantherswap.info/pairs',
  //     },
  //     {
  //       label: 'Accounts',
  //       href: 'https://pantherswap.info/accounts',
  //     },
  //   ],
  // },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Github',
        href: 'https://github.com/Leopardswap/',
      },
      {
        label: 'Docs',
        href: 'https://docs.leopardswap.net/',
      },
      {
        label: 'Roadmap',
        href: 'https://docs.leopardswap.net/roadmap',
      },
      {
        label: 'Blog',
        href: 'https://leopardswap.medium.com/',
      },
      // {
      //   label: 'Voting',
      //   href: '#',
      // },
    ],
  },
  /* {
    label: 'Partnerships/IFO',
    icon: 'GooseIcon',
    href: 'https://docs.google.com/forms/d/e/1FAIpQLSe7ycrw8Dq4C5Vjc9WNlRtTxEhFDB1Ny6jlAByZ2Y6qBo7SKg/viewform?usp=sf_link',
  },
  {
    label: 'Audit by Hacken',
    icon: 'AuditIcon',
    href: 'https://www.goosedefi.com/files/hackenAudit.pdf',
  },
  {
    label: 'Audit by CertiK',
    icon: 'AuditIcon',
    href: 'https://certik.org/projects/goose-finance',
  }, */
]

export default config
