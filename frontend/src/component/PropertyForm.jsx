
import  { useState } from "react";
import axios from "axios";

const AddPropertyForm = ({ onAdded }) => {
  const [form, setForm] = useState({
    name: "",
    type: "",
    price: "",
    location: "",
    description: "",
    image: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:5000/properties", form);
    onAdded();
    setForm({ name: "", type: "", price: "", location: "", description: "", image: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <h2 className="text-xl font-semibold mb-4 text-center">Add New Property</h2>
      {Object.keys(form).map((key) => (
        <input
          key={key}
          type="text"
          name={key}
          value={form[key]}
          onChange={(e) => setForm({ ...form, [key]: e.target.value })}
          placeholder={key.charAt(0).toUpperCase() + key.slice(1)}
          className="w-full border p-2 rounded"
          required
        />
      ))}
      <button className="bg-blue-500 w-full py-2 text-white rounded-lg hover:bg-blue-900">
        Add Property
      </button>
    </form>
  );
};

export default AddPropertyForm;
