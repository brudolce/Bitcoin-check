import AppStyles from '../../App.styles';

export default class PageStyles extends AppStyles {
  public Page: {
    backgroundImage: string;
    backgrounRepeat: string;
    backgroundSize: string;
    minHeight: string;
    width: string;
  };

  constructor(backgroundURL: string) {
    super();

    this.Page = {
      backgroundImage: `url(${backgroundURL})`,
      backgrounRepeat: 'no-repeat',
      backgroundSize: 'auto',
      minHeight: '100vh',
      width: '100vw',
    };
  }

  static PageCSSFactory(backgroundURL: string): PageStyles {
    return new PageStyles(backgroundURL);
  }
}
