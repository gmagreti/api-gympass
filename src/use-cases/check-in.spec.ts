import { expect, describe, it, beforeEach } from 'vitest'

import { CheckInsUseCase } from './check-in'
import { InMemoryCheckInsRepository } from '@/repositories/in-memory/in-memory-check-ins-repository'

let checkInsRepository: InMemoryCheckInsRepository
let sut: CheckInsUseCase

describe('Check-in Use Case', () => {
  beforeEach(() => {
    checkInsRepository = new InMemoryCheckInsRepository()
    sut = new CheckInsUseCase(checkInsRepository)
  })

  it('should to register', async () => {
    const { checkIn } = await sut.execute({
      gymId: 'gym-id',
      userId: 'gym-id',
    })

    expect(checkIn.id).toEqual(expect.any(String))
  })
})
