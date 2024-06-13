import './styles.css'

interface AppInputProps {
    inputLabel: string;
    inputType: string;
    inputPlaceholder: string;
    inputChangeHandler: () => void
}

export const AppInput = (props: AppInputProps) => {
    return <div className="app-input">
        <label className="app-input__label">{props.inputLabel}</label>
        <input className="app-input__input" type={props.inputType} onChange={props.inputChangeHandler} placeholder={props.inputPlaceholder} />
    </div>
}