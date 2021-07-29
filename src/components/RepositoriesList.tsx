import { useState } from 'react';
import { useActions } from '../hooks/useActions'

const RepositoriesList: React.FC = () => {
  const [term, setTerm] = useState('');

  // This version of searchRepositories is now already bound to the dispatch function 
  // because of bindActionCreators in the useActions Hook
  // As soon as this is called, it is equivalent to the previous dispatch call:
  // dispatch(actionCreators.searchRepositories(term));
  const { searchRepositories } = useActions();
  

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
    </div>
  );
};

export default RepositoriesList;
