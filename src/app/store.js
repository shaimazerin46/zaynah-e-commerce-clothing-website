import { featureApi } from "@/services/feature";
import { productApi } from "@/services/product";
import { slidersApi } from "@/services/slider";
import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from '@reduxjs/toolkit/query'

export const store = configureStore({
    reducer: {
        [slidersApi.reducerPath] : slidersApi.reducer,
        [featureApi.reducerPath] : featureApi.reducer,
        [productApi.reducerPath] : productApi.reducer,
    },

    // for caching, invalidation, polling
     middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
     .concat(slidersApi.middleware)
     .concat(featureApi.middleware)
     .concat(productApi.middleware)

});

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
// setupListeners(store.dispatch)