function InputForm({ inputs }) {
  return (
    <div>
      {inputs.map((input, index) => (
        <input
          key={index}
          className="border-b-2 border-[var(--secondary)] block focus:outline-none w-full py-3"
          placeholder={input.placeholder}
        ></input>
      ))}
    </div>
  );
}

export default InputForm;
