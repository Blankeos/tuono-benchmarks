/** @type {import('vike/types').Config} */
export default {
  // Disable SSR caching to ensure fresh data on each request
  // Equivalent to Next.js's `export const dynamic = 'force-dynamic'`
  // config: (pageContext) => {
  //   if (pageContext.urlPathname !== '/') {
  //     return;
  //   }
  //   return {
  //     headers: {
  //       'Cache-Control': 'no-store, must-revalidate',
  //     },
  //   };
  // },
};
