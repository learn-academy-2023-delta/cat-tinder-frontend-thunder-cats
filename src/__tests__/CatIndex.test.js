import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom'
import CatIndex from '../pages/CatIndex'
import mockCats from '../mockCats'


const renderShow = () => {
    render(
        <BrowserRouter>
            <CatIndex cats={mockCats}/>
        </BrowserRouter>
    )

}
describe("<CatIndex />", () => {
    it("renders a header", () => {
        renderShow()
        const header = screen.getByRole('heading', {
            name: /list of all thunder cats/i
        })
        expect(header).toBeInTheDocument()
    })
    it("has shows the list of all thunder cats name", () => {
        renderShow()
        mockCats.forEach(cat => {
            const thunderCatName = screen.getByText(cat.name)
            expect(thunderCatName).toBeInTheDocument()
        })   
    })
    it("has shows the list of all thunder cats age", () => {
        renderShow()
        mockCats.forEach(cat => {
            const thunderCatAge = screen.getByText(cat.age)
            expect(thunderCatAge).toBeInTheDocument()
        })   
    })
    it("has shows the list of all thunder cats image", () => {
        renderShow()
            const thunderCatImage = screen.getByRole('img', {
                name: /panthro/i,
                name: /cheetara/i,
                name: /snarf/i,
                name: /lion\-o/i,
                name: /wilykit/i,
                name: /pumyra/i,
                name: /tygra/i,
                name: /jaga/i,
                name: /alluro/i
        })
            expect(thunderCatImage).toBeInTheDocument()
    })      
})