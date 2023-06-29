import { render, screen } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import CatShow from '../pages/CatShow'
import mockCats from '../mockCats'

const renderShow = () => {
    render(
        <MemoryRouter initialEntries={["/catshow/1"]}>
            <Routes>
                <Route path="/catshow/:id" element={<CatShow cats={mockCats} />} />
            </Routes>
        </MemoryRouter>
    ) 
    screen.logTestingPlaygroundURL()
}

describe("<CatShow />", () => {
    it("renders each cards enjoys information", () => {
        renderShow()
        const thunderCatEnjoys = screen.getByText(`${mockCats[0].enjoys}`)
        expect(thunderCatEnjoys).toBeInTheDocument()
    })
    it("renders each cards name information", () => {
        renderShow()
        const thunderCatName = screen.getByText(`${mockCats[0].name}`)
        expect(thunderCatName).toBeInTheDocument()
    })
    it("renders each cards age information", () => {
        renderShow()
        const thunderCatAge = screen.getByText(`${mockCats[0].age}`)
        expect(thunderCatAge).toBeInTheDocument()
    })
    it("renders each cards image information", () => {
        renderShow()
        const thunderCatImage = screen.getByRole('img', {
            name: /panthro/i
    })
        expect(thunderCatImage).toBeInTheDocument()
    })
})