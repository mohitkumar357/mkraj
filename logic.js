const tasklist=[];
const addtask=function(){
    const name=document.getElementById("name").value 
    console.log(name);
    const tempObj={
        id:Date.now(),
        taskName:name
    }
    tasklist.push(tempObj);
    console.log(tasklist);
    addTaskOnScreen();
}
function addTaskOnScreen(){
    const element=document.createElement("div");
    element.setAttribute("class","child");
    element.innerText=tasklist[tasklist.length-1].taskName;
    const parentElement=document.getElementById("main_parent");
    parentElement.appendChild(element);
    const hor_line=document.createElement("hr");
    hor_line.setAttribute("class","line");
    element.appendChild(hor_line);
    const del_icon=document.createElement("i");
    del_icon.setAttribute("class","fa fa-trash del");
    element.appendChild(del_icon);
    const add_icon=document.createElement("i");
    add_icon.setAttribute("class","fa-solid fa-circle-plus add");
    element.appendChild(add_icon);

    let upfront=document.getElementById("upfront");
    upfront.style.display="none";
    parentElement.style.filter="blur(0px)";
    const white=document.getElementsByClassName("white");
    white[0].style.display="none";

    let upfront1=document.getElementById('upfront1');
    add_icon.addEventListener('click',function(){
        upfront1.style.display="block";
        parentElement.style.filter="blur(12px)";
    })

    // let heading=tasklist[tasklist.length-1].taskName;
    // heading.addEventListener('click',function(){
    //     parentElement.style.display="none";
    // })

    const todo=document.createElement("div");
    todo.setAttribute("class","to-do");
    todo.setAttribute("id","todoContainer");
    element.appendChild(todo);
    const btn=document.getElementById("btn");
    const name1=document.getElementById("name1");
    // const tasklist2=[];
    // const tempObj2={
    //     taskName2:name1
    // }
    // tasklist2.push(tempObj2);

    btn.addEventListener('click',function(){
        parentElement.style.filter="blur(0px)";
        upfront1.style.display="none";
        let paragraph=document.createElement('p');
        paragraph.classList.add('paragraph-styling');
        todo.appendChild(paragraph);
        paragraph.innerText=name1.value;
        name1.value="";
        // todo.innerText=tasklist2[tasklist2.length-1].taskName2;
        let mark=document.createElement("button");
        mark.setAttribute("id","mark");
        mark.innerHTML="Mark Done";
        mark.style.backgroundColor="blue";
        mark.style.color="white";
        mark.style.width="70px";
        mark.style.height="20px";
        mark.style.textAlign="center";
        mark.style.borderRadius="5px";
        mark.style.fontSize="10px";
        mark.style.padding="0px";
        todo.appendChild(mark);
       
        mark.addEventListener('click',function(){
            paragraph.style.textDecoration="line-through";
            paragraph.style.color="red";
            mark.style.display="none";
        })

       
       

    })
    // element[0].addEventListener('dblclick',function(){
    //     parentElement.style.display="none";
    //     // const container=document.getElementById("parent");
    //     const white2=document.getElementsByClassName("white2");
    //     white2[0].style.display="none";
    //     element[0].style.margin="auto";
    // })
z
    // const del=document.getElementsByClassName("fa fa-trash del");
    // del.addEventListener('click',function(){
    // const element=document.getElementsByClassName("child");
    // element.style.display="none";
        

}


function show_upfront(){
   let upfront=document.getElementById("upfront");
   const parentElement=document.getElementById("main_parent");
   upfront.style.display="block";
   parentElement.style.filter="blur(12px)";
  
}
function close1(){
    let upfront=document.getElementById("upfront");
    const parentElement=document.getElementById("main_parent");
    upfront.style.display="none";
    parentElement.style.filter="blur(0px)";
}
function close2(){
    let upfront1=document.getElementById("upfront1");
    const parentElement=document.getElementById("main_parent");
    upfront1.style.display="none";
     parentElement.style.filter="blur(0px)";
}