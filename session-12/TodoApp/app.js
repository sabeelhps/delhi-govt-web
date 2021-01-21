const inputTask = document.getElementById('inputTask');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');


addTaskBtn.onclick=function(){

    // console.log(inputTask.value);
    const listItem = document.createElement('li');
    const removeBtn = document.createElement('button');
    const upBtn = document.createElement('button');
    const downBtn = document.createElement('button');


    removeBtn.innerHTML=`<i class="fas fa-trash-alt"></i>`;
    upBtn.innerHTML=`<i class="far fa-arrow-alt-circle-up"></i>`;
    downBtn.innerHTML=`<i class="far fa-arrow-alt-circle-down"></i>`;

    listItem.append(removeBtn);
    listItem.append(upBtn);
    listItem.append(downBtn);

    listItem.append(inputTask.value);

    taskList.appendChild(listItem);

    inputTask.value="";


    // Removing Elements

    removeBtn.onclick=function(){
        listItem.remove();
    }

    // Move Up

    upBtn.onclick=function(){
        taskList.insertBefore(listItem,listItem.previousElementSibling);
    }

    // Move Down

    downBtn.onclick=function(){
        taskList.insertBefore(listItem,listItem.nextElementSibling.nextElementSibling);
    }
    
}


