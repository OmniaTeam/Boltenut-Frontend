import { AppHeader, AppInput } from "./components";

export default function App() {
	return <div className="application">
		<AppHeader />
		<div className="app-inputs">
			<AppInput inputLabel={""} inputType={""} inputPlaceholder={""} inputChangeHandler={() => {}}/>
			<AppInput inputLabel={""} inputType={""} inputPlaceholder={""} inputChangeHandler={() => {}}/>
			<AppInput inputLabel={""} inputType={""} inputPlaceholder={""} inputChangeHandler={() => {}}/>
			<AppInput inputLabel={""} inputType={""} inputPlaceholder={""} inputChangeHandler={() => {}}/>
		</div>
		<div className="app-scheme"></div>
	</div>
}