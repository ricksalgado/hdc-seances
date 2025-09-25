import { useNavigate } from "react-router-dom";
import { nomesAlimentos } from "../types";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";


const esquemaValidacao = Yup.object().shape({
  people:  ,
  selecaoAlimentos
})

const CalculadoraChurrasco = () => {

  const navigate = useNavigate();

  return (
    <div>
      <Formik initialValues={{ pessoas: 0, selecaoAlimentos: [] }} onSubmit={() => {
        navigate("/resultado")
        console.log('test')
      }} >
        <Form>
          <div>
            <label htmlFor="people">Number of participants</label>
            <Field name="people" type="number" />
          </div>
          <h2>Select the meat for the barbecue:</h2>
          {
            Object.keys(nomesAlimentos).map((alimento) => (
              <div>
                <Field name="selecaoAlimentos" type="checkbox" value={alimento} />
                <label htmlFor="selecaoAlimentos">{nomesAlimentos[alimento]}</label>
              </div>
            ))}
          <button type="submit">Calcular</button>
        </Form>
      </Formik>
    </div >
  )
}

export default CalculadoraChurrasco
