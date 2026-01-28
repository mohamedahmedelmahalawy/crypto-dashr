interface FilterInputProps {
  filter: string;
  onFilterChange: (value: string) => void;
}

function FilterInput({ filter, onFilterChange }: FilterInputProps) {
  return (
    <div className="px-4 py-2 rounded-lg grow bg-secondary">
      <input
        type="text"
        value={filter}
        onChange={(e) => onFilterChange(e.target.value)}
        placeholder="Filter coins by name or symbol"
        className="w-full focus:outline-none"
      />
    </div>
  );
}

export default FilterInput;
