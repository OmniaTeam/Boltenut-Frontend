import { AppHeader, AppInput, AppSubmit } from "./components";
import { ChangeEvent, useState } from "react";

import './app.css';

export default function App() {
    const [primaryParam, setPrimaryParam] = useState<string>('{}');
    const [firstParam, setFirstParam] = useState<string>('{}');
    const [secondParam, setSecondParam] = useState<string>('{}');
    const [thirdParam, setThirdParam] = useState<string>('{}');
    const [fourthParam, setFourthParam] = useState<string>('{}');

    return (
        <>
            <AppHeader />
            <div className="application">
                <div className="app-inputs">
                    <div style={{ display: 'flex', alignItems: "center", gap: '24px' }}>
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
                    <AppSubmit buttonText="Рассчитать" buttonClickHandler={() => {}}/>
                </div>
                <svg viewBox="0 0 100 100" className="app-scheme">
                    <circle cx="50" cy="50" r="19" fill="#1e2248" />
                    {/* You can add more SVG elements here for your drawing */}
                </svg>
            </div>
        </>
    );
}