import { connect } from "react-redux";
import { addMessageAction } from "./message.action";
import Formulaire from "./Formulaire";

const mapDispatchToProps = dispatch => ({
    enregistrerDansStore: messageChoisi => dispatch(addMessageAction(messageChoisi))
}) 
export default connect(null, mapDispatchToProps)(Formulaire);