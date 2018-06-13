import React from 'react'
import { connect } from 'react-redux'

class Progressbar extends React.Component {
	render(){
		console.log('currEnd')
		console.log(this.props.receiveNextPageInfo.currEnd)
		console.log('totalPages')
		console.log(this.props.receiveNextPageInfo.totalPages)
		let	progrWidth = ( this.props.receiveNextPageInfo.currEnd / this.props.receiveNextPageInfo.totalPages) * 100
		
		

		let progressStyle = {
			width: progrWidth+'%'
		}
		
		return (
				<div id="student-profiles-search__profileInfo__wrap-progress-bar">
					<div className="progressbar-bar" style={progressStyle}></div>
				</div>
			)
	}
}

const mapStateToProps = (state) => {
	const {receiveNextPageInfo} = state

	return{
		receiveNextPageInfo
	}
}

export default connect(mapStateToProps)(Progressbar)