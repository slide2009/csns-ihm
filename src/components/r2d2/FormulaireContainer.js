import { connect } from "react-redux";
import { addMessageAction } from "../../redux/r2d2/message.action";
import Formulaire from "./Formulaire";

const mapDispatchToProps = dispatch => ({
    enregistrerDansStore: messageChoisi => dispatch(addMessageAction(messageChoisi))
}) 
export default connect(null, mapDispatchToProps)(Formulaire);