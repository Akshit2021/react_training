import {createStore, combineReducers, bindActionCreators} from "redux"
import uuid from "uuid"

const addExpense = ({description = "", note = "", amount = 0, createdAt = 0} = {}) => ({
    type: "ADD_EXPENSE",
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        createdAt
    }
})

const removexpense = ({id} = {}) => ({
    type: "REMOVE_EXPENSE",
    id
})

const setTextfilter = (text = "") => ({
   type: "ADD_TEXT", 
   text
})

const sortbydate = () => ({
    type: "SORT_BY_DATE"
})


const sortbyamount = () => ({
    type: "SORT_BY_AMOUNT"
})

const setstartdate = (startDate) => ({
    type: "START_DATE",
    startDate
})

const setenddate = (endDate) => ({
    type: "END_DATE",
    endDate
})

//expense defualt value
const expensesReducerdefault = [];

//expense reducer
const expensesReducer = (state = expensesReducerdefault ,action) => {
    switch(action.type){
        case "ADD_EXPENSE": 
        return [
            ...state,
            action.expense
        ]
        case "REMOVE_EXPENSE":
            return state.filter(({ id })=> id !== action.id)
        default:
            return state;
    }
}


//Filter defualt value
const filterReducerdefault = {
    text: "",
    sortBy: "amount",
    startDate: undefined,
    endDate: undefined
}

//Filter reducer
const filterReducer = (state = filterReducerdefault ,action) => {
    switch(action.type){
        case "ADD_TEXT": 
        return {
            ...state,
            text: action.text
        }    
        case "SORT_BY_DATE":
            return{
                ...state,
                sortBy: "Date"
            }        
        case "SORT_BY_AMOUNT":
            return{
                ...state,
                sortBy: "amount"
            } 
        case "START_DATE":
            return{
                ...state,
                startDate: action.startDate
            } 
        case "END_DATE":
            return{
                ...state,
                endDate: action.endDate
            }        
        default:
            return state;
    }
}


//Store creation
const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filterReducer
    })
);
store.subscribe(()=>{
    console.log(store.getState());
})

// const expenseone = store.dispatch(addExpense({description: "rent is payed", amount: 100}));
// store.dispatch(addExpense({description: "Cofee", amount: 400}));

// store.dispatch(removexpense({id:expenseone.expense.id}))

// store.dispatch(setTextfilter("rent"));

// store.dispatch(sortbydate());
// store.dispatch(sortbyamount());

store.dispatch(setstartdate(125));
store.dispatch(setstartdate());
store.dispatch(setenddate(1250));

const demostate = {
    expenses:[{
        id: "1uhu8uhu8u",
        description: "January rent",
        note: "This is paid",
        amount: 54500,
        createdAt : 0
    }],
    filters:{
        text: "rent",
        sortBy: "amount",
        startDate: undefined,
        endDate: undefined
    }
}
