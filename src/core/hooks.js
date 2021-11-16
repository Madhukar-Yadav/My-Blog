import { Services } from '../core/Services';
import { API, JSON_HEADER } from '../config';

export const fetchAJoke = () => {
  const config = {
    method: 'GET',
    mode: 'cors',
    headers: Object.assign({}, JSON_HEADER),
    cache: 'default',
  };
  return fetch(API.jokeApi, config)
  .then(response => response.json());
};

export const useFetchJoke = async () => {
    try {
        let endPoint = API.jokeApi;
        // dispatch(requestBusinessPartnerDetails());
        try {
          return Services.fetchRecords(endPoint, null, true).then(res => {
            if (res) {
            //   dispatch(recieveBusinessPartnerDetails(res));
              return res;
            }
            // dispatch(requestBusinessPartnerDetailsError(res));
          });
        } catch (err) {
          console.log(err);
        //   dispatch(requestBusinessPartnerDetailsError(err));
        }
    } catch (err) {
        return err;
    }
};
