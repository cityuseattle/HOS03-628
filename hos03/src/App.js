let guest = 0;

function Cup() {
  guest = guest + 1;
  return <h2>Guest #{guest}</h2>;
}

export default function App() {
  return (
    <div>
      <Cup />
      <Cup />
      <Cup />
    </div>
  );
}