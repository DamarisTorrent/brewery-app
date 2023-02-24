import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import { BrowserRouter} from 'react-router-dom';
// Import the component you want to test
import Favorites from './Favorites'
import FavoritesContext from '../../context/FavoritesContext'

describe('testing favorites page', () => {
  test('user has no favorites selected and page should say so', async () => {
    // ARRANGE - Render a React element into the DOM
    render(
      <FavoritesContext>
        <BrowserRouter>
          <Favorites/>
        </BrowserRouter>
      </FavoritesContext>
    )
    expect(screen.getByTestId('nofaves')).toHaveTextContent('No favorites yet, go home and get busy drinking!')
  })
})
