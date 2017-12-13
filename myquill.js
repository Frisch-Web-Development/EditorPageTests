


$(document).ready(function(){
	var toolbarOptions = [ 
	[{'font' : []}],
	[ {'size': []}],
	['bold','italic','underline'],
	[{"color": []}, {"background": []}], 
	['link','video','formula','image'],
	[{'align':[]}],
	[{'indent': '+1'}, {'indent': '-1'}	]
	];
	
	var quill = new Quill('#editor', 	{
		modules: { toolbar: toolbarOptions}, 
		theme: "snow"
	});
	

	
	
});