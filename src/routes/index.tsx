import { createFileRoute } from "@tanstack/react-router";
import { PuspitApp } from "@/components/puspit/shell";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return <PuspitApp />;
}
