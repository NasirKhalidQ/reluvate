export const Input = ({ type, value, setState }) => {
  return (
    <input
      className="px-3 py-2 w-64 rounded-sm focus:outline-black border-2 border-black"
      type={type}
      value={value}
      onChange={(e) => setState(e.target.value)}
    />
  );
};
