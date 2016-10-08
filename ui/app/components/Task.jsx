import React, {Component} from "react";

export default class Task extends Component {

    render() {
        let parentId = this.props.task.id;
        let parentRef = "#" + parentId;
        let taskContentId = "taskContent_" + this.props.task.id;
        let taskContentRef = "#" +taskContentId;
        return <div id={parentId} className="task">
            <a href="#" className="list-group-item" data-toggle="collapse" data-parent={parentRef}
               href={taskContentRef}
               aria-expanded="true" aria-controls={taskContentId}>{this.props.task.subject}
                <span className="pull-right">
				<button className="btn btn-xs btn-warning" onClick={() => this.props.onTaskDelete(this.props.task)}>
					<span className="glyphicon glyphicon-trash"></span>
				</button>
			</span>
            </a>
            <div className="list-group collapse" id={taskContentId}>
                <div className="list-group-item">{this.props.task.content}</div>
            </div>
        </div>
    }
}