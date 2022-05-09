const App = () => {
  const mils = [
    { id: 1, text: "육군" },
    { id: 2, text: "해군" },
    { id: 3, text: "공군" },
  ];

  return (
    <ul>
      {mils.map((mil) => (
        <li key={mil.id}>{mil.text}</li>
      ))}
    </ul>
  );
};

export default App;
