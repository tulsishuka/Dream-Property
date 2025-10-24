import React from 'react';
import { Dialog } from '@headlessui/react';

const PropertyModal = ({ open, onClose, property }) => {
  if (!property) return null;
  return (
                     <Dialog open={open} onClose={onClose} className="fixed inset-0 flex items-center justify-center bg-black/40">
      <Dialog.Panel className="bg-white p-6 rounded-2xl w-96 shadow-xl">
        <img src={property.image} alt={property.name} className="rounded-xl mb-4" />

            <h3 className="text-lg font-semibold text-gray-800">

                          <span className="font-medium text-gray-500">name: </span>{property.name}</h3>

                 <p className="text-sm text-gray-600"><span className="font-medium text-gray-500">location: </span>{property.location}</p>

         <p className="text-sm text-gray-600"><span className="font-medium text-gray-500">Type: </span>{property.type}</p>

                     <p className="text-base font-semibold text-blue-600"><span className="font-medium text-gray-500">Price: </span>₹{property.price.toLocaleString()}</p>

             <p className="text-sm text-gray-700 mt-1"><span className="font-medium text-gray-500">Description: </span>
    {property.description.length > 60
      ? property.description.slice(0, 60) 
      : property.description}
  </p>
               <button onClick={onClose} className="mt-4 bg-red-500 text-white w-full py-2 rounded-lg hover:bg-red-600">Close</button>
                </Dialog.Panel>
                        </Dialog>
  );
};

export default PropertyModal;
