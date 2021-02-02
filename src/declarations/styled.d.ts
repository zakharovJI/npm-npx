import "styled-components";

declare module "styled-components" {
  export interface TitleTheme {
    mobile?: {
      fontSize: string;
      lineHeight: string;
    };
    tablet?: {
      fontSize: string;
      lineHeight: string;
    };
    desktop?: {
      fontSize: string;
      lineHeight: string;
    };
  }

  export interface ParagraphTheme {
    16?: {
      mobile: {
        fontSize: string;
        lineHeight: string;
      };
    };
    20?: {
      mobile: {
        fontSize: string;
        lineHeight: string;
      };
    };
  }
}
