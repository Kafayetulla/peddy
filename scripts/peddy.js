const loadCategories= () => {
    fetch("https://openapi.programming-hero.com/api/peddy/categories")
      .then((res) => res.json())
      .then((data) => displayCategories(data.categories))
      .catch((error) => console.log(error));
  };
const loadPets= () => {
    fetch("https://openapi.programming-hero.com/api/peddy/pets")
      .then((res) => res.json())
      .then((data) => displyPets(data.pets) )
      .cat((error) => console.log(error));
  };
//   const loadCategoryPets=(id)=>{
// alert(id);
//   };
  const displyPets=(pets)=>{
    const petContainer=document.getElementById("pets")
        pets.forEach((pet)=>{
            console.log(pet);
            const card =document.createElement("div");
            card.classList="card card-compact";
            card.innerHTML=`
            <figure class="h-full">
    <img class="h-full w-full object-cover"
      src=${pet.image}>
  </figure>
  <div class="px-0 py-2">
    <div class="font-bold">${pet.pet_name}</div>
    <div>${pet.breed}</div>
    <div>${pet.date_of_birth}</div>
    <div>${pet.gender}</div>
    <div>${pet.price}</div>
    </div>
  </div>
    `;
    petContainer.append(card);
        });
    
  };
 const displayCategories=(categories)=>{
    const categoryContainer =document.getElementById("categories")
  categories.forEach((item)=>{
    console.log(item);
    // create button 
    const button=document.createElement("button");
    button.classList="btn";
    button.innerText=item.category;
    categoryContainer.append(button);

    // const buttonContainer =document.createElement("div");
    // buttonContainer.innerHTML=`
    // <button onclik="loadCategoryPets(${item.category-id})" class="btn">${item.category}</button>
    // `
    
    // categoryContainer.append(button);
  });
};
  loadCategories();
  loadPets();