// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

// // src/setupTests.js
// import { server } from './mocks/server'
// // Establish API mocking before all tests.
// beforeAll(() => server.listen())

// // Reset any request handlers that we may add during the tests,
// // so they don't affect other tests.
// afterEach(() => server.resetHandlers())

// // Clean up after the tests are finished.
// afterAll(() => server.close())

import { createServer } from "miragejs"

let server: any;

beforeAll(() => {
  server = createServer({
    routes() {
      this.urlPrefix = 'http://localhost:4000';
      this.namespace = "api";

      this.get("/educations", () => (
        [
          {
            date: 2023,
            title: 'Computer Programming Diploma',
            text: 'Georgian College @ ILAC, Toronto, Canada',
          },
          {
            date: 2021,
            title: 'Bachelor in Mechanical Engineering',
            text: `
              Universidad Industrial de Santander, Bucaramanga, Colombia 
              My thesis consisted of the creation of a Digital Learning Object based on Numerical Methods using eXe Learning under IEEE's compliance standards
            `,
          },
          {
            date: 2014,
            title: 'High School Degree',
            text: 'Colegio Franciscano del Virrey Solís, Bucaramanga, Colombia',
          },
        ]
      ));
      
      this.get("/skills", () => (
        [
          {
            range: 70,
            name: 'React',
          },
          {
            range: 60,
            name: 'JavaScript',
          },
          {
            range: 30,
            name: 'SASS',
          },
        ]
      ));

      this.post("/skills", (_, request) => {
        const body = JSON.parse(request.requestBody);
        return {...body}
      });

      this.post("/educations", (_, request) => {
        const body = JSON.parse(request.requestBody);
        return {...body}
      });
    },
  });
})

afterAll(() => {
  server.shutdown()
})