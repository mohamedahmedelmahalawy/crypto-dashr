interface SortSelectorPorps {
  sortBy: string;
  onSortChange: (value: string) => void;
}

function SortSelector({ sortBy, onSortChange }: SortSelectorPorps) {
  return (
    <div className="flex justify-end items-center gap-2 text-center">
      <label htmlFor="limit">Show: </label>
      <select
        id="limit"
        value={sortBy}
        onChange={(e) => onSortChange(e.target.value)}
        className="appearance-none color-tertiary rounded-lg px-5 outline-none"
      >
        <option value="market_cap_desc">Market Cap (Hight to Low)</option>
        <option value="market_cap_asc">Market Cap (Low to Hight)</option>
        <option value="price_desc">Price (Hight to Low)</option>
        <option value="price_asc">Price (Hight to Low)</option>
        <option value="change_desc">24h Change (Hight to Low)</option>
        <option value="change_asc">24h Change (Hight to Low)</option>
      </select>
    </div>
  );
}

export default SortSelector;
