import { connect } from 'react-redux';
import NoteLabelsIndex from './NoteLabelsIndex';


const mapStateToProps = state => ({
  allLabels: state.entities.labels
});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(NoteLabelsIndex);

