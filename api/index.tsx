import { Button, Frog, TextInput } from 'frog'
import { devtools } from 'frog/dev'
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
  // Supply a Hub to enable frame verification.
  // hub: neynar({ apiKey: 'NEYNAR_FROG_FM' })
})

app.frame('/main', (c) => {
  const { buttonValue, inputText, status } = c
  const fruit = inputText || buttonValue
  return c.res({
    image: "/public/1.jpg",
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
  const { buttonValue, inputText, status } = c
  const fruit = inputText || buttonValue
  return c.res({
    image: "/public/5.jpg",
    intents: [
      //<TextInput placeholder="Enter cu" />,
      <Button action="/main">Volver a Intentar</Button>,
    
      //status === 'response' && <Button.Reset>Reset</Button.Reset>,
    ],
  })
})

app.frame('/work', (c) => {
  const { buttonValue, inputText, status } = c
  const fruit = inputText || buttonValue
  return c.res({
    image: "/public/2.jpg",
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
  const { buttonValue, inputText, status } = c
  const fruit = inputText || buttonValue
  return c.res({
    image: "/public/3.jpg",
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
  const { buttonValue, inputText, status } = c
  const fruit = inputText || buttonValue
  return c.res({
    image: "/public/4.jpg",
    intents: [
      //<TextInput placeholder="Enter cu" />,
      <Button.Link href='https://giveth.io/' >Giveth</Button.Link>,
      <Button.Link href='https://zora.co/'>Free Mint</Button.Link>,
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
