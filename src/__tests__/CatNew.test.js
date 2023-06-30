import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom'
import CatNew from '../pages/CatNew';

const renderShow = () => {
    render(
        <BrowserRouter>
            <CatNew />
        </BrowserRouter>
    )
}
describe("<CatNew />", () => {
    it("renders a header", () => {
        renderShow()
        const header = screen.getByRole('heading', {
            name: /enter a new thunder cat!!/i
        })
        expect(header).toBeInTheDocument()
    })

    it("renders name for entry slot", () => {
        renderShow()
        const nameDisplay = screen.getByText(/name/i)
        expect(nameDisplay).toBeInTheDocument()
    })

    it("renders a placeholder for name", () => {
        renderShow()
        const nameDisplayHolder = screen.getByPlaceholderText(/enter name here/i)
        expect(nameDisplayHolder).toBeInTheDocument()
    })
})