export {};

declare global {
  namespace Vike {
    interface Config {
      /** Disable caching for this page */
      config?: (pageContext: Record<string, any>) => {
        headers?: {
          "Cache-Control"?: string;
        };
      };
    }
  }
}
