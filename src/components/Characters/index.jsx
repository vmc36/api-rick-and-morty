export const CharactersCard = ({ characters }) => {
  return (
    <>
      <div className="grid h-full grid-cols-4 gap-2 p-10">
        {characters.map(({ id, name, image, status, species, origin }) => (
          <div key={id}>
            <div className=" flex h-full flex-col items-center rounded-md bg-slate-400 p-3 text-white">
              <img src={image} alt={name} />
              <div className="text-center">
                <h1>Name: {name}</h1>
                <h2>Life Status:{status}</h2>
                <p>Species: {species}</p>
                <p>Origin: {origin.name}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      ;
    </>
  );
};
