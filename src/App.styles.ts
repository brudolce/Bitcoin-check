export default class AppStyles {
  public color: { 1: string; 2: string };

  public container: {
    display: string;
    alignItems: string;
    justifyContent: string;
    flexWrap: string;
  };

  public containerVert: {
    flexDirection: string;
  };

  public globalCSS: { margin: number; padding: number; fontFamily: string };

  constructor() {
    this.color = {
      1: 'rgb(20, 100, 180)',
      2: 'rgb(202, 236, 253)',
    };
    this.container = {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexWrap: 'wrap',
    };
    this.containerVert = {
      flexDirection: 'column',
    };
    this.globalCSS = { margin: 0, padding: 0, fontFamily: 'sans-serif' };
  }

  static factory(): AppStyles {
    return new AppStyles();
  }
}
