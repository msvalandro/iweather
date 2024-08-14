import { getNextDays } from './getNextDays'

it('should return the next 5 days', () => {
  const days = getNextDays()

  expect(days.length).toBe(5)
})
