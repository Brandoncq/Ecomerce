const Pagination = ({ totalPaginas, paginaActual, handlePageChange }) => {
  return (
    <nav aria-label="Pagination" className="w-full">
      <ul className="inline-flex -space-x-px text-xl p-2 w-full justify-center">
        <li>
          <button
            onClick={() => handlePageChange(Math.max(1, paginaActual - 1))}
            className="select-none flex items-center justify-center px-3 h-8 leading-tight text-gray-700 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 cursor-pointer"
          >
            <p className="flex items-center lg:hidden">◁</p>
            <p className="max-lg:hidden">◁ Anterior</p>
          </button>
        </li>
        {Array.from({ length: totalPaginas }, (_, index) => (
          <li key={index + 1}>
            <button
              onClick={() => handlePageChange(index + 1)}
              className={`select-none flex items-center justify-center px-3 h-8 leading-tight text-gray-700 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 cursor-pointer ${
                paginaActual === index + 1 ? "bg-gray-300 text-gray-700" : ""
              }`}
            >
              {index + 1}
            </button>
          </li>
        ))}
        <li>
          <button
            onClick={() =>
              handlePageChange(Math.min(totalPaginas, paginaActual + 1))
            }
            className="select-none flex items-center justify-center px-3 h-8 leading-tight text-gray-700 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 cursor-pointer"
          >
            <p className="flex items-center lg:hidden">▷</p>
            <p className="max-lg:hidden">Siguiente ▷</p>
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
