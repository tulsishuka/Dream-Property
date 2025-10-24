const PropertyCard = ({ property, onView }) => (

<div className="bg-white shadow-lg rounded-xl p-4 hover:scale-105 transition-all duration-300 w-full max-w-sm mx-auto">


             <img src={property.image}alt={property.name}className="rounded-lg h-40 w-full object-cover "/>

          <div className="mt-3 flex flex-col">

           <h3 className="text-lg font-semibold text-gray-800"><span className="font-medium text-gray-500">Name: </span>{property.name}</h3>

                      <p className="text-sm text-gray-600"><span className="font-medium text-gray-500">Location: </span>{property.location}</p>
                                  <p className="text-sm text-gray-600"><span className="font-medium text-gray-500">Type: </span>{property.type}</p>

            <p className="text-base font-semibold text-blue-600"><span className="font-medium text-gray-500">Price: </span>₹{property.price.toLocaleString()}</p>
       
              <p className="text-sm text-gray-700 mt-1"><span className="font-medium text-gray-500">Description: </span>{property.description.length > 60
      ? property.description.slice(0, 60) 
      : property.description}</p>
                   <button onClick={() => onView(property)}className="mt-3 w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-md text-sm font-medium">View Details</button>
    </div>
  </div>
);

export default PropertyCard;
