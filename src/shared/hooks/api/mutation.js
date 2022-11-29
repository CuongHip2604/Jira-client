
import { useMutation } from "@tanstack/react-query";
import api from "shared/utils/api";

const useClientMutation = (method, url, {
  onSuccess,
  onError
}) => {
  const makeRequest = (body) => {
    return new Promise((resolve, reject) => {

      api[method](url, body).then(
        (data) => {
          resolve(data);
        },
        (error) => {
          reject(error);
        }
      );
    });
  };

  return useMutation((body) => makeRequest(body), {
    onError: (err) => {
      onError(err)
    },
    onSuccess: (res) => {
      onSuccess(res)
    },
  });
};

export default useClientMutation;
