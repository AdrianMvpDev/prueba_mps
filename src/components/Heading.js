import React from 'react';
import { Link } from 'react-router-dom'
import {IoMdAdd} from 'react-icons/io'

const Heading = () => {
  return (
    <div>
      <div className="flex items-center mb-10">
        <Link to="/">
        <h5 className="text-amarillo font-bold text-2x1"> App Cliente </h5>
        </Link>
        <div className="flex-grow text-right px-4 py-2 m-2">
            <Link to="/add">
                <button className="bg-green-400 hover:bg-green-500 text-white font-semibold py-2 px-4 rounded inline-flex items-center">
                    <IoMdAdd />
                    Añadir Cliente
                </button>
            </Link>
        </div>
      </div>
    </div>
  );
};

export default Heading;
