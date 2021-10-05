export class loggingService {
  logStatusChange(status: string) {
    console.log('A Server status was changed, new Status:' + status);
  }
}
