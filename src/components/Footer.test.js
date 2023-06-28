import { render, screen } from '@testing-library/react';
import Footer from './Footer'
import { BrowserRouter } from 'react-router-dom';

describe("<Footer />", () => {
    it("has a footer", () => {
        render(
            <BrowserRouter>
                <Footer/>
            </BrowserRouter>
        )
        screen.logTestingPlaygroundURL()
        const footer = screen.getByText(/© 2023 ricky espinoza, paul gooden, brandon shinzato/i)
        expect(footer).toBeInTheDocument()
    })
})