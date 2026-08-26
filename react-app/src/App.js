import { useState, useMemo } from 'react';
import accounts from './data/Account_Sample_Data.json';
import AccountCard from './components/AccountCard';
import './App.css';

function App() {
  const [search, setSearch] = useState('');
  const [sortField, setSortField] = useState('Name');
  const [sortDirection, setSortDirection] = useState('asc');

  const filteredAccounts = useMemo(() => {
    let result = accounts.filter(acc =>
      acc.Name.toLowerCase().includes(search.toLowerCase()) ||
      acc.Industry.toLowerCase().includes(search.toLowerCase())
    );

    result = [...result].sort((a, b) => {
      const valA = a[sortField].toLowerCase();
      const valB = b[sortField].toLowerCase();
      const dir = sortDirection === 'asc' ? 1 : -1;
      return valA < valB ? -1 * dir : valA > valB ? 1 * dir : 0;
    });

    return result;
  }, [search, sortField, sortDirection]);

  const toggleSort = (field) => {
    if (sortField === field) {
      setSortDirection(d => d === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('asc');
    }
  };

  return (
    <div className="App">
      <h1>Account Explorer</h1>
      <input
        type="search"
        placeholder="Search by name or industry..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-input"
      />
      <div className="sort-buttons">
        <button onClick={() => toggleSort('Name')}>Sort by Name</button>
        <button onClick={() => toggleSort('Industry')}>Sort by Industry</button>
      </div>

      {filteredAccounts.length === 0 ? (
        <p className="empty-state">No accounts found.</p>
      ) : (
        <div className="account-list">
          {filteredAccounts.map(acc => (
            <AccountCard key={acc.Name} account={acc} />
          ))}
        </div>
      )}
    </div>
  );
}

export default App;