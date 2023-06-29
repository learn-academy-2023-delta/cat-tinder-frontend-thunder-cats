import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom'
import Header from '../components/Header';
import { Link } from 'react-router-dom';

describe("<Header/>", () => {
    it("has a header", () => {
        render(
            <BrowserRouter>
                <Header/>
            </BrowserRouter>
        )
        screen.logTestingPlaygroundURL()
        const head = screen.getByRole('heading', {
            name: /thunder cats tinder/i
          })
          expect(head).toBeInTheDocument()
    })

    it("has a home link", () => {
        render(
            <BrowserRouter>
                <Link to="/"> Home </Link>
            </BrowserRouter>
           )
           const homeLink = screen.getByRole('link', {
            name: /home/i
          })
          expect(homeLink).toBeInTheDocument()
    })

    it("has a cat index link", () => {
        render(
            <BrowserRouter>
                <Link to="/catindex"> CatIndex </Link>
            </BrowserRouter>
           )
           const catIndexLink= screen.getByRole('link', {
            name: /catindex/i
        })
        expect(catIndexLink).toBeInTheDocument()
    })

    
    it("has a cat show link", () => {
        render(
            <BrowserRouter>
                <Link to="/catshow"> CatShow </Link>
            </BrowserRouter>
           )
           const catShowLink = screen.getByRole('link', {
            name: /catshow/i
          })
          expect(catShowLink).toBeInTheDocument()
    })

    it("has a cat new link", () => {
        render(
            <BrowserRouter>
                <Link to="/catnew"> CatNew </Link>
            </BrowserRouter>
           )
           const catNewLink = screen.getByRole('link', {
            name: /catnew/i
          })
          expect(catNewLink).toBeInTheDocument()
    })

    it("has a cat edit link", () => {
        render(
            <BrowserRouter>
                <Link to="/catedit"> CatEdit </Link>
            </BrowserRouter>
           )
           const catEditLink = screen.getByRole('link', {
            name: /catedit/i
          })
          expect(catEditLink).toBeInTheDocument()
    })
})

