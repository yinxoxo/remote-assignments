function ajax(apiUrl) {
  return fetch(apiUrl)
    .then((response) => {
      return response.json();
    })
    .catch((error) => {
      console.error(error);
    });
}

function render(data) {
  document.body.innerHTML = "";

  // 建立ul，放到body
  const ul = document.createElement("ul");
  document.body.appendChild(ul);

  //product資訊放入li
  data.forEach((product) => {
    const li = document.createElement("li");
    li.textContent = ` Name: ${product.name}, Price: ${product.price}, Description: ${product.description}`;
    ul.appendChild(li);
  });
}

const apiUrl =
  "https://remote-assignment.s3.ap-northeast-1.amazonaws.com/products";

ajax(apiUrl).then((data) => {
  render(data);
});
