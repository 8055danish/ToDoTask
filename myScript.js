var tasks = [];
var tasks_c = [];
var i = 0;
var k = 0;

function addTask() {
	var inputValue = document.getElementById("addtask").value;
	if (inputValue === '') {
		alert("Please Add Task");
		
	} else {

		tasks[i] = document.getElementById('addtask').value;
		i += 1;
	}
	if(tasks.length>=1){
		display_tasks();
	}
}

function display_tasks(){
	var l = "";
	for(j=0;j<tasks.length;j++){

		l += "<li><input type='checkbox' class='mr-2' onclick='checkbox("+j+")' id='checkbox-"+j+"'>"+tasks[j]+"<input id='input-"+j+"' class='ml-2' type='text'><input type='button' class='ml-2 btn btn-warning' value='Edit' onclick='edit1("+j+")'><input type='button' class='ml-2 btn btn-danger' value='Delete' onclick='delete1("+j+")'></li><br>";
	}
	document.getElementById('todo').innerHTML = l;
}

function edit1(j){
	if( document.getElementById('input-'+j).value !=''){
		tasks[j] = document.getElementById('input-'+j).value;
		document.getElementById('input-'+j).value = tasks[j];
		display_tasks();
	}
	document.getElementById('input-'+j).value = tasks[j];
}

function delete1(j){
	tasks.splice(j,1);
	display_tasks();
	display_tasks_c();
	i -=1;
}

function delete2(j){
	tasks_c.splice(j,1);
	display_tasks();
	display_tasks_c();
	k -=1;
}

function edit2(j){
	if( document.getElementById('input1-'+j).value !=''){
		tasks_c[j] = document.getElementById('input1-'+j).value;
		document.getElementById('input1-'+j).value = tasks_c[j];
		display_tasks_c();
	}
	document.getElementById('input1-'+j).value = tasks_c[j];
}

function display_tasks_c(){
	var l = "";
	for(j=0;j<tasks_c.length;j++){
		l += "<li><input type='checkbox' class='mr-2' onclick='checkbox("+j+")' id='checkbox-"+j+"' checked>"+tasks_c[j]+"<input id='input1-"+j+"' class='ml-2' type='text'><input type='button' class='ml-2 btn btn-warning' value='Edit' onclick='edit2("+j+")'><input type='button' class='ml-2 btn btn-danger' value='Delete' onclick='delete2("+j+")'></li><br>";
	}
	document.getElementById('todo_c').innerHTML = l;
}

function checkbox(j){
	var checkBox = document.getElementById("checkbox-"+j);
	if (checkBox.checked == true){
		var c = tasks[j];
		tasks.splice(j,1);
		tasks_c[k]= c;
		k +=1;
		i -=1;
		display_tasks();
		display_tasks_c();


	} else {
		var d = tasks_c[j];
		tasks_c.splice(j,1);
		tasks[i] = d;
		i +=1;
		k-=1;
		display_tasks();
		display_tasks_c();
	}
}