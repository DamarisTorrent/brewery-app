import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import { BrowserRouter} from 'react-router-dom';
// Import the component you want to test
import CardContainer from './CardContainer';

describe('testing home page', () => {
  test('cards should display on the page', async () => {
    // ARRANGE - Render a React element into the DOM
    render(
      <CardContainer></CardContainer>
    )
      //Simulate user clicking the map
    //  await userEvent.click(screen.getByText('Load Greeting'))  // simulate a user click
    // expect(screen.getByTestId('street')).toHaveTextContent('20 Sage Ln.')

  

  })
})