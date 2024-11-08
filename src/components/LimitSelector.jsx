const LimitSelector = ({ options, onLimitChange }) => {
  return (
    <nav aria-label="Limit selector" className="w-full">
      <ul className="inline-flex -space-x-px text-sm p-2">
        {options.map((limit) => (
          <li key={limit}>
            <a
              onClick={() => onLimitChange(limit)}
              className="select-none flex items-center justify-center px-3 h-8 leading-tight text-white border-l border-gray-300 hover:bg-gray-100 hover:text-black cursor-pointer"
            >
              {limit}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default LimitSelector;
