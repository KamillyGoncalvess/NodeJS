import { inject, injectable } from "tsyringe";
<<<<<<< HEAD

=======
>>>>>>> 5009a8a4440f57c2bd7c73abd01fc02ab5bdebfd
import { ICarsRepository } from "@modules/cars/repositories/ICarsRepository";
import { Rental } from "@modules/rentals/infra/typeorm/entities/Rental";
import { IRentalsRepository } from "@modules/rentals/repositories/IRentalsRepository";
import { IDateProvider } from "@shared/container/providers/DateProvider/IDateProvider";
import { AppError } from "@shared/errors/AppError";

interface IRequest {
  id: string;
  user_id: string;
}

@injectable()
class DevolutionRentalUseCase {
  constructor(
<<<<<<< HEAD
    @inject("RentalsRepository")
    private rentalsRepository: IRentalsRepository,
    @inject("CarsRepository")
    private carsRepository: ICarsRepository,
    @inject("DayjsDateProvider")
    private dateProvider: IDateProvider
  ) {}

  async execute({ id, user_id }: IRequest): Promise<Rental> {
    const rental = await this.rentalsRepository.findById(id);
    const car = await this.carsRepository.findById(rental.car_id);

    const minimum_daily = 1;
=======
  @inject("RentalsRepository")
  private rentalsRepository: IRentalsRepository,
  @inject("CarsRepository")
  private carsRepository: ICarsRepository,
  @inject("DaysDateProvider")
  private dateProvider: IDateProvider,
  ){}

  async execute({ id, user_id}: IRequest): Promise<Rental> {
    const rental = await this.rentalsRepository.findById(id);
    const car = await this.carsRepository.findById(rental.id);
    const mininum_daily = 1;
>>>>>>> 5009a8a4440f57c2bd7c73abd01fc02ab5bdebfd

    if (!rental) {
      throw new AppError("Rental does not exists!");
    }
<<<<<<< HEAD

    const dateNow = this.dateProvider.dateNow();

    let daily = this.dateProvider.compareInDays(
      rental.start_date,
      this.dateProvider.dateNow()
    );

    if (daily <= 0) {
      daily = minimum_daily;
    }

    const delay = this.dateProvider.compareInDays(
      dateNow,
      rental.expected_return_date
    );

    let total = 0;

    if (delay > 0) {
      const calculate_fine = delay * car.fine_amount;
      total = calculate_fine;
    }

=======
    
    const dateNow = this.dateProvider.dateNow();
    
    let daily = this.dateProvider.compareInDays(rental.start_date,
    this.dateProvider.dateNow());
    
    if(daily <= 0) {
    daily = mininum_daily;
    }
    
    const delay = this.dateProvider.compareInDays(dateNow, rental.expected_return_date);
    
    let total = 0;
    
    if(delay > 0 {
    const calculate_fine = delay * car.fine_amount;
    total = calcutate_fine;
    }
    
>>>>>>> 5009a8a4440f57c2bd7c73abd01fc02ab5bdebfd
    total += daily * car.daily_rate;

    rental.end_date = this.dateProvider.dateNow();
    rental.total = total;

    await this.rentalsRepository.create(rental);

    await this.carsRepository.updateAvailable(car.id, true);

    return rental;
  }
}

<<<<<<< HEAD
export { DevolutionRentalUseCase };
=======
export { DevolutionRentalUseCase }
>>>>>>> 5009a8a4440f57c2bd7c73abd01fc02ab5bdebfd
