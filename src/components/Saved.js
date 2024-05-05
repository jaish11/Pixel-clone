import React from 'react'
import Loader from './Loader';

import { MdOutlineVerticalAlignTop } from "react-icons/md";

const Saved = ({saved,loader}) => {
  return (
    <>
      <div className="container-fluid text-center" id="top">
        {loader | saved.length === 0 ? (
          <Loader />
        ) : (
          <>
            <div className="flex">
              {saved.map((image) => (
                <div
                  key={image.id}
                  className="items"
               
                >
                  <img src={image.src.medium} alt={image.photographer} />
                </div>
              ))}
            </div>
          </>
        )}

        {saved.length !== 0 && (
          <a href="#top" className="btn btn-warning my-5">
            <MdOutlineVerticalAlignTop />
          </a>
        )}
      </div>
    </>
  );
}

export default Saved