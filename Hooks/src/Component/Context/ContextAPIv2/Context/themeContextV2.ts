import React from "react"
// Create Context
// Create Provider
// Create consumer

const ThemeContextv2 = React.createContext('Light')

const ThemeV2Provider = ThemeContextv2.Provider;
const ThemeV2Consumer = ThemeContextv2.Consumer;

export { ThemeContextv2, ThemeV2Provider, ThemeV2Consumer }