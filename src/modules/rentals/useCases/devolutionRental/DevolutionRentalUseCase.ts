import { inject } from "tsyringe";
import { ICarsRepository } from "@modules/cars/repositories/ICarsRepository";
import { IRentalsRepository } from "@modules/rentals/repositories/IRentalsRepository";
import { AppError } from "@shared/errors/AppError";
import { IDateProvider } from "@shared/container/providers/DateProvider/IDateProvider";

interface IRequest {
  id: string;
  user_id: string;
}

class DevolutionRentalUseCase {
  constructor(
  @inject("RentalsRepository")
  private rentalsRepository: IRentalsRepository,
  @inject("CarsRepository")
  private carsRepository: ICarsRepository,
  @inject("DaysDateProvider")
  private dateProvider: IDateProvider,
  );

  async execute({ id, user_id}: IRequest) {
    const rental = await this.rentalsRepository.findById(id);

    if(!rental) {
      throw new AppError("Rental does not exists!");
    }
    
    const dateNow = this.dateProvider.dateNow();
    
    const diffInHours = this.dateProvider.compareInHours(dateNow, rental.expected_return_date);
    
    
  }
}

export { DevolutionRentalUseCase }
