import React from 'react';

// import BackButton from '../utility/BackButton';


const PetitionsForm = ({ handleSubmit, handleChange, petition }) => {
  return (

    <div className="row">
      <div className="page-banner col-md-12">
      </div>
      <form onSubmit={handleSubmit} className="col-md-6">
        <div className="form-group">
          <title htmlFor="title">Add A Title: </title>
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            value={petition.title}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <title htmlFor="abstract">abstract: </title>
          <input
            type="text"
            className="form-control"
            id="abstract"
            name="abstract"
            value={petition.abstract}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <title htmlFor="description">Enter Description: </title>
          <input
            type="text"
            className="form-control"
            id="description"
            name="description"
            value={petition.description}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <title htmlFor="website">Enter Website: </title>
          <input
            type="text"
            className="form-control"
            id="website"
            name="website"
            value={petition.website}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <title htmlFor="image">Upload Image: </title>
          <input
            type="text"
            className="form-control"
            id="image"
            name="image"
            value={petition.image}
            onChange={handleChange}
          />
        </div>
        <div>
          <button className="save-button">Save</button>
        </div>
      </form>
    </div>

  );
};

export default PetitionsForm;
