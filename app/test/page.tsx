import { db } from "@/lib/prismaClient";

export default async function Page() {
    const messages = await db.message.findMany();
  return (
    <div>
      <h1>Test Page</h1>
      {messages.map((msg, i) => (
        <div key={msg.id}>
          <p>{i + 1} {msg.content}</p>
        </div>
      ))}
    </div>
  );
}