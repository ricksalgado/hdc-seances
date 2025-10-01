import { useNavigate } from "react-router-dom";
import { nomesAlimentos } from "../types";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
import styles from './CalculadoraChurrasco.module.css';

const esquemaValidacao = Yup.object().shape({
  people: Yup.number().min(1, "Number of people is necessary"),
  selecaoAlimentos: Yup.array().of(Yup.string()).test(
    "check-selecaoAlimentos",
    "Select one kind of meat at least",
    (array) => array !== null && array!.length > 0
  ),
})

const CalculadoraChurrasco = () => {

  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <Formik initialValues={{ people: 0, selecaoAlimentos: [] }} validationSchema={esquemaValidacao} onSubmit={(values) => {
        navigate("/resultado", {
          state: {
            pessoas: values.people,
            selectedMEat: values.selecaoAlimentos,
          }
        })
        console.log(values.people, values.selecaoAlimentos)
      }} >
        {({ errors, touched }) => (
          <Form>
            <div className={styles.inputGroup}>
              <label htmlFor="people" className={styles.inputLabel} >Number of participants</label>
              <Field name="people" type="number" className={styles.inputField} />
              {errors.people && touched.people ? (
                <p className={styles.error}> {errors.people} </p>
              ) : null}
            </div>
            <h2>Select the meat for the barbecue:</h2>
            {
              Object.keys(nomesAlimentos).map((alimento) => (
                <div>
                  <Field name="selecaoAlimentos" type="checkbox" value={alimento} className={styles.checkboxInput} />
                  <label htmlFor="selecaoAlimentos">{nomesAlimentos[alimento]}</label>

                </div>
              ))}
            {errors.selecaoAlimentos && touched.selecaoAlimentos ? (
              <p className={styles.error}>{errors.selecaoAlimentos}</p>
            ) : null}
            <button type="submit" className={styles.calculateButton}>Calcular</button>
          </Form>)}
      </Formik>
    </div >
  )
}

export default CalculadoraChurrasco
