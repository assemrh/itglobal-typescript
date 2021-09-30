import { useState, useEffect } from 'react';
// API
import API from '../API';
//Types
import  { User } from '../Types/Types'
// Helpers
import { isPersistedState } from '../helpers';

/*
    results: User[];
    total_results: number;
    page: number;
 */

const initialState = {
  results: [] as User[],
  total_results: 0,
  page: 0
};

export const useHomeFetch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [state, setState] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [isLoadingMore, setIsLoadingMore] = useState(false);


  const fetchUsers = async (page: number, searchTerm = '') => {
    try {
      setError(false);
      setLoading(true);

      const users = await API.fetchUsers(searchTerm, page);

      console.log('users',users);
      setState({
        results: [...users],
        total_results: users.length,
        page: 1
      });
    } catch (error) {
      setError(true);
    }
    setLoading(false);
  };

  // Search and initial
  useEffect(() => {
    if (!searchTerm) {
      const sessionState = isPersistedState('homeState');

      if (sessionState) {
        console.log('Grabbing from sessionStorage');
        setState(sessionState);
        return;
      }
    }
    console.log('Grabbing from API');
    setState(initialState);
    fetchUsers(1, searchTerm);
  }, [searchTerm]);

  // Load More
  useEffect(() => {
    if (!isLoadingMore) return;

    fetchUsers(state.page + 1, searchTerm);
    setIsLoadingMore(false);
  }, [isLoadingMore, searchTerm, state.page]);

  // Write to sessionStorage
  useEffect(() => {
    if (!searchTerm) sessionStorage.setItem('homeState', JSON.stringify(state));
  }, [searchTerm, state]);
  return { state, loading, error };
};
