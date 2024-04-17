// Create an asynchronous function that will fetch the data
async function fetchData() {
  try {
    // Fetches the data
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    console.log(data);

    const dataList = document.getElementById("data");
    const myImg = document.getElementById("photo");

    data.forEach((item) => {
      const li = document.createElement("li");
      myImg.src = item.image
      dataList.appendChild(li);
    });

  } catch (error) {
    console.log(error);
  }

}

fetchData();
