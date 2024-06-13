import './styles.css'

interface AppSelectProps {
    selectLabel: string;
    options: string[];
    selectChangeHandler: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

export const AppSelect: React.FC<AppSelectProps> = ({ selectLabel, options, selectChangeHandler }) => {
    return (
        <div className="app-select">
            <label className="app-select__label">{selectLabel}</label>
            <select className="app-select__select" onChange={selectChangeHandler}>
                {options.map((option, index) => (
                    <option key={index} value={option}>{option}</option>
                ))}
            </select>
        </div>
    );
};