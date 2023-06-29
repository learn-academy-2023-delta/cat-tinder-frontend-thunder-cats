import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom'
import Home from '../pages/Home';

describe("<Home />", () => {
    it("has a header text", () => {
        render(
            <BrowserRouter>
                <Home />
            </BrowserRouter>
        )
        screen.logTestingPlaygroundURL()
        const header = screen.getByRole('heading', {
            name: /this is a app for all thundercats\./i
            })
        expect(header).toBeInTheDocument()
    })
})