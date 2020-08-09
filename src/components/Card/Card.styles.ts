import AppStyles from '../../App.styles';

export default class CardStyles extends AppStyles {
  public Card: {
    height: number;
    width: number;
    fontSize: number;
    margin: number;
    textAlign: string;
    color: string;
    borderRadius: number;
    border: string;
  };

  constructor(size: number, fontSize: number) {
    super();

    this.Card = {
      height: size * 150,
      width: size * 75,
      fontSize: 7.5 * fontSize,
      margin: 20,
      textAlign: 'center',
      color: this.color[2],
      borderRadius: 12.5 * size,
      border: `2px solid ${this.color[2]}`,
    };
  }

  static CardCSSFactory(size: number, fontSize: number): CardStyles {
    return new CardStyles(size, fontSize);
  }
}
