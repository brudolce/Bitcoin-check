import AppStyles from '../../App.styles';

export default class CoolButtonStyles extends AppStyles {
  public CoolButton: {
    borderRadius: number;
    border: string;
    width: number;
    height: number;
    fontSize: number;
    backgroundColor: string;
    color: string;
  };

  constructor(sizeReference: number) {
    super();

    this.CoolButton = {
      borderRadius: 12.5 * sizeReference,
      border: `2px solid ${this.color[1]}`,
      width: 100 * sizeReference,
      height: 25 * sizeReference,
      fontSize: 7.5 * sizeReference,
      backgroundColor: this.color[2],
      color: this.color[1],
    };
  }

  // TS does not allow me to override parent methods
  static CoolButtonCSSFactory(size: number): CoolButtonStyles {
    return new CoolButtonStyles(size);
  }
}
