import forwardRef from "react";

const Input = forwardRef(function Input({ label }, inputRef) {
  // Todo: Accept forwarded ref and "connect" it to the <input> element
  return (
    <p className="control">
      <label>{label}</label>
      {/* Todo: "Forward" remaining props to <input> element */}
      <input ref={inputRef} />
    </p>
  );
});
