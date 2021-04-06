import React, {
  createContext,
  useReducer,
  useContext,
  useState,
  useEffect,
} from "react";
import api from "../../../api";

const GamesContext = createContext();
export const ActionTypes = {
  onFilterChange: "onFilterChange",
  onSortingChange: "onSortingChange",
  onSearchChange: "onSearchChange",
};

const reducer = (state, action) => {
  switch (action.type) {
    case ActionTypes.onFilterChange:
      return {
        ...state,
        filters: {
          ...state.filters,
          [action.payload.filterBy]: action.payload.value,
        },
      };
    case ActionTypes.onSearchChange:
      return {
        ...state,
        search: action.payload,
      };

    case ActionTypes.onSortingChange:
      return {
        ...state,
        sorting: action.payload,
      };

    default:
      return state;
  }
};
const initial = {
  filters: {
    genre: [],
    status: [],
  },
  sorting: {
    name: "low",
  },
  search: "",
};

export const GamesProvider = ({ children, games }) => {
  const [data, setData] = useState();
  const [filters, setFilters] = useReducer(reducer, initial);
  const [filteredData, setfilteredData] = useState();
  useEffect(() => {
    if (games) {
      setData(arrangeData(games, filters.sorting));
    }
  }, [games]);
  useEffect(() => {
    if (games) {
      let filtered = multiPropsFilter(
        games,
        filters.filters,
        filters.sorting,
        filters.search
      );

      setData(filtered.products);
    }
  }, [filters]);

  return (
    <GamesContext.Provider
      value={{
        data,
        setFilters,
      }}
    >
      {children}
    </GamesContext.Provider>
  );
};

export const useGamesContext = () => useContext(GamesContext);

const multiPropsFilter = (products, filters, sorting, search) => {
  const filterKeys = Object.keys(filters);
  let productsFiltered;

  productsFiltered = products.filter((product) => {
    return filterKeys.every((key) => {
      if (!filters[key].length) return true;

      return filter(product, key, filters);
    });
  });
  debugger;
  if (search.length > 0) {
    productsFiltered = productsFiltered.filter((item) => {
      return item.name.toLowerCase().includes(search.toLowerCase());
    });
  }

  return {
    products: arrangeData(productsFiltered, sorting),
    total: productsFiltered.length,
  };
};

function filter(product, key, filters) {
  if (Array.isArray(product[key])) {
    return product[key].some((keyEle) => {
      return filters[key].includes(keyEle);
    });
  }

  return filters[key].includes(product[key]);
}

function sortData(data, type) {
  let sorted = Object.keys(data).sort();
  if (type.name === "high") sorted.reverse();

  sorted = sorted.reduce(function (acc, key) {
    acc[key] = data[key];
    return acc;
  }, {});

  return sorted;
}
const arrangeData = (data, sortType) => {
  const datalast = data.reduce(function (finalObj, item) {
    let letter = item.name.split("")[0].toUpperCase();
    if (!finalObj[letter]) {
      finalObj[letter] = [];
    }

    finalObj[letter] = [...finalObj[letter], item];
    return finalObj;
  }, {});

  return sortData(datalast, sortType);
};
