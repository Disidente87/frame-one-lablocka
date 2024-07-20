import { Button, Frog } from 'frog'
import { devtools } from 'frog/dev'
//import { pinata } from 'frog/hubs'
import { serveStatic } from 'frog/serve-static'
// import { neynar } from 'frog/hubs'
import { handle } from 'frog/vercel'

// Uncomment to use Edge Runtime.
// export const config = {
//   runtime: 'edge',
// }

export const app = new Frog({
  assetsPath: '/',
  basePath: '/api',
  //hub: pinata(),
  title: 'tituloooooo',
  // Supply a Hub to enable frame verification.
  // hub: neynar({ apiKey: 'NEYNAR_FROG_FM' })
})

app.frame('/main', (c) => {
  const {  } = c

  return c.res({
    image: "https://logowik.com/content/uploads/images/arbitrum-foundation4621.logowik.com.webp",
    intents: [
      //<TextInput placeholder="Enter cu" />,
      <Button action='/error'>Manolo</Button>,
      <Button action='/error'>Fifardo</Button>,
      <Button action='/work'>Arby</Button>,
      <Button action='/error'>Soccero</Button>,
      //status === 'response' && <Button.Reset>Reset</Button.Reset>,
    ],
  })
})


app.frame('/error', (c) => {
  const {  } = c

  return c.res({
    image: "https://logowik.com/content/uploads/images/arbitrum-foundation4621.logowik.com.webp",
    intents: [
      //<TextInput placeholder="Enter cu" />,
      <Button action="/main">Volver a Intentar</Button>,
    
      //status === 'response' && <Button.Reset>Reset</Button.Reset>,
    ],
  })
})

app.frame('/work', (c) => {
  const {  } = c

  return c.res({
    image: "https://logowik.com/content/uploads/images/arbitrum-foundation4621.logowik.com.webp",
    intents: [
      //<TextInput placeholder="Enter cu" />,
      <Button action='/error'>Polkadot</Button>,
      <Button action='/error'>Ethereum</Button>,
      <Button action='/error'>Base</Button>,
      <Button action='/buy'>Arbitrum</Button>,
    
      //status === 'response' && <Button.Reset>Reset</Button.Reset>,
    ],
  })
})

app.frame('/buy', (c) => {
  const {  } = c

  return c.res({
    image: "https://logowik.com/content/uploads/images/arbitrum-foundation4621.logowik.com.webp",
    intents: [
      //<TextInput placeholder="Enter cu" />,
      <Button action='/error'>con la tía piolín</Button>,
      <Button action='/error'>Con Shillardo Ponzi</Button>,
      <Button action='/last'>En Bando.cool</Button>,
      <Button action='/error'>En la tienda de la esquina</Button>,
    
      //status === 'response' && <Button.Reset>Reset</Button.Reset>,
    ],
  })
})

app.frame('/last', (c) => {
  const {  } = c

  return c.res({
    image: "https://logowik.com/content/uploads/images/arbitrum-foundation4621.logowik.com.webp",
    intents: [
      //<TextInput placeholder="Enter cu" />,
      <Button.Link href='https://giveth.io/es/project/la-blocka-animated-episode-of-arbitrum-in-la-blocka?apcid=00652c2c0f7f9fb81c6adc00' >Giveth</Button.Link>,
      <Button.Link href='https://zora.co/collect/arb:0xf38ce72d52302d5ae99ba1d4e96fe22a38fd8d58/1?referrer=0x800791E9Ff96fFeA46AB13633Ad58EC6c43c5421'>Free Mint</Button.Link>,
      <Button.Link href='https://warpcast.com/lablockatoon'>La Blocka</Button.Link>,
      <Button.Link href='https://warpcast.com/lablockatoon'>Share</Button.Link>,
    
      //status === 'response' && <Button.Reset>Reset</Button.Reset>,
    ],
  })
})


// @ts-ignore
const isEdgeFunction = typeof EdgeFunction !== 'undefined'
const isProduction = isEdgeFunction || import.meta.env?.MODE !== 'development'
devtools(app, isProduction ? { assetsPath: '/.frog' } : { serveStatic })

export const GET = handle(app)
export const POST = handle(app)
