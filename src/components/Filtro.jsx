import React from "react";

export default function Filtro({
  label,
  options,
  isRange,
  selectedOptions,
  handleChange,
  formatOption,
}) {
  return (
    <div className="w-full flex flex-col mt-4">
      <h3 className="text-xl lg:text-2xl">{label}</h3>
      <hr className="w-full h-px mt-2 mb-4 max-lg:bg-gray-200 bg-gray-800 border-0" />

      {options.map((option, index) => (
        <div
          key={index}
          className="w-full flex justify-between lg:hover:bg-zinc-100 mb-4"
        >
          <div className="flex items-center w-full">
            <input
              type="checkbox"
              id={`checkbox-option-${index}`}
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
              className="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 cursor-pointer"
            />
            <label
              className="ms-2 text-lg font-base cursor-pointer flex-grow"
              htmlFor={`checkbox-option-${index}`}
            >
              {isRange
                ? formatOption
                  ? formatOption(option.min, option.max)
                  : `${option.min} - ${option.max}`
                : option}
            </label>
          </div>
        </div>
      ))}
    </div>
  );
}
