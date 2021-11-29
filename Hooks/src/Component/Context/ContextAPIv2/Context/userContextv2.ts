import React from "react"
// Create Context
// Create Provider
// Create consumer

const UserContextv2 = React.createContext('Guest')

const UserV2Provider = UserContextv2.Provider;
const UserV2Consumer = UserContextv2.Consumer;

export { UserContextv2, UserV2Provider, UserV2Consumer }