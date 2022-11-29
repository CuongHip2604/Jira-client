import useClientQuery from './query';
import useClientMutation from './mutation';

/* eslint-disable react-hooks/rules-of-hooks */
export default {
  get: (...args) => useClientQuery(...args),
  post: (...args) => useClientMutation('post', ...args),
  put: (...args) => useClientMutation('put', ...args),
  patch: (...args) => useClientMutation('patch', ...args),
  delete: (...args) => useClientMutation('delete', ...args),
};
