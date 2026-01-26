interface LimitSelectorPorps {
  limit: number;
  onLimitChange: (value: number) => void;
}

function LimitSelector({ limit, onLimitChange }: LimitSelectorPorps) {
  return (
    <div>
      <label htmlFor="limit">Show: </label>
      <select
        id="limit"
        value={limit}
        onChange={(e) => onLimitChange(Number(e.target.value))}
        className="appearance-none bg-secondary"
      >
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="20">20</option>
        <option value="50">50</option>
        <option value="100">100</option>
      </select>
    </div>
  );
}

export default LimitSelector;
