# 🐇 Solid Hop - Benchmark Edition

Minimal Vike + Solid + Hono implementation for performance benchmarking against Next.js App Router.

This implementation matches the simplicity of the Next.js App Router benchmark:

- Single page with server-side data fetching
- Random number generated on each request
- Minimal layout structure
- No client-side interactivity for fair comparison

## Comparison with Next.js App Router

This benchmark app implements the exact same functionality as the Next.js App Router benchmark:

```tsx
// Same server-side data fetching
export const mockServerSideAPI = async (): Promise<{ data: number }> => {
  return {
    data: Math.floor(Math.random() * 10),
  };
};

// Same page output
export default async function Home(): Promise<JSX.Element> {
  const { data } = await mockServerSideAPI();
  return <h1>The random number is: {data}</h1>;
}
```

## Development

```bash
# Install
bun install

# Run dev server
bun dev
```

## Build and Deployment

```bash
# Build
bun run build

# Production start
bun start
```
