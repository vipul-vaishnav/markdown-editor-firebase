import React, { useState, useEffect } from 'react';
import SearchIcon from './../icons/SearchIcon';
import FilterIcon from './../icons/FilterIcon';
import FilterWindow from './FilterWindow';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import Loader from './Loader';
import { getDocsFromDB, clearState } from '../features/doc/docSlice';
import StarredIcon from './../icons/StarredIcon';
import StarredIconTrue from './../icons/StarredIconTrue';
import MoreIcon from './../icons/MoreIcon';

const List = () => {
  const [query, setQuery] = useState('');
  const [showFilterWindow, setShowFilterWindow] = useState(false);
  const { docs, isLoading, isError, message } = useSelector((state) => state.doc);
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDocsFromDB(user?.uid));
  }, [dispatch, user?.uid]);

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    dispatch(clearState());
  }, [isError, dispatch, message]);

  const convertTimestamp = (dateStr) => {
    const fireBaseTime = new Date(dateStr);
    const day = fireBaseTime.getDate() < 10 ? `0${fireBaseTime.getDate()}` : fireBaseTime.getDate();
    const month = fireBaseTime.getMonth() < 10 ? `0${fireBaseTime.getMonth()}` : fireBaseTime.getMonth();
    const year = fireBaseTime.getFullYear();

    return `${day}-${month}-${year}`;
  };

  return (
    <div className="w-full">
      <h1 className="w-full text-4xl font-bold tracking-wider text-center uppercase text-secondary sm:text-6xl">
        Your Documents
      </h1>
      <div className="relative flex items-center justify-between gap-5 my-12">
        {showFilterWindow && <FilterWindow />}
        <div className="flex items-center justify-start w-full gap-0">
          <label htmlFor="query" className="w-full h-full max-w-[50px] bg-secondary text-white p-3 rounded-l-md">
            <SearchIcon />
          </label>
          <input
            type="text"
            name="query"
            id="query"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Type here..."
            autoComplete="off"
            className="w-full max-w-xl px-3 py-2 text-lg font-medium bg-white border-2 outline-none rounded-r-md border-secondary text-back"
          />
        </div>
        <div>
          <button
            onClick={() => setShowFilterWindow((prev) => !prev)}
            className="w-full h-full max-w-[50px] bg-secondary text-white p-3 rounded-md"
          >
            <FilterIcon />
          </button>
        </div>
      </div>

      {isLoading ? (
        <Loader />
      ) : docs && docs.length === 0 ? (
        <>
          <h1>No Records Found</h1>
        </>
      ) : (
        <>
          <div className="overflow-x-auto text-back text-center">
            <table className="table table-zebra w-full">
              <thead className="text-center">
                <tr>
                  <th></th>
                  <th className="text-left">Name</th>
                  <th className="text-left">Document ID</th>
                  <th>Created At</th>
                  <th>Starred</th>
                  <th>Open In Editor</th>
                </tr>
              </thead>
              <tbody>
                {docs.map((doc, idx) => {
                  return (
                    <tr key={idx} className="text-center">
                      <th>{idx + 1}</th>
                      <td className="text-left">{doc.name}</td>
                      <td className="text-left">{doc._id}</td>
                      <td>{convertTimestamp(doc.createdAt)}</td>
                      <td>
                        <div className="tooltip" data-tip={doc.isStarred ? 'Unmark Star' : 'Mark Star'}>
                          <button>{doc.isStarred ? <StarredIconTrue /> : <StarredIcon />}</button>
                        </div>
                      </td>
                      <td>
                        <div className="tooltip" data-tip="open in editor">
                          <button className="btn btn-circle bg-secondary outline-none border-0 hover:bg-back btn-xs">
                            <MoreIcon />
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  );
};

export default List;
