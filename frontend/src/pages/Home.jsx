
import React, { useEffect, useState } from "react";
import axios from "axios";

            import PropertyCard from "../component/PropertyCard.jsx";
                  import AddPropertyForm from "../component/PropertyForm.jsx";

         import PropertyModal from "../component/Property.jsx";

            import { Dialog } from "@headlessui/react";

         const Home = () => {
  const [properties, setProperties] = useState([]);
  const [search, setSearch] = useState("");
  const [Filter, setFilter] = useState("");
  const [selected, setSelected] = useState(null);
  const [openForm, setOpenForm] = useState(false);

           const fetchData = async () => {
                 const res = await axios.get("http://localhost:3000/properties");
                    setProperties(res.data);
            };

         useEffect(() => {
                fetchData();}, []);

  const filtered = properties.filter(
    (p) =>(p.name.toLowerCase().includes(search.toLowerCase()) ||p.location.toLowerCase().includes(search.toLowerCase())) &&(Filter === "" || p.type === Filter));

  return (
    <div className="min-h-screen bg-blue-200 p-6 relative">

      <h1 className="text-3xl font-bold  mb-6">Find Your Dream Property</h1>

      <div className="flex flex-col md:flex-row  gap-4 mb-6">

        <input type="text" placeholder="find property"value={search}onChange={(e) => setSearch(e.target.value)}className="border p-2 rounded-lg w-64"/>

        <select value={Filter}onChange={(e) => setFilter(e.target.value)}className="border p-2 rounded-lg w-48">

          <option value="">All Types</option>
           <option value="apertmant">Apartment</option>
              <option value="villa">Villa</option>
               <option value="house">House</option>
        </select>
      </div>

     
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {filtered.map((p) => (
          <PropertyCard key={p.id} property={p} onView={setSelected} />
        ))}
      </div>

   
      <button onClick={() => setOpenForm(true)}className="fixed bottom-6 left-6 bg-blue-900 hover:bg-gray-900 text-white font-semibold px-4 py-3 rounded-full shadow-lg">add Property</button>

      <Dialog open={openForm} onClose={() => setOpenForm(false)} className="fixed inset-0 flex items-center justify-center bg-black/40">
        <Dialog.Panel className="bg-white p-6 rounded-2xl w-[400px] shadow-xl">
        
          <AddPropertyForm onAdded={() => {fetchData();setOpenForm(false);}}/>

        </Dialog.Panel>
      </Dialog>

     
      <PropertyModal open={!!selected} onClose={() => setSelected(null)} property={selected} />
    </div>
  );
};

export default Home;
