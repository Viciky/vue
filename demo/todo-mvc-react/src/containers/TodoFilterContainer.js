import { connect } from 'react-redux'
import TodoFilter from '../components/TodoFilter'
import { setFilterMode } from '../redux/actions'

const mapStateToProps = state => {
  return {
    mode: state.filterMode
  }
}
const mapDispatchToProps = dispatch => ({
  setFilterMode: mode => dispatch(setFilterMode(mode))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoFilter)
