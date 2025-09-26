import { mockServerSideAPI } from "@/lib/server-side-api";

export type Data = Awaited<ReturnType<typeof data>>;

export async function data() {
  const { data: randomData } = await mockServerSideAPI();
  return { randomData };
}
