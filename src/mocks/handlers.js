import { rest } from 'msw'
import breweryData from './data/breweryData.json'

console.log(breweryData)
export const handlers = [
  // rest.get('https://api.openbrewerydb.org/breweries?by_dist=33.92824879006601,-99.282625&per_page=10', (req, res, ctx) => { // capture "GET /greeting" requests
  //   return res(ctx.json(breweryData)) // respond using a mocked JSON body
  // })
  
]