import { render, screen } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom'
import CatEdit from '../pages/CatEdit';
import mockCats from '../mockCats';


const renderShow = () => {
    render(
        <MemoryRouter initialEntries={["/catedit/1"]}>
            <Routes>
                <Route path="/catedit/:id" element={<CatEdit cats={mockCats} />} />
            </Routes>
        </MemoryRouter>
    ) 
}

describe("<CatEdit />", () => {

    it("renders name for entry slot", () => {
        renderShow()
        const nameDisplay = screen.getByText(/name/i)
        expect(nameDisplay).toBeInTheDocument()
    })

    it("renders a placeholder for name", () => {
        renderShow()
        const nameDisplayHolder = screen.getByPlaceholderText(/edit name here/i)
        expect(nameDisplayHolder).toBeInTheDocument()
    })

})