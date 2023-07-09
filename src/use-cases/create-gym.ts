import { Gym } from '@prisma/client'

import { GymsRepository } from '@/repositories/gyms-repository'
import { ResourceNotFoundError } from '@/use-cases/errors/resource-not-found-error'

interface CreateGymUseCaseRequest {
  title: string
  description: string
  phone: string
  latitude: string
  longitude: string
}

interface CreateGymUseCaseResponse {
  gym: Gym
}

export class CreateGymUseCase {
  constructor(private gymRepository: GymsRepository) {}

  async execute({
    description,
    latitude,
    longitude,
    phone,
    title,
  }: CreateGymUseCaseRequest): Promise<CreateGymUseCaseResponse> {
    const gym = await this.gymRepository.create({
      description,
      latitude,
      longitude,
      phone,
      title,
    })

    if (!gym) {
      throw new ResourceNotFoundError()
    }

    return {
      gym,
    }
  }
}
