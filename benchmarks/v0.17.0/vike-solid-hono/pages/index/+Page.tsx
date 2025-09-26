import { useData } from "vike-solid/useData";
import type { Data } from "./+data";

export default function Page() {
  const data = useData<Data>();

  return <h1>The random number is: {data.randomData}</h1>;
}
