import AppStyles from '../../App.styles';

export default class DisplayStyles extends AppStyles {
  public Display: {
    margin: number;
    textAlign: string;
    color: string;
  };

  constructor() {
    super();

    this.Display = {
      margin: 20,
      textAlign: 'center',
      color: this.color[2],
    };
  }

  static DisplayCSSFactory(): DisplayStyles {
    return new DisplayStyles();
  }
}
