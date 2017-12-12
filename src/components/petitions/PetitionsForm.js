import React from 'react';

import BackButton from '../utility/BackButton';


const PetitionsForm = ({ handleSubmit, handleChange, petition, history }) => {
  return (

    <div className="row">
      <div className="page-banner col-md-12">
      </div>
      <BackButton />
      <form onSubmit={handleSubmit} className="col-md-6">
        <div className="form-group">
          <title htmlFor="title">Add A Title: </title>
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            placeholder="title"
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
            placeholder="abstract"
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
            placeholder="description"
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
            placeholder="website"
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
            placeholder="image"
            value={petition.image}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <title htmlFor="endDate">End Date: </title>
          <input
            type="date"
            className="form-control"
            id="endDate"
            name="endDate"
            placeholder="endDate"
            value={petition.endDate}
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
