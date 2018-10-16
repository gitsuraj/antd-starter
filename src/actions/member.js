import ErrorMessages from '../constants/errors'
import {http} from '../libs/http';
import {LOGIN_URL} from '../constants/apiUrl';

export function login(formData) {
    const {
      username,
      password,
    } = formData;
  
    return dispatch => new Promise(async (resolve, reject) => {
      if (!username) return reject({ message: ErrorMessages.requiredUsername });
      if (!password) return reject({ message: ErrorMessages.requiredPassword });
      const response = await http.post(LOGIN_URL,formData);
      if(response && response.body){
        return resolve(dispatch({
            type: 'USER_LOGIN',
            data: response.body,
          }));
      }
    }).catch(async (err) => {
      throw err.message;
    });
  }