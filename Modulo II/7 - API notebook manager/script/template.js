export default{
  newNotebookTemplate, noteBookTemplate, pageButtonTemplate
}

import utils from "./util.js"

function newNotebookTemplate() {

    const div = document.createElement("div");
    div.id ="new_notebookDiv>";
    div.innerHTML = `
      <label for="new_notebookName">Name:</label>                   <input id="new_notebookName" type="text">
      <label for="new_notebookcurrentPrice">Current Price:</label>  <input id="new_notebookCurrentPrice" type="number">
      <input id="saveBtn" type="button" readonly value="Save">
   `
   return div;
}

function noteBookTemplate(data){
  const div = document.createElement("div");
    div.id =`${data.id}_notebook`;
    div.innerHTML = `
        <label for="${data.id}_notebookId">Id:</label>                       <input id="${data.id}_notebookId" value="${data.id}" type="text" readonly>
        <label for="${data.id}_notebookName">Name:</label>                   <input id="${data.id}_notebookName" value="${data.name}" type="text" >
        <label for="${data.id}_notebookcurrentPrice">Current Price:</label>  <input id="${data.id}_notebookCurrentPrice" value="${data.currentPrice}" type="number">
        <label for="${data.id}_notebooklastUpdate">Last Update:</label>      <input id="${data.id}_notebookLastUpdate" value="${utils.formatDate(data.lastUpdate)}" type="datetime" readonly >
        <input id="${data.id}_notebookBtnUpdate" type="button" readonly value="Update">
        <input id="${data.id}_notebookBtnDelete" type="button" readonly value="Delete">
    ` 
    return div;
}

function pageButtonTemplate () { 
  const div = document.createElement("div");
  div.id ="pageBtn";
  div.innerHTML = ` <button type="button" id="previousPage" ")>Previous</button>
                    <input id="currentPage" type="text" readonly style="width:15px; text-align:center;">
                    <button type="button" id="nextPage"> Next</button>`;
 return div;
}