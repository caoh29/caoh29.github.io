import { createServer } from "miragejs"

export function makeServer() {
  let server = createServer({
    routes() {
      this.urlPrefix = 'http://localhost:4000';
      this.namespace = "api"

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
    ), { timing: 3000 })
    },
  });
  return server
}