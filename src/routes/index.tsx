import { createFileRoute } from "@tanstack/react-router";
import { greet } from "../utils/greet";

export const Route = createFileRoute("/")({
  loader: () => greet({ data: { name: "test" } }),
  component: Home,
});

function Home() {
  const { message } = Route.useLoaderData();

  return (
    <div className="p-8">
      <p className="mt-4 text-lg">{message}</p>
    </div>
  );
}
