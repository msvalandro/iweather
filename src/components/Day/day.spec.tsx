import clearDay from '@assets/clear_day.svg'
import { Day } from '@components/Day'
import { render } from '@testing-library/react-native'

describe('Component: Day', () => {
  it('should render day', () => {
    const { debug } = render(
      <Day
        data={{
          day: '18/07',
          min: '30°c',
          max: '34°c',
          icon: clearDay,
          weather: 'Céu limpo',
        }}
      />,
    )

    debug()
  })
})
