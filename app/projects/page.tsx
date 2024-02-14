import {Card}  from './project_card';

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      <h1 className="text-3xl">Projects</h1>
      <div>
        <Card />
      </div>
    </main>
  );
}