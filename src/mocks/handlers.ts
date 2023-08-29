import { rest } from 'msw';

export const handlers = [
  rest.get('http://localhost:4000/api/skills', (req, res, ctx) => {
    return res(
      ctx.status(200), 
      ctx.json([
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
      ]) 
    )
  }),
  rest.get('http://localhost:4000/api/educations', (req, res, ctx) => {
    return res(
      ctx.status(200), 
      ctx.json([
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
      ]), 
    )
  }),
  rest.post('http://localhost:4000/api/skills', async (req, res, ctx) => {
    const body = await req.json();
    return res(
      ctx.status(200), 
      ctx.json(body)
    )
  }),
  rest.post('http://localhost:4000/api/educations', async (req, res, ctx) => {
    const body = await req.json();
    return res(
      ctx.status(200), 
      ctx.json(body)
    )
  }),
];