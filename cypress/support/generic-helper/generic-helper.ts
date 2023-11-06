export default class Generic {
  static ramdomNumberFromInterval = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };
  static getRandomString = (world: string) => {
    return `${world}${this.ramdomNumberFromInterval(1, 200)}`;
  };
}
