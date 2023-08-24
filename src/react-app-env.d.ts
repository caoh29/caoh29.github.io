/// <reference types="react-scripts" />

declare namespace NodeJS {
  interface ProcessEnv {
    REACT_APP_USERNAME: string;
    REACT_APP_PASSWORD: string;
    REACT_APP_TOKEN: string;
    // Add more variables as needed
  }
}
