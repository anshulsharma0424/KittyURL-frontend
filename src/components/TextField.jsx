const TextField = ({
  label,
  id,
  type = "text",
  errors = {},
  register,
  required = false,
  message = "This field is required",
  className = "",
  min,
  value,
  placeholder,
}) => {
  const getValidationRules = () => {
    const rules = { required: required && { value: true, message } };

    if (min) {
      rules.minLength = { value: min, message: `Minimum ${min} characters required` };
    }

    if (type === "email") {
      rules.pattern = {
        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        message: "Invalid email address",
      };
    }

    if (type === "url") {
      rules.pattern = {
        value: /^(https?:\/\/)?([\w-]+\.)+[\w-]{2,}(\/[\w-./?%&=]*)?$/,
        message: "Please enter a valid URL",
      };
    }

    return rules;
  };

  return (
    <div className="flex flex-col gap-1">
      {label && (
        <label
          htmlFor={id}
          className={`font-semibold text-md ${className}`}
        >
          {label}
        </label>
      )}

      <input
        type={type}
        id={id}
        placeholder={placeholder}
        className={`px-3 py-2 border rounded-md outline-none text-slate-700 bg-transparent transition-colors ${
          errors[id]?.message ? "border-red-500" : "border-slate-600"
        } ${className}`}
        {...register(id, getValidationRules())}
      />

      {errors[id]?.message && (
        <p className="text-sm font-semibold text-red-600 mt-0">
          {errors[id].message}*
        </p>
      )}
    </div>
  );
};

export default TextField;
