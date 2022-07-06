export const createFixture = <T>(object: T) => (overrides?: Partial<T>): T => ({
  ...object,
  ...overrides
})
