const hintBtn = document.getElementById("hintButton");

const postBtn = document.getElementById("post");
const deleteBtn = document.getElementById("delete");
const getAllBtn = document.getElementById("getAll");

const getAllNames = () => {
  axios.get("http://localhost:4000/api/names/").then((res) => {
    const data = res.data;
    alert(data);
  });
};

const postName = () => {
  axios.post("http://localhost:4000/api/names/", {
    name: document.getElementById("nameInput").value,
  });
};

const deleteAllNames = () => {
  axios.delete("http://localhost:4000/api/names/");
};

//////////////////////////////////////////////////////////////////////////

const getHint = () => {
  axios.get("http://localhost:4000/api/hint/").then((res) => {
    const data = res.data;
    alert(data);
  });
};

hintBtn.addEventListener("click", getHint);

getAllBtn.addEventListener("click", getAll);
