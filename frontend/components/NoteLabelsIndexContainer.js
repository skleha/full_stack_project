
import { connect } from 'react-redux';
import NoteLabelsIndex from './NoteLabelsIndex';


const mapStateToProps = state => ({
  labels: Object.values(state.entities.labels),
  assignments: Object.values(state.entities.assignments)
});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(NoteLabelsIndex);

