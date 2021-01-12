import { connect } from "react-redux"
import MonComposant from "./MonComposant"

const mapStateToProps = state => ({message: state.message})

export default connect(mapStateToProps)(MonComposant)