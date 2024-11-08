import React from "react";

export default function Filtro({
  label,
  options,
  isRange,
  count = [],
  selectedOptions,
  handleChange,
  formatOption,
}) {
  return (
    <div className="w-full flex flex-col mt-4">
      <h3 className="text-xl lg:text-2xl">{label}</h3>
      <hr className="w-full h-px mt-2 mb-4 max-lg:bg-gray-200 bg-gray-800 border-0" />
      {options.map((option, index) => {
        const isDisabled = !count[index]?.total || count[index].total < 1;

        if (count[index]?.total === 0) {
          return null;
        }

        return (
          <div
            key={index}
            className={`w-full flex justify-between mb-4 ${
              isDisabled ? "" : "lg:hover:bg-zinc-100"
            }`}
          >
            <div className="flex items-center w-full">
              <input
                type="checkbox"
                disabled={isDisabled}
                id={`checkbox-${label.toLowerCase()}-${index}`}
                onChange={(e) =>
                  handleChange(
                    isRange ? { min: option.min, max: option.max } : option,
                    e
                  )
                }
                checked={
                  isRange
                    ? selectedOptions.some(
                        (range) =>
                          range.min === option.min && range.max === option.max
                      )
                    : selectedOptions.includes(option)
                }
                className={`w-6 h-6 text-blue-600 border-gray-300 rounded focus:ring-blue-600 ${
                  isDisabled ? "bg-black" : "bg-gray-100 cursor-pointer"
                }`}
              />
              <label
                className={`select-none ms-2 text-lg font-base flex-grow ${
                  isDisabled ? "" : "cursor-pointer"
                }`}
                htmlFor={`checkbox-${label.toLowerCase()}-${index}`}
              >
                {isRange
                  ? formatOption
                    ? formatOption(option.min, option.max)
                    : `${option.min} - ${option.max}`
                  : option}
              </label>
              <p>{count[index]?.total ?? 0}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
