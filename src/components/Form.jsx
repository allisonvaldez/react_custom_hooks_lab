// Import useLocalStorage custom hook from hooks folder
import { use } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

// Create a form function to work with custom hook
function Form() {
  // Connect name to localStorage
  const [name, setName] = useLocalStorage("name", "");

  // Connect serviceNumber to localStorage
  const [serviceNumber, setServiceNumber] = useLocalStorage("serviceNumber", "");

  return (
    <>
      <form style={{ display: "flex", flexDirection: "column" }}>
        <label htmlFor="name">Name:</label>
        {/* data-testid used by tests, value, and onChange as a controlled input */}
        <input
          type="text"
          data-testid={"name"}
          value={name}
          onChange={(e) => setName(e.target.value)} />
        <label htmlFor="service">Service Number:</label>
        {/* data-testid used by tests, value, and onChange as a controlled input */}
        <input
          type="text"
          data-testid={"service"}
          value={serviceNumber}
          onChange={(e) => setName(e.target.value)} />

      </form>
      {/* Display welcome otherwise get the user's name */}
      <h4>{name ? `Welcome, ${name}!` : "Enter your name"}</h4>
    </>
  );
}

// Make it globally available
export default Form