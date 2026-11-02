import { useState, type FormEvent } from "react";
import { useNavigate } from "@tanstack/react-router";
import { Search } from "lucide-react";

export function SearchBar({ onDone }: { onDone?: () => void }) {
  const [q, setQ] = useState("");
  const navigate = useNavigate();
  const submit = (e: FormEvent) => {
    e.preventDefault();
    const query = q.trim().slice(0, 100);
    if (!query) return;
    navigate({ to: "/search", search: { q: query } });
    onDone?.();
  };
  return (
    <form className="search" onSubmit={submit} role="search">
      <Search size={16} />
      <input
        type="search"
        value={q}
        onChange={(e) => setQ(e.target.value)}
        placeholder="Search projects…"
        aria-label="Search projects"
        maxLength={100}
      />
    </form>
  );
}
