import React from "react";

const Latihan = () => {
  return (
    <div className="container mt-10 mx-auto bg-slate-400 max-w-7xl h-[40vh]">
      <div className="card w-96 bg-blue-400 shadow-xl rounded-lg mt-5">
        <figure>
          <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Latihan;
