import { useState } from 'react';
// useSelector similar to mapStateToProps
import { useTypedSelector } from '../hooks/useTypedSelector';
import { useActions } from '../hooks/useActions';

const RepositoriesList: React.FC = () => {
  const [term, setTerm] = useState('');

  // This version of searchRepositories is now already bound to the dispatch function
  // because of bindActionCreators in the useActions Hook
  // As soon as this is called, it is equivalent to the previous dispatch call:
  // dispatch(actionCreators.searchRepositories(term));
  const { searchRepositories } = useActions();

  // react redux does not know about the type of data inside our redux store
  const { data, error, loading } = useTypedSelector(
    (state) => state.repositories
  );
  console.log(data, error, loading);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    searchRepositories(term);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          value={term}
          onChange={(e) => setTerm(e.target.value)}
        />
        <button>Search</button>
      </form>

      {error && <h3>{error}</h3>}
      {loading && <h3>Loading...</h3>}
      {!error && !loading && data.map((name) => <div key={name}>{name}</div>)}
    </div>
  );
};

export default RepositoriesList;
