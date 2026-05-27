import { createFileRoute } from "@tanstack/react-router";
import { greet } from "../utils/greet";
import { getSecret } from "../utils/secret";

export const Route = createFileRoute("/")({
  loader: () => greet({ data: { name: "test" } }),
  component: Home,
});

function Home() {
  const { message } = Route.useLoaderData();

  const handleClick = async () => {
    const result = await getSecret();
    console.log("サーバからの秘密:", result.secret);
  };

  return (
    <div className="p-8">
      <p className="mt-4 text-lg">{message}</p>
      <button onClick={handleClick} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">
        秘密を取得
      </button>
    </div>
  );
}
