function InputForm({ inputs, onChange, values }) {
  console.log(inputs);
  return (
    <div>
      {inputs.map((input, index) => (
        <input
          key={index}
          className="border-b-2 border-[var(--secondary)] block focus:outline-none w-full py-3"
          placeholder={input.placeholder}
          value={values?.[input?.name] || ""}
          onChange={(e) => onChange?.(input?.name, e.target.value)}
          type={input?.type}
          required={input.required}
        />
      ))}
    </div>
  );
}

export default InputForm;
