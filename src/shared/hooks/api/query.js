import { useCallback } from 'react';

import { useQuery } from '@tanstack/react-query';
import api from 'shared/utils/api';
import { objectToQueryString } from 'shared/utils/url'

const useClientQuery = (url, options = {}, key) => {
  const makeRequest = useCallback(
    () =>
    new Promise((resolve, reject) => {

        api['get'](url, options).then(
          data => {
            resolve(data);
          },
          error => {
            reject(error);
          },
        );
      }),
    [url],
  );
  return useQuery([key || `${url}?${objectToQueryString(options)}`],
  () => makeRequest()
  )
};

export default useClientQuery;
