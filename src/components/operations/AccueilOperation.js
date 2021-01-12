import { range } from "lodash";

const { default: FormulaireContainer } = require("../r2d2/FormulaireContainer")

const AccueilOperation = () => {
    return <FormulaireContainer numeros={range(1,10)}/>
}

export default AccueilOperation;