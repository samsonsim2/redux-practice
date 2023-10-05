import {call,put,takeEvery} from 'redux-saga/effects'
import { getCocktailsSuccess } from './cocktailState'

function* workGetCocktailsFetch(){
    const cocktails = yield  call(()=>fetch('https://api.thecatapi.com/v1/breeds'))
    const formattedCocktails = yield cocktails.json()
    const formattedCocktailsShortened  = formattedCocktails.slice(0,10)
 

    yield put(getCocktailsSuccess(formattedCocktailsShortened))
}

function* cocktailSaga(){
    yield takeEvery('cocktail/getCocktailsFetch',workGetCocktailsFetch)
}

export default cocktailSaga