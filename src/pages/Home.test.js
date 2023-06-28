import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom'
import Home from './Home';

describe("<Home />", () => {
    it("has a header text", () => {
        render(
            <BrowserRouter>
                <Home />
            </BrowserRouter>
        )
        screen.logTestingPlaygroundURL()
        const text = screen.getByRole('heading', {
  name: /this is a app for all thundercats\./i
})
    })
})