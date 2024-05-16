import React from 'react'
import styles from './Form.module.css'





function Form() {
    return (
        <>
            <form className={styles.form} action="" >
                <h1>Formulario Autos</h1>
                <br />
                <label htmlFor="">Marca</label>
                <input type="text" />
                <label htmlFor="">Modelo</label>
                <input type="text" />
                <label htmlFor="">Tipo</label>
                <select name="type" id="type">
                    <option value="value1">Sedan</option>
                    <option value="value2">Suv</option>
                    <option value="value3">Deportivo</option>
                    <option value="value3">Pickup</option>
                </select>
                <label htmlFor="">Imagen</label>
                <input type="file" />
                <label htmlFor="">Potencia</label>
                <input type="text" />
                <label htmlFor="">Color</label>
                <input type="color" />
                <label htmlFor="">Año de lanzamiento</label>
                <input type="text" />
                <button className={styles.button} >Enviar</button>
            </form>
        </>
    )
}

export default Form