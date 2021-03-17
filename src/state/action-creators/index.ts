import axios from 'axios';
import { Dispatch} from 'redux';
import { ActionType } from '../action-types';
import { Action } from '../actions';

export const SearchApi = (apis: string) => async (dispatch: Dispatch<Action>) => {
    dispatch({
        type: ActionType.SEARCH_API
    });
    try {
        const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${apis}`)
        // const names = data.results.map((result: any) => {
        //     return result.url;
        // })
        dispatch({type: ActionType.SEARCH_API_SUCCESS, payload: data})
    } catch (err) {
        dispatch({type: ActionType.SEARCH_API_ERROR,
            //  payload: err.message
            });
    }
}
