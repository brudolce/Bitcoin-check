import AppStyles from '../../App.styles';

export default class DisplayStyles extends AppStyles {
  public Display: {
    margin: number;
    textAlign: string;
    color: string;
    height: string;
    fontSize: number;
  };

  constructor(size: number, fontsize: number) {
    super();

    this.Display = {
      margin: 20,
      textAlign: 'center',
      color: this.color[2],
      height: `${size}vh`,
      fontSize: 7.5 * fontsize,
    };
  }

  static DisplayCSSFactory(size: number, fontsize: number): DisplayStyles {
    return new DisplayStyles(size, fontsize);
  }
}
