interface IDateProvider {
<<<<<<< HEAD
    compareInHours(start_date: Date, end_date: Date): number;
    convertToUTC(date: Date): string;
    dateNow(): Date;
    compareInDays(start_date: Date, end_date: Date): number;
  }
=======
  compareInHours(start_date: Date, end_date: Date): number;
  convertToUTC(date: Date): string;
  dateNow(): Date;
  compareInDays(start_date: Date, end_date: Date): number;
}
>>>>>>> 5009a8a4440f57c2bd7c73abd01fc02ab5bdebfd

export { IDateProvider };
