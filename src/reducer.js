export const  initialState = {
    basket: [],
};

export const getBasketTotal = (basket) => 
basket?.reduce((amount, item) => item.price + amount,0);

const reducer = (state, action) => {
    console.log(action);
    switch(action.type){

        case 'ADD_TO_BASKET':
            return {
                ...state,
                basket: [...state.basket,action.item],
            };
        
        case "REMOVE_FROM_BASKET":
            const index = state.basket.findIndex(
                (basketitem) => basketitem.id === action.id
              );
              let newBasket = [...state.basket];
              if (index >= 0) {
                newBasket.splice(index, 1);
              } else {
                console.warn("Cannot remove product. Not in cart");
              }
              return {
                ...state,
                basket: newBasket,
              };

        default:
            return state;

    }
};

export default reducer;