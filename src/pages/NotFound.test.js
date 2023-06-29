import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom'
import NotFound from './NotFound';

describe("<NotFound />", () => {
    it("has a not found text", () => {
        render(
            <BrowserRouter>
                <NotFound />
            </BrowserRouter>
        )
        const footer = screen.getByRole('heading', {
            name: /cat's playing peek\-a\-boo/i
          })
        expect(footer).toBeInTheDocument()
    })
})