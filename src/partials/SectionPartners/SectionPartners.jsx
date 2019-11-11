import React, { useState, useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';
import { withPrefix } from 'gatsby';
import Select from 'react-select';

import { partnersImages, partners } from 'utils/contentProvider';

import { Section } from './SectionPartners.styled';

const SectionPartners = ({ city }) => {
  const [pageNumber, setPageNumber] = useState(1);
  const [currentLocation, setCurrentLocation] = useState('Everywhere');
  const [pageSize, setPageSize] = useState(
    Math.ceil(partners[city].length / 9),
  );

  const getUniqueLocations = useCallback(() => {
    let newLocations = partners[city].map((i) => i.locality);
    newLocations = Array.from(new Set(newLocations));
    newLocations = newLocations.sort();
    newLocations = newLocations.map((i) => ({ value: i, label: i }));
    newLocations.unshift({ value: 'Everywhere', label: 'Everywhere' });
    return newLocations;
  }, [partners]);

  const getResults = useCallback(() => {
    let perLocation = partners[city].filter(
      (i) => i.locality === currentLocation,
    );

    if (currentLocation === 'Everywhere') perLocation = partners[city];

    const perPage = perLocation.slice(
      (pageNumber - 1) * 9,
      (pageNumber - 1) * 9 + 9,
    );
    return perPage;
  }, [partners, pageNumber, currentLocation]);

  function changeCurrentLocationHandler(value) {
    setCurrentLocation(value.value);
    setPageNumber(1);
  }

  function changePageNumberHandler(e) {
    setPageNumber(Number(e.target.innerText));
  }

  function shouldDisplayPaginationNumber(i) {
    if (
      i === 0 ||
      i === pageSize - 1 ||
      i === pageNumber - 1 ||
      i === pageNumber - 2 ||
      i === pageNumber - 3 ||
      i === pageNumber ||
      i === pageNumber + 1
    )
      return true;
    return false;
  }

  useEffect(() => {
    if (currentLocation !== 'Everywhere') {
      const perLocation = partners[city].filter(
        (i) => i.locality === currentLocation,
      );
      setPageSize(Math.ceil(perLocation.length / 9));
    } else setPageSize(Math.ceil(partners[city].length / 9));
  }, [currentLocation]);

  return (
    <Section>
      <div className="container">
        <h2 className="align-center heading-underline">Our Partners</h2>
        <div className="items">
          {partnersImages[city].map((i) => (
            <img
              key={i}
              src={withPrefix(`/static/partners/logos/${i}-logo.png`)}
              alt={`${i} logo`}
            />
          ))}
        </div>
        <div className="facilities">
          <div className="facilities-dropdown align-center">
            <span className="bold">Find facilities in</span>
            <Select
              options={getUniqueLocations()}
              onChange={changeCurrentLocationHandler}
              styles={{
                control: (provided) => ({
                  ...provided,
                  borderRadius: 3,
                }),
              }}
              defaultValue={{ value: 'Everywhere', label: 'Everywhere' }}
              theme={(theme) => ({
                ...theme,
                borderRadius: 0,
                colors: {
                  ...theme.colors,
                  primary25: '#efefef',
                  primary: '#eb1f2e',
                },
              })}
            />
          </div>
          <div className="facilities-items-container">
            <div className="facilities-items">
              {getResults().map((i) => (
                <div key={i.id} className="facilities-item">
                  <h3 className="red">{i.facilityName}</h3>
                  <p className="locality">{`${i.locality}, ${city}`}</p>
                  <ul className="activities">
                    {i.activities
                      .split(',')
                      .map((a) =>
                        a.length > 0 ? (
                          <li key={a}>{a}</li>
                        ) : (
                          <React.Fragment key={a}></React.Fragment>
                        ),
                      )}
                  </ul>
                </div>
              ))}
            </div>
            <div className="pagination align-center">
              <ul>
                {[...Array(pageSize)]
                  .map((x, i) => i)
                  .map((i) =>
                    shouldDisplayPaginationNumber(i) ? (
                      <li
                        key={i}
                        className={pageNumber === i + 1 ? 'active' : ''}>
                        <button
                          type="button"
                          className="button-unstyled"
                          onClick={changePageNumberHandler}>
                          {i + 1}
                        </button>
                      </li>
                    ) : (
                      <>
                        {((i === 1 && pageNumber > 4) ||
                          (i === pageSize - 2 && pageNumber < pageSize)) && (
                          <li className="dots">..</li>
                        )}
                      </>
                    ),
                  )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

SectionPartners.propTypes = {
  city: PropTypes.string.isRequired,
};

export default SectionPartners;
