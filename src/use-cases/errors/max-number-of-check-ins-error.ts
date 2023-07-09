export class MAxNumberOfCheckInsError extends Error {
  constructor() {
    super('Max number of check-ins reached.')
  }
}
