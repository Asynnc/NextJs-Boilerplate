import { render, screen } from '@testing-library/react'

import Main from '.'

describe('<Main/>', () => {
  it('Should be render a heading', () => {
    const { container } = render(<Main />)

    expect(
      screen.getByRole('heading', { name: /Ellie.On Solutions/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('Should render colors correctly', () => {
    const { container } = render(<Main />)

    expect(container.firstChild).toHaveStyle({ 'background-color': '#06092B' })
  })
})
