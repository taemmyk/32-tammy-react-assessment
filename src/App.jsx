export default function App() {
  return (
    <>
      <div className="min-h-screen flex flex-col bg-green-950">
        <navbar className="w-full p-6 bg-lime-900 font-semibold text-lime-100">
          <ul className="flex gap-6 justify-end">
            <li>Home</li>
            <li>Owner</li>
          </ul>
        </navbar>
      </div>
    </>
  );
}
