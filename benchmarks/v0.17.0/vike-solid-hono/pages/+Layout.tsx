import type { FlowProps } from "solid-js";

export default function RootLayout(props: FlowProps) {
  return (
    <html lang="en">
      <body>{props.children}</body>
    </html>
  );
}
