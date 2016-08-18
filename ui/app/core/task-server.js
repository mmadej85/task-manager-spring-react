import $ from 'jquery';

export function getAllTasks(callback) {
	$.get('api/tasks', callback);
}

