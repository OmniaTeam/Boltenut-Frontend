import { useState, ChangeEvent } from 'react';
import { AppHeader, AppInput, AppSubmit } from './components';
import { SVGViewer } from './components/svg-viewer';
import './app.css';

export default function App() {
    const [primaryParam, setPrimaryParam] = useState<string>('{}');
    const [firstParam, setFirstParam] = useState<string>('{}');
    const [secondParam, setSecondParam] = useState<string>('{}');
    const [thirdParam, setThirdParam] = useState<string>('{}');
    const [fourthParam, setFourthParam] = useState<string>('{}');
    const [serverResponse, setServerResponse] = useState<any>(null); // State for server response

    const handleResponse = (data: any) => {
        setServerResponse(data);
    };

    const handlerSubmit = () => {
        const data = {
            nominal_diameter: parseFloat(primaryParam),
            bolt_allowance: thirdParam,
            nut_middle_allowance: firstParam,
            nut_inner_allowance: secondParam
        };

        fetch('https://boltenut.theomnia.ru/api/calculate', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            handleResponse(data); // Set the response to state
        })
        .catch(error => {
            console.error('Error:', error);
        });
    };

    return (
        <>
            <AppHeader />
            <div className="application">
                <div className="app-inputs">
                    <div style={{ display: 'flex', alignItems: "center", gap: '24px', flexWrap: "wrap" }}>
                        <AppInput inputLabel={"Номинальное значение диаметров резьбы болта и гайки в мм"} inputType={"text"} inputPlaceholder={""} 
                                inputChangeHandler={(e: ChangeEvent<HTMLInputElement>) => setPrimaryParam(e.target.value)}/>
                        <AppInput inputLabel={"Поле допуска на средний диаметр (резьба болта)"} inputType={"text"} inputPlaceholder={""} 
                                inputChangeHandler={(e: ChangeEvent<HTMLInputElement>) => setFirstParam(e.target.value)}/>
                        <AppInput inputLabel={"Поле допуска на наружный диаметр (резьба болта)"} inputType={"text"} inputPlaceholder={""}
                                inputChangeHandler={(e: ChangeEvent<HTMLInputElement>) => setSecondParam(e.target.value)}/>
                        <AppInput inputLabel={"Поле допуска на средний диаметр (резьба гайки)"} inputType={"text"} inputPlaceholder={""} 
                                inputChangeHandler={(e: ChangeEvent<HTMLInputElement>) => setThirdParam(e.target.value)}/>
                        <AppInput inputLabel={"Поле допуска на наружный диаметр (резьба гайки)"} inputType={"text"} inputPlaceholder={""}
                                inputChangeHandler={(e: ChangeEvent<HTMLInputElement>) => setFourthParam(e.target.value)}/>
                        <div className="formule">
                            <p className="formule__title">Формула</p>
                            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                                <p>M{primaryParam}</p>
                                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "4px" }}>
                                    <p>{firstParam} {secondParam}</p>
                                    <div style={{ width: "100%", height: "1px", backgroundColor: "#1e2248" }}></div>
                                    <p>{thirdParam} {fourthParam}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <AppSubmit buttonText="Рассчитать" buttonClickHandler={handlerSubmit}/>
                </div>
                {serverResponse &&
                    <div className="server-response">
                        <div className="response-content">
                            <p>D1_EI: {serverResponse.D1_EI}</p>
                            <p>D1_ES: {serverResponse.D1_ES}</p>
                            <p>D1_max: {serverResponse.D1_max}</p>
                            <p>D1_min: {serverResponse.D1_min}</p>
                            <p>D2_EI: {serverResponse.D2_EI}</p>
                            <p>D2_ES: {serverResponse.D2_ES}</p>
                            <p>D2_max: {serverResponse.D2_max}</p>
                            <p>D2_min: {serverResponse.D2_min}</p>
                            <p>P: {serverResponse.P}</p>
                            <p>S_inner_max: {serverResponse.S_inner_max}</p>
                            <p>S_inner_min: {serverResponse.S_inner_min}</p>
                            <p>S_middle_max: {serverResponse.S_middle_max}</p>
                            <p>S_middle_min: {serverResponse.S_middle_min}</p>
                            <p>T: {serverResponse.T}</p>
                            <p>d1: {serverResponse.d1}</p>
                            <p>d1_ei: {serverResponse.d1_ei}</p>
                            <p>d1_es: {serverResponse.d1_es}</p>
                            <p>d1_max: {serverResponse.d1_max}</p>
                            <p>d1_min: {serverResponse.d1_min}</p>
                            <p>d2: {serverResponse.d2}</p>
                            <p>d2_ei: {serverResponse.d2_ei}</p>
                            <p>d2_es: {serverResponse.d2_es}</p>
                            <p>d2_max: {serverResponse.d2_max}</p>
                            <p>d2_min: {serverResponse.d2_min}</p>
                            <p>d3: {serverResponse.d3}</p>
                            <p>d_ei: {serverResponse.d_ei}</p>
                            <p>d_es: {serverResponse.d_es}</p>
                            <p>d_f_diameters_average_bolt: {serverResponse.d_f_diameters_average_bolt}</p>
                            <p>d_max: {serverResponse.d_max}</p>
                            <p>d_min: {serverResponse.d_min}</p>
                            <p>d_w_diameters_average_bolt: {serverResponse.d_w_diameters_average_bolt}</p>
                        </div>
                    </div>
                }
                <SVGViewer 
                    svgContent={
                        <svg width='100%' viewBox="0 0 100 100">
                            <circle cx="50" cy="50" r="19" fill="#1e2248" />
                        </svg>
                    } 
                />
            </div>
        </>
    );
}
