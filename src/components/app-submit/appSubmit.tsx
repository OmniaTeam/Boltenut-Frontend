import './styles.css'

interface AppSubmitProps {
    buttonText: string;
    buttonClickHandler: () => void
}

export const AppSubmit = (props: AppSubmitProps) => {
    return <button className="app-submit" type="submit" onClick={props.buttonClickHandler}>{props.buttonText}</button>
}