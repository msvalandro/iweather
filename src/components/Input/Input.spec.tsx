import { render, screen } from '@testing-library/react-native'

import { Input } from '.'

describe('Component: Input', () => {
  it('should render without activity indicator if isLoading property is undefined', () => {
    render(<Input />)

    const activityIndicator = screen.queryByTestId('activity-indicator')

    expect(activityIndicator).toBeNull()
  })

  it('should render with activity indicator if isLoading property is true', () => {
    render(<Input isLoading />)

    const activityIndicator = screen.queryByTestId('activity-indicator')

    expect(activityIndicator).toBeTruthy()
  })
})
